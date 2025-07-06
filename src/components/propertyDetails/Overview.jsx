import React from "react";
import "./overview.less";
import { Col, Row } from "antd";
import { BiArea, BiBed } from "react-icons/bi";
import { GiPriceTag, GiResize, GiWoodenChair } from "react-icons/gi";
import {
  BsBuildingFillAdd,
  BsFillDiscFill,
  BsTextareaResize,
} from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import dayjs from "dayjs";
import { formatNumber } from "../addProperty/constants";

function Overview({ data }) {
  if (data?.property_type === "Group Plot") {
    let landSizes = [...new Set(data?.plot_sizes)];

    const minValue = Math.min(...landSizes);
    const maxValue = Math.max(...landSizes);
    return (
      <div className="overview-card">
        <div className="header">
          <h4>Overview</h4>
        </div>
        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiArea />
              <div className="text">
                <h6>Project Area</h6>
                <p>
                  {data?.total_project_area
                    ? `${data?.total_project_area} Acres`
                    : "-"}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiResize />
              <div className="text">
                <h6>Sizes</h6>
                <p>
                  {minValue} sq.ft. - {maxValue} sq.ft.
                </p>
              </div>
            </Col>

            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Average Price</h6>
                <p>₹ {formatNumber(data?.price_per_sqyd)}/sq.yd</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BsFillDiscFill />
              <div className="text">
                <h6>Rera Id</h6>
                <p>{data?.rera_id}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiBed />
              <div className="text">
                <h6>Configuration Types</h6>
                <p>{landSizes.join(",")} Sqyds</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Price</h6>
                <p>
                  {" "}
                  ₹ {formatNumber(data?.start_price)} - ₹{" "}
                  {formatNumber(data?.end_price)}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  } else if (
    data?.property_type === "Group Appartment" ||
    data?.property_type === "Group Villa"
  ) {
    let bhks = [
      ...new Set(data?.bhk_details?.map((obj) => Object.keys(obj)[1])),
    ];

    let bhksqft = data?.bhk_details?.map((obj) => obj[Object.keys(obj)[1]]);

    const minValue = Math.min(...bhksqft);
    const maxValue = Math.max(...bhksqft);

    return (
      <div className="overview-card">
        <div className="header">
          <h4>Overview</h4>
        </div>
        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiArea />
              <div className="text">
                <h6>Project Area</h6>
                <p>
                  {data?.property_type === "Group Villa"
                    ? data?.total_project_area
                    : data?.project_area}{" "}
                  Acres
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiResize />
              <div className="text">
                <h6>Sizes</h6>
                <p>
                  {minValue} sq.ft. - {maxValue} sq.ft.
                </p>
              </div>
            </Col>

            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BsBuildingFillAdd />
              <div className="text">
                <h6>Possession Status</h6>
                <p>
                  {data?.ready_to_occupy
                    ? "Ready To Move In"
                    : "Under Construction"}
                </p>
              </div>
            </Col>
            {!data?.ready_to_occupy && (
              <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                <AiFillCalendar />
                <div className="text">
                  <h6>Launch Date</h6>
                  <p>{dayjs(data?.possession_date).format("MMM YY")}</p>
                </div>
              </Col>
            )}
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Average Price</h6>
                <p>₹ {formatNumber(data?.price_per_sqft)}/sq.ft</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BsFillDiscFill />
              <div className="text">
                <h6>Rera Id</h6>
                <p>{data?.rera_id}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiBed />
              <div className="text">
                <h6>Configuration Types</h6>
                <p>{bhks.join(",")}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Price</h6>
                <p>
                  {" "}
                  ₹ {formatNumber(data?.start_price)} - ₹{" "}
                  {formatNumber(data?.end_price)}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  } else if (
    data?.property_type === "Flat" ||
    data?.property_type === "Building" ||
    data?.property_type === "Villa" ||
    data?.property_type === "Open Plot"
  ) {
    let bhks = data?.bedroom_available;
    let facing = data?.facing;
    let furnishing = data?.furnishing_detail;

    return (
      <div className="overview-card">
        <div className="header">
          <h4>Overview</h4>
        </div>
        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiArea />
              <div className="text">
                <h6>Facing</h6>
                <p>{facing?.join(",")}</p>
              </div>
            </Col>
            {data?.property_type !== "Open Plot" && (
              <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                <GiResize />
                <div className="text">
                  <h6>Carpet Area</h6>
                  <p>{data?.carpet_area} sq.ft.</p>
                </div>
              </Col>
            )}

            {data?.property_type !== "Open Plot" && (
              <>
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <BsBuildingFillAdd />
                  <div className="text">
                    <h6>Possession Status</h6>
                    <p>
                      {data?.ready_to_occupy
                        ? "Ready To Move In"
                        : "Under Construction"}
                    </p>
                  </div>
                </Col>
                {!data?.ready_to_occupy && (
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={6}
                    className="each-item"
                  >
                    <AiFillCalendar />
                    <div className="text">
                      <h6>Available From</h6>
                      <p>{dayjs(data?.available_from).format("MMM YY")}</p>
                    </div>
                  </Col>
                )}
              </>
            )}
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Final Price</h6>
                <p>₹ {formatNumber(data?.final_price)}</p>
              </div>
            </Col>

            {data?.property_type !== "Open Plot" ? (
              <>
                {" "}
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <BiBed />
                  <div className="text">
                    <h6>Configuration Types</h6>
                    <p>{bhks?.join(",")}</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <GiWoodenChair />
                  <div className="text">
                    <h6>Furnishing</h6>
                    <p>{furnishing?.join(",")}</p>
                  </div>
                </Col>{" "}
              </>
            ) : (
              <>
                {" "}
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <BiArea />
                  <div className="text">
                    <h6>Land Length</h6>
                    <p>{data?.land_length}</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <BiArea />
                  <div className="text">
                    <h6>Land Size</h6>
                    <p>{data?.land_size}</p>
                  </div>
                </Col>{" "}
                <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
                  <BiArea />
                  <div className="text">
                    <h6>Land Width</h6>
                    <p>{data?.land_width}</p>
                  </div>
                </Col>{" "}
              </>
            )}
          </Row>
        </div>
      </div>
    );
  } else if (data?.property_type === "Rent") {
    let bhks = data?.bedroom_available;
    let facing = data?.facing;
    let furnishing = data?.furnishing_detail;
    return (
      <div className="overview-card">
        <div className="header">
          <h4>Overview</h4>
        </div>
        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiBed />
              <div className="text">
                <h6>Configuration Types</h6>
                <p>{bhks.join(",")}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Rent Per Month</h6>
                <p> ₹ {formatNumber(data?.rent_per_month)}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiPriceTag />
              <div className="text">
                <h6>Safety Deposit</h6>
                <p> ₹ {formatNumber(data?.advance_amount)}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BsBuildingFillAdd />
              <div className="text">
                <h6>Possession Status</h6>
                <p>
                  {data?.ready_to_move_in
                    ? "Ready To Move In"
                    : "Under Construction"}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <BiArea />
              <div className="text">
                <h6>Facing</h6>
                <p>{facing?.join(",")}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={6} className="each-item">
              <GiWoodenChair />
              <div className="text">
                <h6>Furnishing</h6>
                <p>{furnishing?.join(",")}</p>
              </div>
            </Col>{" "}
          </Row>
        </div>
      </div>
    );
  }
}

export default Overview;
