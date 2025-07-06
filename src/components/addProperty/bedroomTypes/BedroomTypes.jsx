import React from "react";
import "./bedroom-types.less";
import { bedroomTypes } from "../constants";
import IndividualRoom from "./IndividualRoom";
import { message } from "antd";

const BedroomTypes = ({
  selectedTypes,
  setSelectedTypes,
  selectedRooms,
  setSelectedRooms,
  setCurrentActive,
  currentActive,
  units,
}) => {
  // selecting rooms and current active room
  const handleRooms = (type) => {
    if (currentActive === type) {
      let temp = selectedRooms.filter((i) => i !== type);
      setSelectedRooms(temp);
      setSelectedTypes({
        ...selectedTypes,
        [currentActive]: [
          { sqft: "", image: [], id: Date.now(), isEdit: true },
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
          { sqft: "", image: [], id: Date.now(), isEdit: true },
        ],
      });
    }
  };

  return (
    <>
      <div className="bedroom-section">
        {bedroomTypes.map((type, index) => {
          return (
            <div className="bedroom-options-container" key={index}>
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
      <div className={currentActive ? "bedroom-forms" : "forms"}>
        <div className="bedroom-form-wrapper">
          {currentActive &&
            selectedTypes[currentActive]?.map((i, index) => {
              return (
                <IndividualRoom
                  key={i.id}
                  currentActive={currentActive}
                  setSelectedTypes={setSelectedTypes}
                  selectedTypes={selectedTypes}
                  index={index}
                  imageId={i?.imageId}
                  id={i.id}
                  units={units}
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

export default BedroomTypes;
