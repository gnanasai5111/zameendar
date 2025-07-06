import { Button, Col, Progress, Row } from "antd";
import React from "react";
import ReadMore from "../readMore/ReadMore";
import "./buyer-card.less";
import LazyImage from "../lazyImageLoading/LazyImage";
import { useNavigate } from "react-router-dom";
import { calculatePercentage, formatNumber, getTodayDate } from "../addProperty/constants";
import dayjs from "dayjs";

function BuyerCard({ item, type, id }) {
  const navigate = useNavigate();
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
  let prices = item?.sharing_types?.map((i) => i.rent_per_month);
  let sharingTypes = [...new Set(item?.sharing_types?.map((i) => i.type))];
  let sharingFor = item?.sharing_for;

  const viewHandler = () => {
    if (type === "group" || type === "plot") {
      navigate(`/buy/${item?.property_id}`);
    } else if (type === "rent") {
      navigate(`/rent/${item?.property_id}`);
    } else if (type === "commercial") {
    } else if (type === "pg") {
      navigate(`/pg/${item?.property_id}`);
    }
  };

  const getPrices = () => {
    return (
      <>
        {type === "rent" ? (
          <h6 className="rate">
            ₹ {formatNumber(item?.rent_per_month)}{" "}
            <span
              style={{
                color: "grey",
                fontSize: "0.9rem",
                fontWeight: 200,
              }}
            >
              /per month
            </span>
          </h6>
        ) : type === "group" ? (
          <h6 className="rate">
            ₹ {formatNumber(item?.start_price)} -{" "}
            {formatNumber(item?.end_price)}{" "}
          </h6>
        ) : type === "commercial" ? (
          <h6 className="rate"> ₹ {formatNumber(item?.final_price)}</h6>
        ) : type === "plot" ? (
          <>
            {id === "plots" ? (
              <h6 className="rate"> ₹ {formatNumber(item?.final_price)}</h6>
            ) : (
              <h6 className="rate">
                ₹ {formatNumber(item?.start_price)} -
                {formatNumber(item?.end_price)}
              </h6>
            )}
          </>
        ) : type === "pg" ? (
          <>
            <h6 className="rate">
              ₹ {formatNumber(Math.min(...prices))} -
              {formatNumber(Math.min(...prices))}
            </h6>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };

  const getContent = () => {
    return (
      <>
        {type === "rent" ? (
          <p className="types">{item?.bedroom_available?.join(", ")}</p>
        ) : type === "group" ? (
          <>
            {item?.property_type === "Group Appartment" ? (
              <p className="types">
                {bhks?.join(", ")} Flats | ₹{" "}
                {formatNumber(item?.price_per_sqft)}
                /sq.ft
              </p>
            ) : (
              item.property_type === "Group Villa" && (
                <p className="types">
                  {bhks?.join(", ")} Villas | ₹{" "}
                  {formatNumber(item?.price_per_sqft)}
                  /sq.ft
                </p>
              )
            )}
          </>
        ) : type === "commercial" ? (
          <p className="types">{item.commerical_category}</p>
        ) : type === "plot" ? (
          <>
            <p className="types">
              {id === "plots"
                ? [item?.land_size]?.join(", ")
                : item?.plot_sizes?.join(", ")}{" "}
              Acres
            </p>
          </>
        ) : type === "pg" ? (
          <p className="types">{sharingTypes.join(", ")}</p>
        ) : (
          <></>
        )}
      </>
    );
  };
  const getStatus = () => {
    return (
      <>
        {type === "rent" ? (
          <p style={{ color: "#ffb300", fontSize: "0.8rem" }}>
            {item?.rent_type}
          </p>
        ) : type === "group" ? (
          <>
            {" "}
            <p className="status">
              {!item?.ready_to_occupy &&
                dayjs(item?.possession_date).format("MMM YY")}
            </p>
            <Progress
              showInfo={false}
              percent={calculatePercentage(
                dayjs(item?.possession_date).format("DD/MM/YYYY"),
                getTodayDate()
              )}
            />
          </>
        ) : type === "commercial" ? (
          <p style={{ color: "#ffb300", fontSize: "0.8rem" }}>
            {item?.commercial_type === "Sell" ? "Sell" : "Rent"}
          </p>
        ) : type === "pg" ? (
          <>
            <p style={{ color: "#ffb300", fontSize: "0.8rem" }}>
              {sharingFor.join(", ")}
            </p>
          </>
        ) : (
          <></>
        )}
      </>
    );
  };
  return (
    <div className="buy-container" onClick={() => viewHandler()}>
      <div className="each-card">
        <div className="img-container">
          {item?.images?.length > 0 && (
            <LazyImage
              src={process.env.REACT_APP_BASE_URL + item?.images[0].image}
              alt="card-img"
              className="card-img"
            />
          )}
        </div>

        <div className="text-container">
          <div className="card-wrapper">
            <h4 className="name">{item?.project_name}</h4>
            <p className="area">
              {item?.address?.area},{item?.address?.city}
            </p>
            <Row
              align="center"
              justify="space-between"
              style={{ marginTop: "0.3rem" }}
            >
              <Col span={16}>{getPrices()}</Col>
              <Col span={8}>{getStatus()}</Col>
            </Row>
            <Row style={{ marginTop: "0.3rem" }}>{getContent()}</Row>
            <Row>
              <ReadMore
                text={item?.about_property ? item?.about_property : ""}
                maxLength={50}
              />
            </Row>
          </div>
          <div className="footer">
            <div className="seller">
              <div className="logo">P</div>
              Praveen
            </div>
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerCard;
