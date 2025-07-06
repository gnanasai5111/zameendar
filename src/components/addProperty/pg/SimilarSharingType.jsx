import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useState } from "react";

function SimilarSharingType({
  currentActive,
  setSelectedTypes,
  selectedTypes,
  index,
  id,
}) {
  const [rent, setRent] = useState(
    selectedTypes[currentActive][index].rent_per_month
  );
  const [advance, setAdvance] = useState(
    selectedTypes[currentActive][index].safety_deposit
  );

  const deleteHandler = () => {
    setSelectedTypes({
      ...selectedTypes,
      [currentActive]: selectedTypes[currentActive]?.filter((i) => i.id !== id),
    });
  };

  const editHandler = () => {
    let temp = selectedTypes[currentActive];
    temp[index].isEdit = true;
    setSelectedTypes({ ...selectedTypes, [currentActive]: temp });
  };

  const saveHandler = () => {
    if (rent && advance) {
      let temp = selectedTypes[currentActive];
      temp[index].safety_deposit = advance;
      temp[index].rent_per_month = rent;
      temp[index].isEdit = false;
      setSelectedTypes({ ...selectedTypes, [currentActive]: temp });
    } else {
      message.error("Please enter both rent and advance!");
    }
  };

  return (
    <div className="input-wrapper">
      {selectedTypes[currentActive][index].isEdit ? (
        <>
          <div className="header">
            <p>
              {" "}
              {currentActive} Type - {index + 1}
            </p>
            {index !== 0 && <DeleteOutlined onClick={() => deleteHandler()} />}
          </div>
          <div className="content-forms">
            <Input
              placeholder={`${currentActive} Rent Per Month`}
              className="pg-size"
              type="number"
              min={0}
              prefix="₹"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />
            <Input
              placeholder={`${currentActive} Safety Deposit`}
              className="pg-size"
              type="number"
              min={0}
              prefix="₹"
              value={advance}
              onChange={(e) => setAdvance(e.target.value)}
            />
            <Button onClick={() => saveHandler()}>Save</Button>
          </div>
        </>
      ) : (
        <div className="header">
          <p>
            {" "}
            {currentActive} Type - {index + 1}
            <span style={{ color: "#41c34c" }}> ({rent}) ₹</span>
          </p>
          <EditOutlined onClick={() => editHandler()} />
        </div>
      )}
    </div>
  );
}

export default SimilarSharingType;
