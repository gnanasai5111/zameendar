import { Col, Row } from "antd";
import React from "react";
import LazyImage from "../lazyImageLoading/LazyImage";
import { formatNumber } from "../addProperty/constants";
import "./seller-listing-card.less";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { GiArmorUpgrade } from "react-icons/gi";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function PgListingCard({ item }) {
  let bhks = ["1 sharing", "2 sharing "];
  const navigate = useNavigate();

  const editHandler = () => {
    navigate(`/add-property/pg/${item?.property_id}`);
  };

  const viewHandler = () => {
    navigate(`/pg/${item?.property_id}`);
  };

  return (
    <div className="listing-card">
      <Row className="top-header">
        <div className="rera-id">{item?.property_type} </div>
        <div className="edit-delete">
          <EditOutlined onClick={() => editHandler()} />
          <DeleteOutlined />
        </div>
      </Row>
      <div className="content-container">
        <div className="img-container">
          {item?.images?.length > 0 && (
            <LazyImage
              src={"http://64.227.177.77/" + item?.images[0].image}
              alt="card-img"
              className="card-img"
            />
          )}
        </div>

        <div className="text-container">
          <div className="card-wrapper">
            <h4 className="name">{item?.project_name}</h4>
            <p className="area">{item?.address?.street_address}</p>
            <Row
              align="center"
              justify="space-between"
              style={{ marginTop: "0.3rem" }}
            >
              <Col span={16}>
                <h6 className="rate">
                  {" "}
                  ₹ {formatNumber(10000)} - {formatNumber(20000)}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "0.9rem",
                      fontWeight: 200,
                    }}
                  >
                    {" "}
                    /per month
                  </span>
                </h6>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              <p className="types">
                {bhks?.join(", ")} {item?.rent_type}
              </p>
            </Row>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="first-row">
          <div className="dates">
            <div className="published">Published on 12 Sep 2023</div>
            <div className="expired"> Expiring on 24 oct 2024</div>
          </div>
          <div className="view-container">
            <div className="views">
              <EyeOutlined />
              400
            </div>
            <div className="view-property" onClick={() => viewHandler()}>
              View
            </div>
          </div>
        </div>
        <div className="last-row">
          <div span={8} className="plans">
            <BiSolidPurchaseTagAlt />
            <div className="plan">
              <p>Active Plan</p>
              <div>Free Plan</div>
            </div>
          </div>

          <div className="upgrade-wrapper">
            <GiArmorUpgrade />
            Upgrade
          </div>
        </div>
      </div>
    </div>
  );
}

export default PgListingCard;
