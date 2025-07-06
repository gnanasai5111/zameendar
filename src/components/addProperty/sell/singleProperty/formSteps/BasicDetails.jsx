import { Form, Input, Select, Tag, Radio, DatePicker } from "antd";
import React from "react";
import GetLocationInfo from "../../../Location/GetLocationInfo";
import SelectValues from "../../../selectValues/SelectValues";
import { states, formItemLayout, citiesInIndia } from "../../../constants";
import "../../../form-styles.less";

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

  const validateVillaFloors = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.number_of_floors?.length === 0) {
        reject("Please Select at least one Type!");
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
          {propertyType !== "plot" && (
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
          )}
          {propertyType !== "plot" && (
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
          )}

          <Form.Item
            label={
              <div className="form-label">
                <h6>Final Price</h6>
              </div>
            }
            name="final_price"
            rules={[
              {
                required: true,
                message: "Please Enter Final Price!",
              },
            ]}
          >
            <Input
              placeholder="Final Price"
              type="number"
              min={0}
              prefix="₹"
              value={data?.final_price}
              onChange={(e) =>
                setData({ ...data, final_price: e.target.value })
              }
            />
          </Form.Item>

          {propertyType !== "flat" && (
            <>
              {" "}
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Land Size</h6>
                  </div>
                }
                name="land_size"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Land Size!",
                  },
                ]}
              >
                <Input
                  placeholder="Land Size"
                  value={data?.land_size}
                  onChange={(e) =>
                    setData({ ...data, land_size: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Land Width</h6>
                  </div>
                }
                name="land_width"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Land Width!",
                  },
                ]}
              >
                <Input
                  placeholder="Land Width"
                  value={data?.land_width}
                  onChange={(e) =>
                    setData({ ...data, land_width: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Land Length</h6>
                  </div>
                }
                name="land_length"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Land Length!",
                  },
                ]}
              >
                <Input
                  placeholder="Land length"
                  value={data?.land_length}
                  onChange={(e) =>
                    setData({ ...data, land_length: e.target.value })
                  }
                />
              </Form.Item>
            </>
          )}

          {propertyType === "flat" && (
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
                value={data?.floor_number}
                onChange={(e) =>
                  setData({ ...data, floor_number: e.target.value })
                }
              />
            </Form.Item>
          )}
          {propertyType !== "plot" && (
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
                value={data?.floor_number}
                onChange={(e) =>
                  setData({ ...data, number_of_floors: e.target.value })
                }
              />
            </Form.Item>
          )}
          {propertyType === "villa" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Select Floors</h6>
                </div>
              }
              name="floors"
              rules={[
                {
                  validator: validateVillaFloors,
                },
              ]}
            >
              <SelectValues
                total={["Ground Floor", "G+1", "G+2", "G+3", "G+4"]}
                data={data}
                setData={setData}
                isNestedState
                type="floors"
              />
            </Form.Item>
          )}
          {propertyType === "plot" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Fencing Available</h6>
                </div>
              }
              name="is_fencing"
              rules={[
                {
                  required: true,
                  message: "Please Select Property Status!",
                },
              ]}
            >
              <Radio.Group
                name="is_fencing"
                className="radio-group-btns"
                value={data?.is_fencing}
                onChange={(e) =>
                  setData({ ...data, is_fencing: e.target.value })
                }
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          {propertyType !== "plot" && (
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
                  name="available_from"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Possession Date!",
                    },
                  ]}
                >
                  <DatePicker
                    value={data?.available_from}
                    format="DD/MM/YYYY"
                    onChange={(date, dateString) =>
                      setData({ ...data, available_from: dateString })
                    }
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
