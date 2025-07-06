import { Progress, Tooltip } from "antd";
import React, { useState } from "react";
import "./property-details-side-bar.less";
import { CaretRightOutlined } from "@ant-design/icons";

function PropertyDetailsSideBar({
  propertyTabs,
  activeItem,
  setActiveItem,
  refs,
}) {
  const [sideBarMobile, setSideBarMobile] = useState(false);
  return (
    <div className="side-bar">
      <div
        className={
          sideBarMobile ? "side-bar-container active" : "side-bar-container"
        }
      >
        {propertyTabs.map((item, index) => {
          return (
            <div
              className={activeItem === index ? "tab-item active" : "tab-item"}
              key={index}
              onClick={() => {
                refs[index].current.scrollIntoView({ behavior: "smooth" });
                setSideBarMobile(false);
              }}
            >
              {item.icon}
            </div>
          );
        })}
        <div className="progress-circle">
          <Progress
            type="circle"
            className="progress"
            showInfo={false}
            percent={(activeItem + 1) * (100 / propertyTabs?.length)}
            strokeColor="#ffb300"
          />
          <div className="dotted"></div>
        </div>
      </div>
      <div
        className="side-bar-mobile"
        onClick={() => setSideBarMobile(!sideBarMobile)}
      >
        <CaretRightOutlined />
      </div>
    </div>
  );
}

export default PropertyDetailsSideBar;
