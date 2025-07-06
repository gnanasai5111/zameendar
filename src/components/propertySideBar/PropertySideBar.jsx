import React, { useState } from "react";
import "./property-side-bar.less";
import { Tooltip } from "antd";
import { categoriesWithIcons } from "../FilterProperties/filterConstants";

function PropertySideBar() {
  const [activeItem, setActiveItem] = useState();
  return (
    <div className="property-side-bar">
      <div className="tab-icons-list">
        {categoriesWithIcons.map((item, index) => {
          return (
            <div
              className={
                activeItem === item.name ? "tab-item active" : "tab-item"
              }
              key={index}
              onClick={() => setActiveItem(item.name)}
            >
              <Tooltip title={item.name} color="#ffb300" placement="right">
                {item.icon}
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PropertySideBar;
