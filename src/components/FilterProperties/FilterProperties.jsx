import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { Modal, Select } from "antd";
import { categories, cities, propertyTypes } from "./filterConstants";
import "./filter-properties.less";
import { BsSearch } from "react-icons/bs";
import FilterModal from "./FilterModal";

const { Option } = Select;

function FilterProperties() {
  const [filterModal, setFilterModal] = useState(false);

  const options = [
    { value: "Kukatpally" },
    { value: "Hitech City" },
    { value: "Gachibowli" },
    { value: "Gajulramaram" },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const showFilterModal = () => {
    setFilterModal(true);
  };

  return (
    <div className="filter-wrapper">
      <div className="left-icon">
        <FaSlidersH />
      </div>
      <div className="search-bar">
        <Select
          suffixIcon={<BsSearch />}
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select Locality"
          onChange={handleChange}
          options={options}
          maxTagCount={2}
        />
      </div>
      <div className="property-type">
        <Select placeholder="Property Type">
          {propertyTypes.map((i, index) => {
            return (
              <Option value={i} key={index}>
                {i}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className="cities-wrapper">
        <Select placeholder="City">
          {cities.map((i, index) => {
            return (
              <Option value={i} key={index}>
                {i}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className="category-wrapper">
        <Select placeholder="Category">
          {categories.map((i, index) => {
            return (
              <Option value={i} key={index}>
                {i}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className="advance-filters" onClick={() => showFilterModal()}>
        <FaSlidersH />
        <span className="text"> More Filters</span>
        <div className="total-filters">2</div>
      </div>
      <Modal
        open={filterModal}
        className="filter-modal"
        centered
        closeIcon={false}
        mask={true}
        footer={false}
        onCancel={() => setFilterModal(false)}
      >
        <FilterModal />
      </Modal>
    </div>
  );
}

export default FilterProperties;
