import { PlusOutlined } from "@ant-design/icons";
import { Input, Modal, Upload, message } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SimilarBedroomType({ type }) {
  const [fileList, setFileList] = useState([]);
  const [size, setSize] = useState();
  const [villaSize, setVillaSize] = useState();

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const params = useParams();

  const handleUpload = (options) => {
    const { file, onSuccess, onError, onProgress } = options;
    console.log(file, onProgress);
    const uploadedFile = {
      url: URL.createObjectURL(file),
      name: file.name,
    };
    setFileList((prevList) => [...prevList, uploadedFile]);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  const uploadButton = (
    <div className="upload-text">
      <PlusOutlined />
      {/* <p>Site Plan</p> */}
    </div>
  );

  const handleRemove = (file) => {
    setFileList((prevList) => prevList.filter((f) => f.url !== file.url));
  };

  return (
    <div className="bottom-row">
      <Input
        onChange={(e) => setSize(e.target.value)}
        placeholder={`${type} Sqft`}
        value={size}
        className="bedroom-size"
      />
      {params.category === "group-villas" && (
        <Input
          onChange={(e) => setVillaSize(e.target.value)}
          placeholder={`Villa size`}
          value={villaSize}
          className="bedroom-size"
        />
      )}
      <Upload
        listType="picture-card"
        fileList={fileList}
        className="bedroom-images"
        beforeUpload={beforeUpload}
        customRequest={handleUpload}
        onRemove={handleRemove}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </div>
  );
}

export default SimilarBedroomType;
