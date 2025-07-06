import { Col, Row } from "antd";
import React from "react";
import { BsHouseSlash, BsImages } from "react-icons/bs";
import "./gallery.less";

function Gallery({ images }) {
  let imageList = images.filter((i) => i.title === "Property Images");


  return (
    <div className="gallery-wrapper">
      <Row gutter={[4, 0]} className="img-box">
        <Col span={12}>
          {imageList?.length > 0 ? (
            <img
              src={process.env.REACT_APP_BASE_URL + imageList[0]?.image}
              alt="first-col-img"
              className="first-col-img"
              loading="lazy"
            />
          ) : (
            <div className="first-col-empty-img">
              <BsHouseSlash />
              No Image
            </div>
          )}
        </Col>
        <Col span={12}>
          {imageList?.length > 1 ? (
            <img
              src={process.env.REACT_APP_BASE_URL + imageList[1]?.image}
              loading="lazy"
              alt="second-col-img"
              className="second-col-img"
            />
          ) : (
            <div className="second-col-empty-img">
              <BsHouseSlash />
              No Image
            </div>
          )}
          {imageList?.length > 2 && (
            <img
              src={process.env.REACT_APP_BASE_URL + imageList[2]?.image}
              loading="lazy"
              alt="second-col-img"
              className="second-col-img"
            />
          )}
          <div className="img-count">
            <BsImages />
            All Images({imageList?.length})
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
