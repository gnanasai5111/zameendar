import { Form, Input, Select, Tag, Radio, DatePicker } from "antd";
import React from "react";
import { states, formItemLayout, citiesInIndia } from "../../constants";
import "./../../form-styles.less";
import GetLocationInfo from "../../Location/GetLocationInfo";
import SelectValues from "../../selectValues/SelectValues";
const { Option } = Select;

function BasicDetails({ propertyType, data, setData, form }) {
  const validateLocation = (_, value) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(data?.maps_details)?.length === 0) {
        reject("Please Enter valid Location by Search!");
      } else {
        resolve();
      }
    });
  };

  const validateBedrooms = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.bedroom_available?.length === 0) {
        reject("Please Select at least one Type!");
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

          <Form.Item
            label={
              <div className="form-label">
                <h6>Select Bedroom</h6>
              </div>
            }
            name="bedroom_available"
            rules={[
              {
                validator: validateBedrooms,
              },
            ]}
          >
            <SelectValues
              total={["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"]}
              data={data}
              setData={setData}
              type="bedroom_available"
              isNestedState
              multiple={propertyType === "building" ? true : false}
            />
          </Form.Item>

          <Form.Item
            label={
              <div className="form-label">
                <h6>Carpet Area</h6>
              </div>
            }
            name="carpet_area"
            rules={[
              {
                required: true,
                message: "Please Enter Carpet Area!",
              },
            ]}
          >
            <Input
              placeholder="Carpet Area"
              type="number"
              min={0}
              suffix="sqft"
              value={data?.carpet_area}
              onChange={(e) =>
                setData({ ...data, carpet_area: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <div className="form-label">
                <h6>Rent Per Month</h6>
              </div>
            }
            name="rent_per_month"
            rules={[
              {
                required: true,
                message: "Please Enter Monthly Rent!",
              },
            ]}
          >
            <Input
              placeholder="Rent Per Month"
              type="number"
              min={0}
              prefix="₹"
              value={data?.rent_per_month}
              onChange={(e) =>
                setData({ ...data, rent_per_month: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Safety Deposit</h6>
              </div>
            }
            name="advance_amount"
            rules={[
              {
                required: true,
                message: "Please Enter Safety Deposit!",
              },
            ]}
          >
            <Input
              placeholder="Safety Deposit"
              type="number"
              min={0}
              prefix="₹"
              value={data?.advance_amount}
              onChange={(e) =>
                setData({ ...data, advance_amount: e.target.value })
              }
            />
          </Form.Item>

          {(propertyType === "flat" || propertyType === "building") && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Floor No</h6>
                </div>
              }
              name="floor_number"
              rules={[
                {
                  required: true,
                  message: "Please Enter Floor no!",
                },
              ]}
            >
              <Input
                placeholder="Floor no"
                min={0}
                type="number"
                value={data?.floor_number}
                onChange={(e) =>
                  setData({ ...data, floor_number: e.target.value })
                }
              />
            </Form.Item>
          )}

          <Form.Item
            label={
              <div className="form-label">
                <h6>Number of Floors</h6>
              </div>
            }
            name="number_of_floors"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please Enter No of Floors!",
            //   },
            // ]}
          >
            <Input
              placeholder="Number of Floors"
              min={0}
              type="number"
              value={data?.number_of_floors}
              onChange={(e) =>
                setData({ ...data, number_of_floors: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <div className="form-label">
                <h6>Ready to occupy</h6>
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
