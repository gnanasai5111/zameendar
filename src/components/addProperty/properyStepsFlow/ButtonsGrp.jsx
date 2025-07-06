import { Button } from "antd";
import React from "react";

function ButtonsGrp({ selectedValue, backHandler, nextHandler }) {
  return (
    <div className="buttons-grp">
      <div className="progress-percentage">
        <div
          className="inner-color"
          style={{ width: `${((selectedValue + 1) / 4) * 100}%` }}
        ></div>
      </div>
      <Button className="back-btn" onClick={() => backHandler()}>
        Back
      </Button>
      <Button
        className="next-btn"
        onClick={() => nextHandler()}
        htmlType="submit"
      >
        Next
      </Button>
    </div>
  );
}

export default ButtonsGrp;
