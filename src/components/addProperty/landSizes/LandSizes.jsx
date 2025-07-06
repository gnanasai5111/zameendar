import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React from "react";
import "./land-sizes.less";

function LandSizes({ selectedLand, setSelectedLand }) {
  const editHandler = (value, index) => {
    let temp = selectedLand;
    temp[index] = value;
    setSelectedLand([...temp]);
  };

  const deleteHandler = (val) => {
    let temp = selectedLand.filter((i, index) => index !== val);
    setSelectedLand([...temp]);
  };

  const addMoreHandler = () => {
    if (selectedLand.every((i) => i)) {
      setSelectedLand([...selectedLand, ""]);
    } else {
      message.error("Please fill the following first!");
    }
  };

  return (
    <>
      <div className="land-sizes-wrapper">
        {selectedLand?.map((i, index) => {
          return (
            <div className="land-size">
              <div className="content-box">
                <Input
                  placeholder="Land Area"
                  value={i}
                  onChange={(e) => editHandler(e.target.value, index)}
                />
                {index !== 0 && (
                  <DeleteOutlined onClick={() => deleteHandler(index)} />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="add-more" onClick={() => addMoreHandler()}>
        +Add more
      </div>
    </>
  );
}

export default LandSizes;
