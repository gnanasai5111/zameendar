import { Form, Input, Select, Tag, Radio, DatePicker } from "antd";
import React from "react";
import { states, formItemLayout, citiesInIndia } from "../../constants";

import "../../form-styles.less";
import GetLocationInfo from "../../Location/GetLocationInfo";
const { Option } = Select;

function BasicDetails({ isLand, isSell, data, setData, form }) {
  const validateLocation = (_, value) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(data?.maps_details)?.length === 0) {
        reject("Please Enter valid Location by Search!");
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
          {!isLand && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Price per Square feet</h6>
                </div>
              }
              name="price_per_square_feet"
              rules={[
                {
                  required: true,
                  message: "Please Enter Price per Square feet!",
                },
              ]}
            >
              <Input
                placeholder="Price per sqft"
                value={data?.price_per_square_feet}
                min={0}
                type="number"
                onChange={(e) =>
                  setData({ ...data, price_per_square_feet: e.target.value })
                }
              />
            </Form.Item>
          )}
          {isLand && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Price per Square yard</h6>
                </div>
              }
              name="price_per_square_yard"
              rules={[
                {
                  required: true,
                  message: "Please Enter Price per Square yard!",
                },
              ]}
            >
              <Input
                placeholder="Price per sqyd"
                value={data?.price_per_square_yard}
                min={0}
                type="number"
                onChange={(e) =>
                  setData({ ...data, price_per_square_yard: e.target.value })
                }
              />
            </Form.Item>
          )}

          {!isLand && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>{isLand ? "Land Area" : "Builtup Area"}</h6>
                </div>
              }
              name="builtup_area"
              rules={[
                {
                  required: true,
                  message: "Please Enter Area!",
                },
              ]}
            >
              <Input
                placeholder={isLand ? "Land Area" : "Builtup Area"}
                value={data?.builtup_area}
                min={0}
                type="number"
                onChange={(e) =>
                  setData({ ...data, builtup_area: e.target.value })
                }
              />
            </Form.Item>
          )}

          {isSell && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Total Price</h6>
                </div>
              }
              name="final_price"
              rules={[
                {
                  required: true,
                  message: "Please Enter Price!",
                },
              ]}
            >
              <Input
                placeholder="Total Price"
                value={data?.final_price}
                min={0}
                type="number"
                onChange={(e) =>
                  setData({ ...data, final_price: e.target.value })
                }
              />
            </Form.Item>
          )}
          {!isSell && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Rent Price(monthly)</h6>
                </div>
              }
              name="rent_per_month"
              rules={[
                {
                  required: true,
                  message: "Please Enter Rent Price!",
                },
              ]}
            >
              <Input
                placeholder="Rent Price(monthly)"
                value={data?.rent_per_month}
                min={0}
                type="number"
                onChange={(e) =>
                  setData({ ...data, rent_per_month: e.target.value })
                }
              />
            </Form.Item>
          )}

          {!isLand && (
            <>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Passenger Lifts</h6>
                  </div>
                }
                name="passenger_lifts"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Passenger Lifts!",
                  },
                ]}
              >
                <Input
                  placeholder="Passenger Lifts"
                  value={data?.passenger_lifts}
                  min={0}
                  type="number"
                  onChange={(e) =>
                    setData({ ...data, passenger_lifts: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Service Lifts</h6>
                  </div>
                }
                name="service_lifts"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Service Lifts!",
                  },
                ]}
              >
                <Input
                  placeholder="Service Lifts"
                  value={data?.service_lifts}
                  min={0}
                  type="number"
                  onChange={(e) =>
                    setData({ ...data, service_lifts: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item
                label={
                  <div className="form-label">
                    <h6>Parking Available</h6>
                  </div>
                }
                name="parking_available"
                rules={[
                  {
                    required: true,
                    message: "Please Select following!",
                  },
                ]}
              >
                <Radio.Group
                  name="parking_available"
                  className="radio-group-btns"
                  value={data?.parking_available}
                  onChange={(e) =>
                    setData({ ...data, parking_available: e.target.value })
                  }
                >
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </>
          )}
          <Form.Item
            label={
              <div className="form-label">
                <h6>Safety Deposit</h6>
              </div>
            }
            name="safety_deposit"
            rules={[
              {
                required: true,
                message: "Please Enter Safety Deposit!",
              },
            ]}
          >
            <Input
              placeholder="Safety Deposit"
              value={data?.safety_deposit}
              min={0}
              prefix="₹"
              type="number"
              onChange={(e) =>
                setData({ ...data, safety_deposit: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Minimum Contract Period</h6>
              </div>
            }
            name="min_contract_period"
            rules={[
              {
                required: true,
                message: "Please Enter Minimum Contract Period!",
              },
            ]}
          >
            <Input
              placeholder="Minimum Contract Period"
              value={data?.min_contract_period}
              min={0}
              suffix="years"
              type="number"
              onChange={(e) =>
                setData({ ...data, min_contract_period: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Negotiable</h6>
              </div>
            }
            name="negotialble"
            rules={[
              {
                required: true,
                message: "Please Select Negotiable!",
              },
            ]}
          >
            <Radio.Group
              name="negotialble"
              className="radio-group-btns"
              value={data?.negotialble}
              onChange={(e) =>
                setData({ ...data, negotialble: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Tax & Govt. charge included?</h6>
              </div>
            }
            name="tax_gov_charges_included"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
          >
            <Radio.Group
              name="tax_gov_charges_included"
              className="radio-group-btns"
              value={data?.tax_gov_charges_included}
              onChange={(e) =>
                setData({ ...data, tax_gov_charges_included: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Electricity charges included?</h6>
              </div>
            }
            name="electricity_bill_included"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
          >
            <Radio.Group
              name="electricity_bill_included"
              className="radio-group-btns"
              value={data?.electricity_bill_included}
              onChange={(e) =>
                setData({ ...data, electricity_bill_included: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>DG & UPS charges included?</h6>
              </div>
            }
            name="dg_ups_charges_included"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
          >
            <Radio.Group
              name="dg_ups_charges_included"
              className="radio-group-btns"
              value={data?.dg_ups_charges_included}
              onChange={(e) =>
                setData({ ...data, dg_ups_charges_included: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Water charges included?</h6>
              </div>
            }
            name="water_charges_included"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
          >
            <Radio.Group
              name="water_charges_included"
              className="radio-group-btns"
              value={data?.water_charges_included}
              onChange={(e) =>
                setData({ ...data, water_charges_included: e.target.value })
              }
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          {!isLand && (
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

          {/* <Form.Item
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
          </Form.Item> */}
          {/* {!data?.ready_to_occupy && ( */}
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
                value={data?.possession_date}
                format="DD/MM/YYYY"
                onChange={(date, dateString) =>
                  setData({ ...data, possession_date: dateString })
                }
              />
            </Form.Item>
          {/* )} */}
        </Form>
      </div>
    </div>
  );
}

export default BasicDetails;
