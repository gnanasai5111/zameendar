import { Form, Select, Tag, Upload, message } from "antd";
import React, { useState } from "react";
import { formItemLayout, imageTypes } from "../constants";
import "../form-styles.less";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteImage,
  updateImage,
} from "../../../redux/imageUpdateDelete/imageActions";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

function UploadImages({ data, setData, form }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const beforeUpload = (file) => {
    // Check file type (example: allow only images)
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }

    // Check file size (example: limit to 2MB)
    const isSizeValid = file.size / 1024 / 1024 < 2;
    if (!isSizeValid) {
      message.error("Image must be smaller than 2MB!");
      return false;
    }

    return true;
  };

  console.log(data.property_images);
  const handleUpload = (options) => {
    const { file, onSuccess, onError, onProgress } = options;

    setData((prevData) => ({
      ...prevData,
      property_images: [
        ...prevData.property_images,
        { fileData: file, url: URL.createObjectURL(file), fileType: "Others" },
      ],
    }));
  };

  const handleRemove = (file) => {
    if (file?.id) {
      const formdata = new FormData();
      formdata.append("image_id", file?.id);
      setData({
        ...data,
        property_images: [
          ...data.property_images?.filter((f) => f.id !== file.id),
        ],
      });
      dispatch(deleteImage(user?.token, formdata));
    } else {
      setData({
        ...data,
        property_images: [
          ...data.property_images?.filter((f) => f.url !== file.url),
        ],
      });
    }
  };

  const imageTypeHandler = (e, file) => {
    if (file?.id) {
      const formdata = new FormData();
      formdata.append("image_id", file?.id);
      formdata.append("title", "Property Images");
      formdata.append(" meta_data", JSON.stringify([{ name: `${e}` }]));
      dispatch(updateImage(user?.token, formdata));

      setData({
        ...data,
        property_images: [
          ...data.property_images?.map((f) => {
            if (f.id === file.id) {
              return {
                ...f,
                fileType: e,
              };
            }
            return f;
          }),
        ],
      });
    } else {
      setData({
        ...data,
        property_images: [
          ...data.property_images?.map((f) => {
            if (f.url === file.url) {
              return {
                ...f,
                fileType: e,
              };
            }
            return f;
          }),
        ],
      });
    }
  };

  return (
    <div className="details-tab">
      <h5 className="title">
        <Tag>2</Tag> Upload Images
      </h5>

      <div className="form-content-property">
        <Form {...formItemLayout} form={form}>
          <Form.Item
            label={
              <div className="form-label">
                <h6>Upload your Images</h6>
                <p>
                  Upload Some High resolution photos to represent all your
                  property has to offer.Good Pictures can increase a number of
                  bookings!First added photo will be your main photo.Upload a
                  max of 10 photos with total size under 20MB.
                </p>
              </div>
            }
            name="Upload Images"
          >
            <div className="upload-container">
              <div className="images-box">
                {data?.property_images?.length === 0 ? (
                  <>
                    <div className="empty-case">No Images.</div>
                  </>
                ) : (
                  data?.property_images?.map((file, index) => (
                    <div className="img-container">
                      <div className="img-wrap">
                        <img
                          key={index}
                          src={file.url}
                          alt={file.fileData.name}
                        />
                        <DeleteOutlined
                          onClick={() => handleRemove(file)}
                          className="delete"
                        />
                      </div>
                      <Select
                        placeholder="Select Type"
                        onChange={(e) => imageTypeHandler(e, file)}
                        value={file.fileType}
                      >
                        {imageTypes.map((i, index) => {
                          return (
                            <Option value={i} key={index}>
                              {i}
                            </Option>
                          );
                        })}
                      </Select>
                    </div>
                  ))
                )}
              </div>
            </div>
            <Upload
              customRequest={handleUpload}
              fileList={data?.property_images}
              onRemove={handleRemove}
              beforeUpload={beforeUpload}
              showUploadList={false}
              multiple
              className="upload-box"
            >
              <div className="wrapper">
                <div className="first-row">
                  <PlusOutlined />
                  <h6>Drag Your Photos or click here to add more</h6>
                </div>
                <p>
                  jpg, png, webp, svg, maximum size : 2MB, maximum number of
                  photos : 12{" "}
                </p>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default UploadImages;
