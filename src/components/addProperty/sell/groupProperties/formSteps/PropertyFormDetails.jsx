import { Button, Form, Input, Tag, Radio } from "antd";
import React, { useState } from "react";
import "../../../form-styles.less";
import { formItemLayout } from "../../../constants";
import SelectValues from "../../../selectValues/SelectValues";

const { TextArea } = Input;

function PropertyFormDetails({ propertyType, data, setData, form }) {
  const validateParkings = (_, value) => {
    return new Promise((resolve, reject) => {
      if (!data?.number_of_car_parking || !data?.number_of_bike_parking) {
        reject("Please enter both the parkings!");
      } else {
        resolve();
      }
    });
  };

  const validateFacings = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.facing?.length === 0) {
        reject("Please Select at least one Facing!");
      } else {
        resolve();
      }
    });
  };

  const validateFurnishing = (_, value) => {
    return new Promise((resolve, reject) => {
      if (data?.furnishing_detail?.length === 0) {
        reject("Please Select one of the following!");
      } else {
        resolve();
      }
    });
  };

  console.log(data, "data");
  return (
    <div className="details-tab">
      <h5 className="title">
        <Tag>2</Tag> Property Details
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
          {propertyType !== "group-plots" && (
            <>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Number of Parkings</h6>
                  </div>
                }
                validateTrigger={["onChange", "onBlur"]}
                rules={[
                  {
                    validator: validateParkings,
                  },
                ]}
              >
                <Input
                  placeholder="Car Parkings"
                  type="number"
                  className="small-input"
                  name="number_of_car_parking"
                  value={data?.number_of_car_parking}
                  onChange={(e) =>
                    setData({ ...data, number_of_car_parking: e.target.value })
                  }
                />
                <Input
                  placeholder="Bike Parkings"
                  type="number"
                  className="small-input"
                  name="number_of_bike_parking"
                  value={data?.number_of_bike_parking}
                  onChange={(e) =>
                    setData({ ...data, number_of_bike_parking: e.target.value })
                  }
                />
              </Form.Item>{" "}
            </>
          )}

          {propertyType === "group-appartments" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Property Age</h6>
                </div>
              }
              name="property_age"
              rules={[
                {
                  required: true,
                  message: "Please Enter Property Age",
                },
              ]}
            >
              <Input
                placeholder="Property Age"
                value={data?.property_age}
                onChange={(e) =>
                  setData({ ...data, property_age: e.target.value })
                }
              />
            </Form.Item>
          )}
          {propertyType === "group-villas" && (
            <>
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
                    message: "Please Enter Land Width",
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
                    message: "Please Enter Land Length",
                  },
                ]}
              >
                <Input
                  placeholder="Land Length"
                  value={data?.land_length}
                  onChange={(e) =>
                    setData({ ...data, land_length: e.target.value })
                  }
                />
              </Form.Item>
            </>
          )}

          {propertyType === "group-appartments" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Project Area</h6>
                </div>
              }
              name="project_area"
              rules={[
                {
                  required: true,
                  message: "Please Enter Project Area",
                },
              ]}
            >
              <Input
                placeholder="Project Area"
                value={data?.project_area}
                onChange={(e) =>
                  setData({ ...data, project_area: e.target.value })
                }
              />
            </Form.Item>
          )}
          {propertyType !== "group-appartments" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Total Project Area</h6>
                </div>
              }
              name="total_project_area"
              rules={[
                {
                  required: true,
                  message: "Please Enter Total Project Area",
                },
              ]}
            >
              <Input
                placeholder="Total Project Area"
                value={data?.total_project_area}
                onChange={(e) =>
                  setData({ ...data, total_project_area: e.target.value })
                }
              />
            </Form.Item>
          )}

          <Form.Item
            label={
              <div className="form-label">
                <h6>Rera Id</h6>
              </div>
            }
            name="rera_id"
            rules={[
              {
                required: true,
                message: "Please Enter Rera Id",
              },
            ]}
          >
            <Input
              placeholder="Rera Id"
              value={data?.rera_id}
              onChange={(e) => setData({ ...data, rera_id: e.target.value })}
            />
          </Form.Item>
          {propertyType !== "group-plots" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Sale Type</h6>
                </div>
              }
              name="sale_type"
              rules={[
                {
                  required: true,
                  message: "Please Select Sale Type!",
                },
              ]}
            >
              <Radio.Group
                className="radio-group-btns"
                value={data?.sale_type}
                onChange={(e) =>
                  setData({ ...data, sale_type: e.target.value })
                }
              >
                <Radio value="New">New</Radio>
                <Radio value="Resale">Resale</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          <Form.Item
            label={
              <div className="form-label">
                <h6>Select Facing</h6>
              </div>
            }
            rules={[
              {
                validator: validateFacings,
              },
            ]}
          >
            <SelectValues
              total={[
                "North",
                "South",
                "East",
                "West",
                "North-East",
                "North-West",
                "South-East",
                "South-West",
              ]}
              isNestedState
              setData={setData}
              data={data}
              type="facing"
              multiple={true}
            />
          </Form.Item>
          {propertyType !== "group-plots" && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Select Furnishing</h6>
                </div>
              }
              rules={[
                {
                  validator: validateFurnishing,
                },
              ]}
            >
              <SelectValues
                total={["Furnished", "Semi-Furnished", "UnFurnished"]}
                isNestedState
                setData={setData}
                data={data}
                type="furnishing_detail"
                multiple={true}
              />
            </Form.Item>
          )}
          <Form.Item
            label={
              <div className="form-label">
                <h6>About the Project</h6>
                <p>
                  You can expand the box by dragging from the bottom of right
                  side.
                </p>
              </div>
            }
            name="about_property"
            rules={[
              {
                required: true,
                message: "Please Describe about your Project",
              },
            ]}
          >
            <TextArea
              rows={8}
              placeholder="Describe about your Project"
              value={data?.about_property}
              onChange={(e) =>
                setData({ ...data, about_property: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PropertyFormDetails;
