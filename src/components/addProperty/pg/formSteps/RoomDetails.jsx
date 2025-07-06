import { Form, Input, Tag, Radio, TimePicker } from "antd";
import React from "react";
import "../../form-styles.less";
import { formItemLayout } from "../../constants";
import SelectValues from "../../selectValues/SelectValues";

const { TextArea } = Input;

function RoomDetails({ data, setData, form }) {
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
        <Tag>2</Tag> Room Details
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Non Veg Available</h6>
              </div>
            }
            name="non_veg_available"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, non_veg_available: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Opposite Sex Allowed</h6>
              </div>
            }
            name="opposite_sex_visitor_allowed"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, opposite_sex_visitor_allowed: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Vistors Allowed</h6>
              </div>
            }
            name="visitor_allowed"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, visitor_allowed: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Drinking Allowed</h6>
              </div>
            }
            name="drinking_allowed"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, drinking_allowed: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Smoking Allowed</h6>
              </div>
            }
            name="smoking_allowed"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, smoking_allowed: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Parking Available</h6>
              </div>
            }
            name="parking_facility"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, parking_facility: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Attached Washroom</h6>
              </div>
            }
            name="attached_washroom"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, attached_washroom: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Any Time Allowed</h6>
              </div>
            }
            name="any_time_allowed"
            rules={[
              {
                required: true,
                message: "Please Select following!",
              },
            ]}
            onChange={(e) =>
              setData({ ...data, any_time_allowed: e.target.value })
            }
          >
            <Radio.Group className="radio-group-btns">
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          {/* {data?.any_time_allowed === false && (
            <Form.Item
              label={
                <div className="form-label">
                  <h6>Last Time Entry</h6>
                </div>
              }
              name="last_time_entry"
              rules={[
                {
                  required: true,
                  message: "Please Enter Last Time Entry!",
                },
              ]}
            >
              <TimePicker
                use12Hours
                format="h:mm a"
                onChange={(e) => console.log(e)}
              />
            </Form.Item>
          )} */}

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

export default RoomDetails;
