import { Button, Form, Input, Modal, Tag, message } from "antd";
import React, { useState } from "react";
import "../form-styles.less";
import { AiOutlinePlus } from "react-icons/ai";
import { formItemLayout, initialAmenities } from "../constants";

function FormAmenities({ data, setData, form }) {
  const [totalAmenities, setTotalAmenities] = useState(initialAmenities);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState();

  const handleAmenities = (title) => {
    if (data?.amenities?.includes(title)) {
      const remainingData = data?.amenities?.filter((i) => i !== title);

      setData({ ...data, amenities: [...remainingData] });
    } else {
      setData({ ...data, amenities: [...data.amenities, title] });
    }
  };

  const addAmenities = () => {
    if (value) {
      setTotalAmenities([
        ...totalAmenities,
        { title: value, icon: <AiOutlinePlus /> },
      ]);
      setIsVisible(false);
      setValue("");
    } else {
      message.error("Please Add an Amenity!");
    }
  };

  return (
    <div className="details-tab">
      <h5 className="title">
        <Tag>2</Tag> Amenities
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Select your Amenities</h6>
                <p>
                  Select all the Amenities you provide.You can also add custom
                  Amenities by clicking on the plus button at the bottom.
                </p>
              </div>
            }
            name="Amenities"
          >
            <div className="amenities-wrapper">
              {totalAmenities.map((value) => {
                return (
                  <div
                    className={
                      data?.amenities?.includes(value.title)
                        ? "checked-item active"
                        : "checked-item"
                    }
                    onClick={() => handleAmenities(value.title)}
                  >
                    {value.icon}
                    {value.title}
                  </div>
                );
              })}
            </div>
            <p className="add-amenities" onClick={() => setIsVisible(true)}>
              + Add Amenities
            </p>
          </Form.Item>
        </Form>
        <Modal
          open={isVisible}
          className="amenities-modal"
          destroyOnClose
          centered
          closeIcon={false}
          mask={true}
          footer={false}
          onCancel={() => setIsVisible(false)}
        >
          <div className="wrapper">
            <h6>Add an Amenity</h6>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter an Amenity"
            />
            <Button onClick={() => addAmenities()} className="next-btn">
              +Add New
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default FormAmenities;
