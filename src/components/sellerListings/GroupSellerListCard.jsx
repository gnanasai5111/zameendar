import { Button, Col, Row } from "antd";
import React from "react";
import LazyImage from "../lazyImageLoading/LazyImage";
import { formatNumber } from "../addProperty/constants";
import "./seller-listing-card.less";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { GiArmorUpgrade } from "react-icons/gi";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function GroupSellerListCard({ item }) {
  let bhks = [
    ...new Set(
      item?.bhk_details?.map((obj) => {
        let dynamicKey;
        for (const key in obj) {
          if (key !== "name") {
            dynamicKey = key;
            break;
          }
        }
        return dynamicKey;
      })
    ),
  ];
  let plots = item?.plot_sizes;

  const navigate = useNavigate();

  const editHandler = () => {
    if (item?.property_type === "Group Appartment") {
      navigate(
        `/add-property/sell/group/group-appartments/${item?.property_id}`
      );
    } else if (item?.property_type === "Group Villa") {
      navigate(`/add-property/sell/group/group-villas/${item?.property_id}`);
    } else if (item?.property_type === "Group Plot") {
      navigate(`/add-property/sell/group/group-plots/${item?.property_id}`);
    }
  };

  const viewHandler = () => {
    navigate(`/buy/${item?.property_id}`);
  };
  return (
    <div className="listing-card">
      <Row className="top-header">
        <div className="rera-id">
          {item?.property_type}{" "}
          {item?.rera_id && (
            <p>
              ID : <span>{item?.rera_id}</span>
            </p>
          )}
        </div>
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
                  ₹ {formatNumber(item?.start_price)} -{" "}
                  {formatNumber(item?.end_price)}{" "}
                </h6>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              {item?.property_type === "Group Appartment" ? (
                <p className="types">
                  {bhks?.join(", ")} Flats | ₹{" "}
                  {formatNumber(item?.price_per_sqft)}
                  /sq.ft
                </p>
              ) : item.property_type === "Group Villa" ? (
                <p className="types">
                  {bhks?.join(", ")} Villas | ₹{" "}
                  {formatNumber(item?.price_per_sqft)}
                  /sq.ft
                </p>
              ) : (
                <p className="types">
                  {plots?.join(", ")} YARDS Plots | ₹{" "}
                  {formatNumber(item?.price_per_sqyd)}
                  /sq.yd{" "}
                </p>
              )}
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

export default GroupSellerListCard;
