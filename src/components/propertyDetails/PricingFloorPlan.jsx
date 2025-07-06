import React, { useEffect, useState } from "react";
import "./pricing-floor-plan.less";
import { Col, Row } from "antd";
import { formatNumber } from "../addProperty/constants";

function PricingFloorPlan({ data }) {
  const [activeItem, setActiveItem] = useState();
  const [bhks, setBhks] = useState([]);
  const [sqftTypes, setSqftTypes] = useState([]);
  const [activeSqft, setActiveSqft] = useState();
  const [activeData, setActiveData] = useState();

  useEffect(() => {
    setBhks([...new Set(data?.bhk_details?.map((obj) => Object.keys(obj)[1]))]);
  }, [data]);

  useEffect(() => {
    setActiveItem(bhks[0]);
  }, [bhks]);

  useEffect(() => {
    if (activeItem) {
      setSqftTypes(
        data?.bhk_details?.filter((obj) => Object.keys(obj)[1] === activeItem)
      );
    }
  }, [activeItem]);

  useEffect(() => {
    if (sqftTypes.length > 0 && activeItem) {
      setActiveSqft(sqftTypes[0][activeItem]);
    }
  }, [sqftTypes]);

  useEffect(() => {
    setActiveData(
      data?.images.filter(
        (i) =>
          i.title === "BHK" &&
          i.meta_data[0].type === activeItem &&
          i.meta_data[0].sqft === activeSqft
      )
    );
  }, [activeItem, activeSqft, data]);

  // console.log(process.env.REACT_APP_BASE_URL + activeData[0]?.image);

  return (
    <div className="pricing-floor-plan-card">
      <div className="header">
        <h4>Pricing and Floor Plan</h4>
      </div>
      <div className="content">
        <div className="btns-grp">
          {bhks.map((i, index) => {
            return (
              <div
                className={activeItem === i ? "btn active" : "btn"}
                onClick={() => setActiveItem(i)}
                key={index}
              >
                {i}
              </div>
            );
          })}
        </div>
        <div className="sqft-types">
          {sqftTypes.map((i, index) => {
            return (
              <div
                className={
                  activeSqft === i[Object.keys(i)[1]]
                    ? "sqft-btn active"
                    : "sqft-btn"
                }
                onClick={() => setActiveSqft(i[Object.keys(i)[1]])}
                key={index}
              >
                {i[activeItem]} Sqft
              </div>
            );
          })}
        </div>
        {activeData?.length > 0 ? (
          <div className="img-box">
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <img
                  src={process.env.REACT_APP_BASE_URL + activeData[0]?.image}
                  alt="floor-plan"
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="text-container">
                  <div className="footer">
                    <div>
                      <h5>Carpet</h5>
                      <p>{activeSqft} Sqft</p>
                    </div>
                    <div>
                      <h5>Price</h5>
                      <p>{formatNumber(data?.price_per_sqft * activeSqft)}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div className="img-box">
            <Row>
         
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="text-container">
                  <div className="footer">
                    <div>
                      <h5>Carpet</h5>
                      <p>{activeSqft} Sqft</p>
                    </div>
                    <div>
                      <h5>Price</h5>
                      <p>{formatNumber(data?.price_per_sqft * activeSqft)}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}

export default PricingFloorPlan;
