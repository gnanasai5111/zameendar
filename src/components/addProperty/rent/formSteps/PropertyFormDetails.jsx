import {  Form, Input, Tag,  } from "antd";
import React from "react";
import "./../../form-styles.less";
import { formItemLayout } from "./../../constants";
import SelectValues from "../../selectValues/SelectValues";

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
  return (
    <div className="details-tab">
      <h5 className="title">
        <Tag>2</Tag> Property Details
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
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
              min={0}
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
              min={0}
              className="small-input"
              name="number_of_bike_parking"
              value={data?.number_of_bike_parking}
              onChange={(e) =>
                setData({ ...data, number_of_bike_parking: e.target.value })
              }
            />
          </Form.Item>

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
              multiple={propertyType === "building" ? true : false}
            />
          </Form.Item>
          {propertyType !== "plot" && (
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
                multiple={propertyType === "building" ? true : false}
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
