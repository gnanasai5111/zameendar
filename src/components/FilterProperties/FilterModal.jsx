import React, { useState } from "react";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { Checkbox, Col, InputNumber, Row, Select, Switch } from "antd";
import {
  amenities,
  areaTypes,
  convertNumToCurrency,
  furnishing,
  propertyAges,
  propertyFacings,
} from "./filterConstants";
import SelectOptions from "../selectOptions/SelectOptions";
import "./filter-modal.less";

const { Option } = Select;
function FilterModal() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000000000);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(5000);
  const [area, setArea] = useState();
  const [saleType, setSaleType] = useState("");
  const [bedrooms, setBedrooms] = useState([]);
  const [bathrooms, setBathrooms] = useState([]);
  const [bikeParkings, setBikeParkings] = useState([]);
  const [carParkings, setCarParkings] = useState([]);
  const [constructionStatus, setConstructionStatus] = useState([]);
  const [propertyAge, setPropertyAge] = useState([]);
  const [facing, setFacing] = useState([]);
  const [propertyFurnishing, setPropertyFurnishing] = useState();
  const [amenity, setAmenity] = useState([]);

  const handleMinPriceChange = (value) => {
    setMinVal(value);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  // console.log(minPrice,maxPrice)

  const handleMaxPriceChange = (value) => {
    setMaxVal(value);
  };
  return (
    <>
      <div className="header">
        Filters<span className="cancel-icon">X</span>
      </div>
      <div className="content">
        <div className="row">
          <h6 className="title">Sale Type</h6>
          <div className="btns-grp">
            <div
              className={saleType === "New" ? "btn active" : "btn"}
              onClick={() => setSaleType("New")}
            >
              New
            </div>
            <div
              className={saleType === "Resale" ? "btn active" : "btn"}
              onClick={() => setSaleType("Resale")}
            >
              Resale
            </div>
          </div>
        </div>
        <div className="row">
          <h6 className="title">Price Range</h6>
          <MultiRangeSlider
            min={0}
            max={1000000000}
            minVal={minVal}
            setMinVal={setMinVal}
            maxVal={maxVal}
            setMaxVal={setMaxVal}
            onChange={({ min, max }) => {
              setMinVal(min);
              setMaxVal(max);
            }}
          />
          <Row gutter={[12, 0]} style={{ marginTop: "4rem" }}>
            <Col span={12}>
              <div className="price-col">
                <p className="label">Min</p>
                <InputNumber
                  min={0}
                  value={minVal}
                  onChange={handleMinPriceChange}
                  prefix="₹"
                />
                <p className="currency">₹ {convertNumToCurrency(minVal)}</p>
              </div>
            </Col>
            <Col span={12}>
              <div className="price-col">
                <p className="label">Max</p>
                <InputNumber
                  min={0}
                  value={maxVal}
                  onChange={handleMaxPriceChange}
                  prefix="₹"
                />
                <p className="currency">₹ {convertNumToCurrency(maxVal)}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="row">
          <h6 className="title">Construction Status</h6>
          <div className="select-options-wrapper">
            <SelectOptions
              total={["Ready to move", "Under Construction"]}
              value={constructionStatus}
              setValue={setConstructionStatus}
              type="constructionStatus"
              multiple={true}
            />
          </div>
        </div>
        <div className="row">
          <h6 className="title">Bedrooms & Bathrooms</h6>
          <div className="select-options-wrapper">
            <h4 className="inner-title">Bedrooms</h4>
            <SelectOptions
              total={["Any", 2, 3, 4, "5+"]}
              value={bedrooms}
              setValue={setBedrooms}
              type="Bedrooms"
              multiple={true}
            />
          </div>
          <div className="select-options-wrapper">
            <h4 className="inner-title">Bathrooms</h4>
            <SelectOptions
              total={["Any", "2", "3", "4", "5+"]}
              value={bathrooms}
              setValue={setBathrooms}
              type="Bathrooms"
            />
          </div>
        </div>
        <div className="row">
          <h6 className="title">Parkings</h6>
          <div className="select-options-wrapper">
            <h4 className="inner-title">Bike Parkings</h4>
            <SelectOptions
              total={["Any", "2", "3", "4", "5+"]}
              value={bikeParkings}
              setValue={setBikeParkings}
              type="bikeParkings"
            />
          </div>
          <div className="select-options-wrapper">
            <h4 className="inner-title">Car Parkings</h4>
            <SelectOptions
              total={["Any", "2", "3", "4", "5+"]}
              value={carParkings}
              setValue={setCarParkings}
              type="carParkings"
            />
          </div>
        </div>
        <div className="row">
          <h6 className="title">Amenities</h6>
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <Row gutter={[0, 12]}>
              {amenities.map((i) => {
                return (
                  <Col span={8}>
                    <Checkbox value={i}>{i}</Checkbox>
                  </Col>
                );
              })}
            </Row>
          </Checkbox.Group>
        </div>

        <div className="row">
          <h6 className="title">Builtup Area</h6>
          <Select
            value={area}
            onChange={(value) => setArea(value)}
            placeholder="Select Area"
          >
            {areaTypes.map((type) => {
              return <Option value={type}>{type}</Option>;
            })}
          </Select>
          {area ? (
            <>
              <MultiRangeSlider
                min={0}
                max={5000}
                minVal={minArea}
                setMinVal={setMinArea}
                maxVal={maxArea}
                setMaxVal={setMaxArea}
                onChange={({ min, max }) => {
                  setMinArea(min);
                  setMaxArea(max);
                }}
              />
              <Row gutter={[12, 0]} style={{ marginTop: "4rem" }}>
                <Col span={12}>
                  <div className="price-col">
                    <p className="label">Min</p>
                    <InputNumber
                      min={0}
                      value={minArea}
                      onChange={(e) => setMinArea(e)}
                    />
                    <p className="currency">
                      {minArea} {area}
                    </p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="price-col">
                    <p className="label">Max</p>
                    <InputNumber
                      min={0}
                      value={maxArea}
                      onChange={(e) => setMaxArea(e)}
                    />
                    <p className="currency">
                      {" "}
                      {convertNumToCurrency(maxArea)} {area}
                    </p>
                  </div>
                </Col>
              </Row>
            </>
          ) : null}
        </div>
        <div className="row">
          <h6 className="title">Property Age</h6>
          <div className="select-options-wrapper">
            <SelectOptions
              total={propertyAges}
              value={propertyAge}
              setValue={setPropertyAge}
              type="propertyAge"
              multiple={true}
            />
          </div>
        </div>
        <div className="row">
          <h6 className="title">Facing</h6>
          <div className="select-options-wrapper">
            <SelectOptions
              total={propertyFacings}
              value={facing}
              setValue={setFacing}
              type="facing"
              multiple={true}
            />
          </div>
        </div>
        <div className="row">
          <h6 className="title">RERA Compliant</h6>
          <Switch />
        </div>
        <div className="row">
          <h6 className="title">Furnishing</h6>
          <div className="select-options-wrapper">
            <SelectOptions
              total={furnishing}
              value={propertyFurnishing}
              setValue={setPropertyFurnishing}
              type="propertyFurnishing"
              multiple={true}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="reset-btn">Reset All</div>
        <div className="apply-btn">Apply</div>
      </div>
    </>
  );
}

export default FilterModal;
