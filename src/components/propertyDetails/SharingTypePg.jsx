import React, { useEffect, useState } from "react";
import "./pricing-floor-plan.less";
import { Col, Row } from "antd";
import { formatNumber } from "../addProperty/constants";

function SharingTypePg({ data }) {
  const [activeItem, setActiveItem] = useState();
  const [sharingTypes, setSharingTypes] = useState([]);
  const [sqftTypes, setSqftTypes] = useState([]);
  const [activeSqft, setActiveSqft] = useState();
  const [activeData, setActiveData] = useState();
  let types = [...new Set(data?.sharing_types.map((i) => i.type))];

  useEffect(() => {
    if (activeItem) {
      setSharingTypes([
        ...new Set(data?.sharing_types?.filter((i) => i.type === activeItem)),
      ]);
    }
  }, [activeItem]);

  useEffect(() => {
    setActiveItem(data?.sharing_types[0]?.type);
  }, []);

  return (
    <div className="pricing-floor-plan-card">
      <div className="header">
        <h4>Pricing and Floor Plan</h4>
      </div>
      <div className="content">
        <div className="btns-grp">
          {types.map((i, index) => {
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

        <div className="img-box">
          {sharingTypes.map((i, index) => {
            return (
              <div style={{ margin: "1rem 0" }}>
                <h6
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "darkgrey",
                    color: "#ffb300",
                  }}
                >
                  Type {index + 1}
                </h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem",
                    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                  }}
                >
                  <div>
                    <h6>Rent Per Month</h6>
                    <p>{i.rent_per_month}</p>
                  </div>
                  <div>
                    <h6>Safety Deposit</h6>
                    <p>{i.safety_deposit}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SharingTypePg;
