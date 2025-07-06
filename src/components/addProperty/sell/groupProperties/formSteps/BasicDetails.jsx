import { Form, Input, Select, Tag, Radio, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { states, formItemLayout, citiesInIndia } from "../../../constants";
import BedroomTypes from "../../../bedroomTypes/BedroomTypes";
import GetLocationInfo from "../../../Location/GetLocationInfo";
import LandSizes from "../../../landSizes/LandSizes";
import SelectValues from "../../../selectValues/SelectValues";
import "../../../form-styles.less";


const { Option } = Select;

function BasicDetails({
  propertyType,
  data,
  setData,
  form,
  selectedRooms,
  setSelectedRooms,
  currentActive,
  setCurrentActive,
  selectedTypes,
  setSelectedTypes,
  selectedLand,
  setSelectedLand,
  selectedPlots,
  setSelectedPlots,
}) {
  const validateLocation = (_, value) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(data?.maps_details)?.length === 0) {
        reject("Please Enter valid Location by Search!");
      } else {
        resolve();
      }
    });
  };

  // useEffect(() => {
  //   setData({ ...data, bhk_details: { ...selectedTypes } });
  //   form.setFieldValue("bhk_details", { ...selectedTypes });
  // }, [selectedTypes]);

  // useEffect(() => {
  //   setData({ ...data, land_area_sizes: [...selectedLand] });
  //   form.setFieldValue("land_area_sizes", [...selectedLand]);
  // }, [selectedLand]);

  // useEffect(() => {
  //   setData({ ...data, plot_sizes: [...selectedPlots] });
  //   form.setFieldValue("plot_sizes", [...selectedPlots]);
  // }, [selectedPlots]);

  const validateRooms = (_, value) => {
    return new Promise((resolve, reject) => {
      let roomTypes = Object.keys(selectedTypes);
      let roomExists = roomTypes.some((type) => {
        return selectedTypes[type].some((i) => {
          return i.sqft;
        });
      });

      if (!roomExists) {
        reject("Please Select at least one room type!");
      } else {
        resolve();
      }
    });
  };

  const validateVillaFloors = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.number_of_floors?.length === 0) {
        reject("Please Select at least one Type!");
      } else {
        resolve();
      }
    });
  };

  const validateLandAreaSizes = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.land_area_sizes?.length === 0) {
        reject("Please Select at least one Size!");
      } else {
        resolve();
      }
    });
  };

  const validatePlotSizes = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.plot_sizes?.length === 0) {
        reject("Please Select at least one Plot!");
      } else {
        resolve();
      }
    });
  };

  return (
    <div className="details-tab">
      <h5 className="title">
        <Tag>1</Tag> Basic Details
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Property Name</h6>
              </div>
            }
            name="project_name"
            rules={[
              {
                required: true,
                message: "Please enter Project name!",
              },
            ]}
          >
            <Input
              placeholder="Project Name"
              onChange={(e) =>
                setData({ ...data, project_name: e.target.value })
              }
              value={data?.project_name}
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Select a State</h6>
              </div>
            }
            name="state"
            rules={[{ required: true, message: "Please select a state" }]}
          >
            <Select
              showSearch
              placeholder="Select a state"
              onChange={(e) => setData({ ...data, state: e })}
            >
              {states.map((state) => (
                <Option key={state} value={state}>
                  {state}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {data?.state && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Select a City</h6>
                </div>
              }
              name="city"
              rules={[{ required: true, message: "Please select a city" }]}
            >
              <Select
                showSearch
                placeholder="Select a city"
                onChange={(e) => setData({ ...data, city: e })}
              >
                {citiesInIndia[data?.state].map((city) => (
                  <Option key={city} value={city}>
                    {city}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {data?.state && data?.city && (
            <Form.Item
              name="maps_details"
              label={
                <div className="form-label">
                  <h6>Enter the Location</h6>
                </div>
              }
              rules={[
                {
                  validator: validateLocation,
                },
              ]}
            >
              <GetLocationInfo
                setData={setData}
                data={data}
                form={form}
                dataKey={"maps_details"}
              />
            </Form.Item>
          )}

          {propertyType !== "group-plots" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Price per Square feet</h6>
                </div>
              }
              rules={[
                {
                  required: true,
                  message: "Please Enter Price per Square feet!",
                },
              ]}
              name="price_per_sqft"
            >
              <Input
                type="number"
                prefix="₹"
                name="price_per_sqft"
                min={0}
                placeholder="Price per sqft"
                value={data?.price_per_sqft}
                onChange={(e) =>
                  setData({ ...data, price_per_sqft: e.target.value })
                }
              />
            </Form.Item>
          )}

          {propertyType === "group-plots" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Price per Square yard</h6>
                </div>
              }
              name="price_per_sqyd"
              rules={[
                {
                  required: true,
                  message: "Please Enter Price per Square yard!",
                },
              ]}
            >
              <Input
                type="number"
                min={0}
                prefix="₹"
                placeholder="Price per sqyd"
                value={data?.price_per_sqyd}
                onChange={(e) =>
                  setData({ ...data, price_per_sqyd: e.target.value })
                }
              />
            </Form.Item>
          )}
          <Form.Item
            label={
              <div className="form-label">
                <h6>Start Price</h6>
              </div>
            }
            name="start_price"
            rules={[
              {
                required: true,
                message: "Please Enter Start Price!",
              },
            ]}
          >
            <Input
              type="number"
              prefix="₹"
              placeholder="Start Price"
              min={0}
              value={data?.start_price}
              onChange={(e) =>
                setData({ ...data, start_price: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>End Price</h6>
              </div>
            }
            name="end_price"
            rules={[
              {
                required: true,
                message: "Please Enter End Price!",
              },
            ]}
          >
            <Input
              type="number"
              prefix="₹"
              min={0}
              placeholder="End Price"
              value={data?.end_price}
              onChange={(e) => setData({ ...data, end_price: e.target.value })}
            />
          </Form.Item>
          {propertyType !== "group-plots" && (
            <Form.Item
              name="bhk_details"
              label={
                <div className="form-label">
                  <h6>Select Bedroom Types</h6>
                  <p>
                    Select all the bedroom types you provide and also provide
                    size of the bedroom and also site plan for the bedroom.{" "}
                  </p>
                </div>
              }
              rules={[
                {
                  validator: validateRooms,
                },
              ]}
            >
              <BedroomTypes
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                selectedRooms={selectedRooms}
                setSelectedRooms={setSelectedRooms}
                currentActive={currentActive}
                setCurrentActive={setCurrentActive}
                units="Sqft"
              />
            </Form.Item>
          )}

          {propertyType === "group-villas" && (
            <Form.Item
              name="land_area_sizes"
              label={
                <div className="form-label">
                  <h6>Enter Land Sizes</h6>
                  <p>Enter all the Land Sizes</p>
                </div>
              }
              rules={[
                {
                  validator: validateLandAreaSizes,
                },
              ]}
            >
              <LandSizes
                selectedLand={selectedLand}
                setSelectedLand={setSelectedLand}
              />
            </Form.Item>
          )}
          {propertyType === "group-plots" && (
            <Form.Item
              name="plot_sizes"
              label={
                <div className="form-label">
                  <h6>Enter Plot Sizes</h6>
                  <p>Enter all the Plot Sizes</p>
                </div>
              }
              rules={[
                {
                  validator: validatePlotSizes,
                },
              ]}
            >
              <LandSizes
                selectedLand={selectedPlots}
                setSelectedLand={setSelectedPlots}
              />
            </Form.Item>
          )}
          {propertyType === "group-appartments" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Number of Floors</h6>
                </div>
              }
              name="number_of_floors"
              rules={[
                {
                  required: true,
                  message: "Please Enter No of Floors!",
                },
              ]}
            >
              <Input
                placeholder="Number of Floors"
                value={data?.number_of_floors}
                onChange={(e) =>
                  setData({ ...data, number_of_floors: e.target.value })
                }
              />
            </Form.Item>
          )}
          {propertyType === "group-villas" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Select Floors</h6>
                </div>
              }
              rules={[
                {
                  validator: validateVillaFloors,
                },
              ]}
            >
              <SelectValues
                total={["Ground Floor", "G+1", "G+2", "G+3", "G+4"]}
                data={data}
                isNestedState
                setData={setData}
                type="number_of_floors"
                multiple={true}
              />
            </Form.Item>
          )}
          {propertyType !== "group-plots" && (
            <>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Ready to occupy</h6>
                  </div>
                }
                name="ready_to_occupy"
                rules={[
                  {
                    required: true,
                    message: "Please Select Property Status!",
                  },
                ]}
              >
                <Radio.Group
                  name="ready_to_occupy"
                  className="radio-group-btns"
                  value={data?.ready_to_occupy}
                  onChange={(e) =>
                    setData({ ...data, ready_to_occupy: e.target.value })
                  }
                >
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
              {!data?.ready_to_occupy && (
                <Form.Item
                  label={
                    <div className="form-label">
                      <h6>Possession Date</h6>
                    </div>
                  }
                  name="possession_date"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Possession Date!",
                    },
                  ]}
                >
                  <DatePicker
                    defaultValue={data?.possession_date}
                    format="DD/MM/YYYY"
                    onChange={(date, dateString) => {
                      setData({
                        ...data,
                        possession_date: dateString,
                      });
                    }}
                  />
                </Form.Item>
              )}
            </>
          )}
        </Form>
      </div>
    </div>
  );
}

export default BasicDetails;
