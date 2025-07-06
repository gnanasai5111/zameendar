import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import { RightOutlined } from "@ant-design/icons";

function StageProgress({ handleStepChange, stages }) {
  return (
    <>
      <div className="progress-container">
        {stages.map((stage, index) => {
          return (
            <div className="wrapper" onClick={() => handleStepChange(index)}>
              <div
                className={
                  stage.status === "completed"
                    ? "stage-wrapper completed"
                    : stage.status === "current"
                    ? "stage-wrapper current"
                    : "stage-wrapper pending"
                }
              >
                {stage.status === "completed" ? (
                  <AiFillCheckCircle />
                ) : stage.status === "current" ? (
                  <BiRadioCircleMarked />
                ) : (
                  <BiRadioCircle />
                )}
                <p>{stage.title}</p>
              </div>
              <RightOutlined className="right-icon" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StageProgress;
