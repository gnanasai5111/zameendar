import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Upload, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteImage,
  updateImage,
} from "../../../redux/imageUpdateDelete/imageActions";

function IndividualRoom({
  currentActive,
  setSelectedTypes,
  selectedTypes,
  index,
  id,
  imageId,
  units,
}) {
  const [sqft, setSqft] = useState(selectedTypes[currentActive][index].sqft);
  const [file, setFile] = useState(selectedTypes[currentActive][index].image);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpload = (options) => {
    const { file, onSuccess, onError, onProgress } = options;

    setFile([file]);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    } else {
      return isImage;
    }
  };

  const handleRemove = (file) => {
    setFile([]);
  };

  const uploadButton = (
    <div className="upload-text">
      <PlusOutlined />
      <p>Site Plan</p>
    </div>
  );

  const deleteHandler = () => {
    if (selectedTypes[currentActive][index]?.imageId) {
      const formdata = new FormData();
      formdata.append("image_id", selectedTypes[currentActive][index]?.imageId);
      dispatch(deleteImage(user?.token, formdata));

      setSelectedTypes({
        ...selectedTypes,
        [currentActive]: selectedTypes[currentActive]?.filter(
          (i) => i?.imageId !== imageId
        ),
      });
    }

    setSelectedTypes({
      ...selectedTypes,
      [currentActive]: selectedTypes[currentActive]?.filter((i) => i.id !== id),
    });
  };

  const editHandler = () => {
    let temp = selectedTypes[currentActive];
    temp[index].isEdit = true;
    setSelectedTypes({ ...selectedTypes, [currentActive]: temp });
  };

  const saveHandler = () => {
    if (sqft) {
      let temp = selectedTypes[currentActive];
      temp[index].image = [...file];
      temp[index].sqft = sqft;
      temp[index].isEdit = false;
      setSelectedTypes({ ...selectedTypes, [currentActive]: temp });
    } else {
      message.error("Please enter Square feet");
    }
  };

  return (
    <div className="input-wrapper">
      {selectedTypes[currentActive][index].isEdit ? (
        <>
          <div className="header">
            <p>
              {" "}
              {currentActive} Type - {index + 1}
            </p>
            <DeleteOutlined onClick={() => deleteHandler()} />
          </div>
          <div className="content-forms">
            <Input
              placeholder={`${currentActive} Sqft`}
              className="bedroom-size"
              type="number"
              min={0}
              suffix={units}
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
            />
            <Upload
              listType="picture-card"
              fileList={file ? file : []}
              className="bedroom-images"
              beforeUpload={beforeUpload}
              customRequest={handleUpload}
              // onRemove={handleRemove}
              onRemove={(file) => false} // Hide delete icon
              onPreview={() => {}} // Hide view icon
            >
              {file.length >= 1 ? null : uploadButton}
            </Upload>
            <Button onClick={() => saveHandler()}>Save</Button>
          </div>
        </>
      ) : (
        <div className="header">
          <p>
            {" "}
            {currentActive} Type - {index + 1}
            <span style={{ color: "#41c34c" }}> ({sqft}) sqft</span>
          </p>
          <EditOutlined onClick={() => editHandler()} />
        </div>
      )}
    </div>
  );
}

export default IndividualRoom;
