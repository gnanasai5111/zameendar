import React from "react";
import "./pg-sharing-types.less";
import { pgTypes } from "../constants";
import { message } from "antd";
import SimilarSharingType from "./SimilarSharingType";

const PgSharingTypes = ({
  selectedTypes,
  setSelectedTypes,
  selectedRooms,
  setSelectedRooms,
  setCurrentActive,
  currentActive,
}) => {
  // selecting rooms and current active room
  const handleRooms = (type) => {
    if (currentActive === type) {
      let temp = selectedRooms.filter((i) => i !== type);
      setSelectedRooms(temp);
      setSelectedTypes({
        ...selectedTypes,
        [currentActive]: [
          {
            rent_per_month: "",
            safety_deposit: "",
            id: Date.now(),
            isEdit: true,
          },
        ],
      });
      setCurrentActive("");
    } else {
      setCurrentActive(type);
      if (!selectedRooms.includes(type)) {
        setSelectedRooms([...selectedRooms, type]);
      }
    }
  };

  const addMoreHandler = () => {
    if (selectedTypes[currentActive].some((i) => i.isEdit)) {
      message.error("Please select all the fields!");
    } else {
      setSelectedTypes({
        ...selectedTypes,
        [currentActive]: [
          ...selectedTypes[currentActive],
          {
            rent_per_month: "",
            safety_deposit: "",
            id: Date.now(),
            isEdit: true,
          },
        ],
      });
    }
  };

  return (
    <>
      <div className="pg-section">
        {pgTypes.map((type, index) => {
          return (
            <div className="pg-options-container" key={index}>
              <div
                className={
                  selectedRooms.includes(type)
                    ? "checked-item active"
                    : "checked-item"
                }
                onClick={() => handleRooms(type)}
              >
                {type}
              </div>
            </div>
          );
        })}
      </div>
      <div className={currentActive ? "pg-forms" : "forms"}>
        <div className="pg-form-wrapper">
          {currentActive &&
            selectedTypes[currentActive]?.map((i, index) => {
              return (
                <SimilarSharingType
                  key={i.id}
                  currentActive={currentActive}
                  setSelectedTypes={setSelectedTypes}
                  selectedTypes={selectedTypes}
                  index={index}
                  id={i.id}
                />
              );
            })}
        </div>
      </div>
      {currentActive && (
        <div className="add-more" onClick={() => addMoreHandler()}>
          +Add more
        </div>
      )}
    </>
  );
};

export default PgSharingTypes;
