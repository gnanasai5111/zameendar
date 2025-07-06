import { Form, Input, Select, Tag, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { states, formItemLayout, citiesInIndia } from "../../constants";
import "../../form-styles.less";
import PgSharingTypes from "../PgSharingTypes";
import GetLocationInfo from "../../Location/GetLocationInfo";
import SelectValues from "../../selectValues/SelectValues";
const { Option } = Select;

function BasicDetails({
  data,
  setData,
  form,
  selectedRooms,
  setSelectedRooms,
  currentActive,
  setCurrentActive,
  selectedTypes,
  setSelectedTypes,
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

  const validateCommonAreas = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.coliving_common_areas?.length === 0) {
        reject("Please Select at least one Type!");
      } else {
        resolve();
      }
    });
  };
  const validateFoodOfferings = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.food_offerings?.length === 0) {
        reject("Please Select at least one Type!");
      } else {
        resolve();
      }
    });
  };

  const validateSuitedFor = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.best_suited_for?.length === 0) {
        reject("Please Select at least one Type!");
      } else {
        resolve();
      }
    });
  };
  const validateSharingFor = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.sharing_for?.length === 0) {
        reject("Please Select at least one Type!");
      } else {
        resolve();
      }
    });
  };

  const validateRooms = (_, value) => {
    return new Promise((resolve, reject) => {
      let roomTypes = Object.keys(selectedTypes);
      let roomExists = roomTypes.some((type) => {
        return selectedTypes[type].some((i) => {
          return i.rent_per_month && i.safety_deposit;
        });
      });

      if (!roomExists) {
        reject("Please Select at least one room type!");
      } else {
        resolve();
      }
    });
  };

  console.log(data);

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

          <Form.Item
            label={
              <div className="form-label">
                <h6>Select Sharing Types</h6>
                <p>
                  Select all the sharing types you provide and also provide
                  price and safety depoist room.{" "}
                </p>
              </div>
            }
            rules={[
              {
                validator: validateRooms,
              },
            ]}
          >
            <PgSharingTypes
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              selectedRooms={selectedRooms}
              setSelectedRooms={setSelectedRooms}
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
            />
          </Form.Item>

          <Form.Item
            label={
              <div className="form-label">
                <h6>PG is For</h6>
              </div>
            }
            name="sharing_for"
            rules={[
              {
                validator: validateSharingFor,
              },
            ]}
          >
            <SelectValues
              total={["Girls", "Boys", "CO-Living"]}
              data={data}
              isNestedState
              setData={setData}
              type="sharing_for"
              multiple={true}
            />
          </Form.Item>

          {/* <Form.Item
            label={
              <div className="form-label">
                <h6>Best Suited For</h6>
              </div>
            }
            name="best_suited_for"
            rules={[
              {
                validator: validateSuitedFor,
              },
            ]}
          >
            <SelectValues
              total={["Students", "Professionals"]}
              data={data}
              isNestedState
              setData={setData}
              type="best_suited_for"
              multiple={true}
            />
          </Form.Item> */}
          <Form.Item
            label={
              <div className="form-label">
                <h6>Food Provided</h6>
              </div>
            }
            name="food_facility"
            rules={[
              {
                required: true,
                message: "Please Select Food Provided!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, food_facility: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          {data?.food_facility && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Food Offerings</h6>
                </div>
              }
              rules={[
                {
                  validator: validateFoodOfferings,
                },
              ]}
            >
              <SelectValues
                total={["Breakfast", "Lunch", "Dinner"]}
                data={data}
                isNestedState
                setData={setData}
                type="food_offerings"
                multiple={true}
              />
            </Form.Item>
          )}

          <Form.Item
            label={
              <div className="form-label">
                <h6>Common Areas</h6>
              </div>
            }
            rules={[
              {
                validator: validateCommonAreas,
              },
            ]}
          >
            <SelectValues
              total={["Living Room", "Kitchen", "Dining Hall", "Study Room"]}
              data={data}
              isNestedState
              setData={setData}
              type="coliving_common_areas"
              multiple={true}
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Ready to Move In</h6>
              </div>
            }
            name="ready_to_move_in"
            rules={[
              {
                required: true,
                message: "Please Select Property Status!",
              },
            ]}
          >
            <Radio.Group
              name="ready_to_move_in"
              className="radio-group-btns"
              value={data?.ready_to_move_in}
              onChange={(e) =>
                setData({ ...data, ready_to_move_in: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default BasicDetails;
