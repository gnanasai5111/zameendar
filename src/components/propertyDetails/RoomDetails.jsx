import React from "react";
import "./overview.less";
import { Col, Row } from "antd";
import { formatNumber } from "../addProperty/constants";

function RoomDetails({ data }) {
  let foodOfferings = data?.food_offerings;
  let colivingAreas = data?.coliving_common_areas;
  let sharingFor = data?.sharing_for;
  let sharingTypes = [...new Set(data?.sharing_types?.map((i) => i.type))];
  let rents = data?.sharing_types?.map((i) => i.rent_per_month);
  let minValue = Math.min(...rents);
  let maxValue = Math.max(...rents);
  let furnishing = data?.furnishing_detail;

  return (
    <div className="overview-card">
      <div className="header">
        <h4>PG details</h4>
      </div>
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Food Facility</h6>
              <p>{data?.food_facility ? "Available" : "Not Available"}</p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Food Offerings</h6>
              <p>
                {" "}
                {foodOfferings?.length === 0
                  ? "Not Available"
                  : foodOfferings?.join(",")}
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Co-Living Common Areas</h6>
              <p>{colivingAreas?.join(",")}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Sharing for</h6>
              <p>{sharingFor?.join(",")}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Sharing Types</h6>
              <p>{sharingTypes?.join(",")}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Rent Per Month</h6>
              <p>
                {" "}
                ₹ {formatNumber(minValue)} - ₹ {formatNumber(maxValue)}
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Furnishing</h6>
              <p>{furnishing?.join(",")}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Attached Washroom</h6>
              <p>{data?.attached_washroom ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Parking Available</h6>
              <p>{data?.parking_facility ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Non Veg Available</h6>

              <p>{data?.non_veg_available ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Somking Allowed</h6>
              <p>{data?.smoking_allowed ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Drinking Allowed</h6>
              <p>{data?.drinking_allowed ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Opposite Sex visitor Allowed</h6>
              <p>{data?.opposite_sex_visitor_allowed ? "Yes" : "No"}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
            <div className="text">
              <h6>Any Time Allowed</h6>
              <p>{data?.any_time_allowed ? "Yes" : "No"}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RoomDetails;
