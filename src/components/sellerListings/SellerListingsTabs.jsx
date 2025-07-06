import React from "react";
import "./seller-listings-tabs.less";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function SellerListingsTabs({
  tabs,
  activeData,
  setActiveData,
  searchElement,
  setSearchElement,
}) {
  let activeValue = tabs.filter((i) => i.name === activeData.activeTab)[0];

  return (
    <>
      <div className="listings-tab-wrapper">
        <div className="tab-container">
          {tabs.map((tab, index) => {
            return (
              <div
                className={
                  activeData.activeTab === tab.name ? "tab active" : "tab"
                }
                key={index}
                onClick={() =>
                  setActiveData({
                    ...activeData,
                    activeTab: tab.name,
                    activeType: tab.name !== "All" ? "Sell" : "",
                    activeProperty:
                      tab.name === "Residential"
                        ? "Group Appartment"
                        : tab.name === "Commercial"
                        ? "Co-Working"
                        : "",
                  })
                }
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div className="search-listings">
          <Input
            suffix={<SearchOutlined />}
            value={searchElement}
            placeholder="Search Property Name"
            onChange={(e) => setSearchElement(e.target.value)}
          />
        </div>
      </div>
      <div className={activeData?.activeTab !== "All" ? "detailed-tabs" : ""}>
        {activeData?.activeTab !== "All" && (
          <div className="tab-types">
            {activeValue?.respectiveValues.map((item) => {
              return (
                <div
                  className={
                    activeData?.activeType === item
                      ? "tab-type active"
                      : "tab-type"
                  }
                  onClick={() =>
                    setActiveData({
                      ...activeData,
                      activeType: item,
                      activeProperty:
                        activeValue[item].length > 0
                          ? activeValue[item][0].name
                          : "",
                    })
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
        {activeData?.activeType && activeData?.activeType !== "PG" && (
          <div className="tab-properties">
            <div className="tab-propertie">
              <Select
                placeholder="Property Type"
                value={activeData?.activeProperty}
                onChange={(e) =>
                  setActiveData({ ...activeData, activeProperty: e })
                }
              >
                {activeValue[activeData.activeType]?.length > 0 &&
                  activeValue[activeData.activeType]?.map((i) => {
                    return <Option value={i.name}>{i.name}</Option>;
                  })}
              </Select>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SellerListingsTabs;
