import React, { useState } from "react";
import "./pricing.less";
import { Row, Col, Button, Progress } from "antd";
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";

function Pricing() {
  const twoColors = { "0%": "#ffb300", "100%": "#87d068" };

  const [showMore, setShowMore] = useState();

  const showHandler = (text) => {
    if (showMore === text) {
      setShowMore();
    } else {
      setShowMore(text);
    }
  };
  const plans = [
    {
      id: 1,
      name: "bronze",
      planDesc: "5X buyers due to high visibility of property",
      price: "2999",
      iconClassName: "bronze-icon",
      planDuration: 7,
      visibility: 50,
      genuine_leads: true,
      assistance: false,
      social_media_marketing: false,
      calling_support: false,
      className: "normal-container",
    },
    {
      id: 2,
      name: "silver",
      planDesc: "6X buyers due to high visibility of property",
      price: "5999",
      iconClassName: "silver-icon",
      planDuration: 21,
      visibility: 60,
      unlimited_leads: true,
      assistance: false,
      social_media_marketing: false,
      calling_support: false,
      className: "normal-container",
    },
    {
      id: 3,
      name: "gold",
      planDesc: "7X buyers due to high visibility of property",
      price: "2999",
      iconClassName: "gold-icon",
      planDuration: 90,
      visibility: 70,
      unlimited_leads: true,
      assistance: true,
      social_media_marketing: false,
      calling_support: false,
      className: "popular-container",
    },
    {
      id: 4,
      name: "platinum",
      planDesc: "8X buyers due to high visibility of property",
      price: "12,999",
      iconClassName: "platinum-icon",
      planDuration: 180,
      visibility: 80,
      unlimited_leads: true,
      assistance: true,
      social_media_marketing: true,
      calling_support: false,
      className: "normal-container",
    },
    {
      id: 5,
      name: "diamond",
      planDesc: "9X buyers due to high visibility of property",
      price: "16,999",
      iconClassName: "diamond-icon",
      planDuration: 360,
      visibility: 90,
      unlimited_leads: true,
      assistance: true,
      social_media_marketing: true,
      calling_support: true,
      className: "important-container",
    },
  ];

  return (
    <>
      <div className="pricing-wrapper">
        <Row justify="space-around" align="bottom">
          {plans.map((plan) => {
            return (
              <Col
                xs={22}
                sm={10}
                md={7}
                lg={7}
                xl={4}
                className={plan.className}
              >
                {plan.name === "gold" && (
                  <div className="popular-wrapper">Most Popular</div>
                )}

                {plan.name === "diamond" && (
                  <div className="important-wrapper">Most Recommended</div>
                )}
                <div className="plan-container">
                  <div className="plan-header-container">
                    <div className={`price-icon ${plan?.iconClassName}`}>
                      <img
                        src={`/images/pricing/${plan.name}.png`}
                        alt={plan?.name}
                      />
                    </div>
                    <h4 className="plan-title">{plan.name}</h4>
                    <div className="plan-desc">{plan.planDesc}</div>
                    <div className="price">
                      <h5>₹ {plan.price}</h5>
                      <p> exclusive of GST</p>
                    </div>
                    <div className="buy-btn-container">
                      <Button
                        className={
                          plan.name === "diamond"
                            ? "buy-btn secondary"
                            : plan.name === "gold"
                            ? "buy-btn primary"
                            : "buy-btn"
                        }
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                  <div className="options-list">
                    <div className="item">
                      <div className="text">Plan Duration</div>
                      <p className="desc">{plan.planDuration}</p>
                    </div>
                    <div className="item">
                      <div className="text">Visibility</div>
                      <Progress
                        type="dashboard"
                        percent={plan.visibility}
                        strokeColor={twoColors}
                      />
                    </div>
                    <div className="item">
                      <div className="text">
                        {plan.unlimited_leads
                          ? "Unlimited Leads"
                          : "Genuine Leads"}
                      </div>
                      {plan.unlimited_leads || plan.genuine_leads ? (
                        <FcCheckmark />
                      ) : (
                        <AiOutlineMinusCircle />
                      )}
                    </div>
                    <div className="item no">
                      <div className="text">Assistance</div>
                      {plan.assistance ? (
                        <FcCheckmark />
                      ) : (
                        <AiOutlineMinusCircle />
                      )}
                    </div>
                    <div className="item no">
                      <div className="text">Social Media Marketing</div>
                      {plan.social_media_marketing ? (
                        <FcCheckmark />
                      ) : (
                        <AiOutlineMinusCircle />
                      )}
                    </div>
                    <div className="item no">
                      <div className="text">24/7 calling support</div>
                      {plan.calling_support ? (
                        <FcCheckmark />
                      ) : (
                        <AiOutlineMinusCircle />
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="pricing-mobile-wrapper">
        <Row justify="space-around" align="bottom">
          <Col xs={24} sm={10} md={7} lg={7} xl={4}>
            <div className="plan-container">
              <div className="plan-header-container bronze">
                <div className="header-wrapper">
                  <div className="header-icons">
                    <div className="price-icon bronze-icon">
                      <img src="/images/pricing/bronze.png" alt="bronze" />
                    </div>
                    <h4 className="plan-title">Bronze</h4>
                  </div>
                  <div className="plan-desc">
                    5X buyers due to high visibility of property
                    <Progress
                      type="dashboard"
                      percent={50}
                      strokeColor={twoColors}
                    />
                  </div>
                </div>
                <div className="price-container">
                  <div className="price-duration">
                    <h5>
                      ₹ 2999/-<span>excl. GST</span>
                    </h5>
                    <p>7 days </p>
                  </div>
                  <Button className="buy-btn bronze">Buy Now</Button>
                </div>
              </div>
              <div className="show-more bronze">
                <div
                  className="accordion"
                  onClick={() => showHandler("bronze")}
                >
                  View Benefits <DownOutlined />
                </div>
                {showMore === "bronze" && (
                  <>
                    {" "}
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Genuine Leads</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={10} md={7} lg={7} xl={4}>
            <div className="plan-container">
              <div className="plan-header-container silver">
                <div className="header-wrapper">
                  <div className="header-icons">
                    <div className="price-icon silver-icon">
                      <img src="/images/pricing/silver.png" alt="silver" />
                    </div>
                    <h4 className="plan-title">Silver</h4>
                  </div>
                  <div className="plan-desc">
                    5X buyers due to high visibility of property
                    <Progress
                      type="dashboard"
                      percent={60}
                      strokeColor={twoColors}
                    />
                  </div>
                </div>
                <div className="price-container">
                  <div className="price-duration">
                    <h5>
                      ₹ 5999/-<span>excl. GST</span>
                    </h5>
                    <p>21 days </p>
                  </div>
                  <Button className="buy-btn silver">Buy Now</Button>
                </div>
              </div>
              <div className="show-more silver">
                <div
                  className="accordion"
                  onClick={() => showHandler("silver")}
                >
                  View Benefits <DownOutlined />
                </div>
                {showMore === "silver" && (
                  <>
                    {" "}
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Unlimited Leads</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={10} md={7} lg={7} xl={4}>
            <div className="plan-container">
              <div className="plan-header-container primary">
                <div className="header-wrapper">
                  <div className="header-icons">
                    <div className="price-icon gold-icon">
                      <img src="/images/pricing/gold.png" alt="gold" />
                    </div>
                    <h4 className="plan-title">Gold</h4>
                  </div>
                  <div className="plan-desc">
                    5X buyers due to high visibility of property
                    <Progress
                      type="dashboard"
                      percent={70}
                      strokeColor={twoColors}
                    />
                  </div>
                </div>
                <div className="price-container">
                  <div className="price-duration">
                    <h5>
                      ₹ 12999/-<span>excl. GST</span>
                    </h5>
                    <p>3 months</p>
                  </div>
                  <Button className="buy-btn primary">Buy Now</Button>
                </div>
              </div>
              <div className="show-more primary">
                <div className="accordion" onClick={() => showHandler("gold")}>
                  View Benefits <DownOutlined />
                </div>
                {showMore === "gold" && (
                  <>
                    {" "}
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Unlimited Leads</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Assistance</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} sm={10} md={7} lg={7} xl={4}>
            <div className="plan-container">
              <div className="plan-header-container platinum">
                <div className="header-wrapper">
                  <div className="header-icons">
                    <div className="price-icon platinum-icon">
                      <img src="/images/pricing/platinum.png" alt="platinum" />
                    </div>
                    <h4 className="plan-title">Platinum</h4>
                  </div>
                  <div className="plan-desc">
                    8X buyers due to high visibility of property
                    <Progress
                      type="dashboard"
                      percent={80}
                      strokeColor={twoColors}
                    />
                  </div>
                </div>
                <div className="price-container">
                  <div className="price-duration">
                    <h5>
                      ₹ 16999/-<span>excl. GST</span>
                    </h5>
                    <p>6 months</p>
                  </div>
                  <Button className="buy-btn platinum">Buy Now</Button>
                </div>
              </div>
              <div className="show-more platinum">
                <div
                  className="accordion"
                  onClick={() => showHandler("platinum")}
                >
                  View Benefits <DownOutlined />
                </div>
                {showMore === "platinum" && (
                  <>
                    {" "}
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Unlimited Leads</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Assistance</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Social Media Marketing</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={10} md={7} lg={7} xl={4}>
            <div className="plan-container">
              <div className="plan-header-container secondary">
                <div className="header-wrapper">
                  <div className="header-icons">
                    <div className="price-icon diamond-icon">
                      <img src="/images/pricing/diamond.png" alt="diamond" />
                    </div>
                    <h4 className="plan-title">Diamond</h4>
                  </div>
                  <div className="plan-desc">
                    10X buyers due to high visibility of property
                    <Progress
                      type="dashboard"
                      percent={90}
                      strokeColor={twoColors}
                    />
                  </div>
                </div>
                <div className="price-container">
                  <div className="price-duration">
                    <h5>
                      ₹ 18999/-<span>excl. GST</span>
                    </h5>
                    <p>12 months</p>
                  </div>
                  <Button className="buy-btn secondary">Buy Now</Button>
                </div>
              </div>
              <div className="show-more secondary">
                <div
                  className="accordion"
                  onClick={() => showHandler("diamond")}
                >
                  View Benefits <DownOutlined />
                </div>
                {showMore === "diamond" && (
                  <>
                    {" "}
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Unlimited Leads</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Assistance</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">Social Media Marketing</div>
                    </div>
                    <div className="item">
                      <FcCheckmark />
                      <div className="text">24/7 calling support</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pricing;
