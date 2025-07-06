import React from "react";

import "./about.less";
import { Button, Col, Row, Timeline } from "antd";
import { BsCardChecklist } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineReviews, MdVerified } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import LinesAnimation from "./LinesAnimation";
import { CaretRightOutlined } from "@ant-design/icons";

function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="header">
          <img src="/images/about.png" alt="wallpaper" className="left-img" />
          <div className="overlay"></div>
          <div className="text-box-container">
            <h3>About Us</h3>
            <p>Welcome to Zameendar Properties.</p>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc">
            <h5>What we do</h5>
            <p className="first">
              At zameendar properties, we are dedicated to simplifying the
              journey of finding your dream property or selling your valuable
              real estate. We understand that your home is not just a place; it
              is a reflection of your aspirations, your lifestyle, and your
              future. That's why we have created a platform that empowers you to
              make informed decisions, whether you are buying, selling, or
              renting.
            </p>
            <p className="first">
              But our commitment goes beyond just listings and transactions. We
              are driven by the belief that real estate is a conduit to a better
              life. It's about finding that perfect haven where your family will
              thrive, or it's about unlocking the true potential of your
              investment. We take pride in being more than real estate agents;
              we are your partners in realizing your dreams and securing your
              future.
            </p>
          </div>
          <div className="right-side">
            <img
              src="/images/about.png"
              alt="wallpaper"
              className="right-img"
            />
          </div>
        </div>

        <div className="cards-wrapper">
          <div className="title">
            <h5>What Sets Us Apart</h5>
            <p>
              Our commitment to excellence sets us apart in the world of online
              property listings. Here is what makes us unique
            </p>
          </div>

          <Row justify="space-between">
            <Col xs={24} sm={11} md={11} lg={7} xl={7} className="wrapper">
              <div className="left-img">
                <BsCardChecklist />
              </div>
              <div className="right-side">
                <h5>Extensive Listings</h5>
                <p>
                  {" "}
                  We bring you an extensive selection of properties from various
                  locations, so you can explore a wide range of options to find
                  the perfect match for your needs.
                </p>
              </div>
            </Col>

            <Col xs={24} sm={11} md={11} lg={7} xl={7} className="wrapper">
              <div className="left-img">
                <FaLaptopCode />
              </div>
              <div className="right-side">
                <h5>User-Friendly Interface</h5>
                <p>
                  Our user-friendly website is designed with you in mind. Easy
                  navigation, powerful search filters, and detailed property
                  listings ensure you find what you're looking for quickly and
                  effortlessly.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={11} md={11} lg={7} xl={7} className="wrapper">
              <div className="left-img">
                <MdVerified />
              </div>
              <div className="right-side">
                <h5>Verified Listings</h5>
                <p>
                  We understand the importance of trust in real estate
                  transactions. That's why we rigorously verify property
                  listings to provide you with accurate and reliable
                  information.(verification of the ad posted only. we do not
                  perform any property verifications & also to the properties
                  listed in our site)
                </p>
              </div>
            </Col>
            <Col xs={24} sm={11} md={11} lg={7} xl={7} className="wrapper">
              <div className="left-img">
                <GiTeacher />
              </div>
              <div className="right-side">
                <h5>Expert Guidance</h5>
                <p>
                  Our team of real estate experts is here to assist you at every
                  step of your property journey. Whether you have questions
                  about the market, need advice on pricing, or require
                  assistance with negotiations, we've got you covered.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={11} md={11} lg={7} xl={7} className="wrapper">
              <div className="left-img">
                <MdOutlineReviews />
              </div>
              <div className="right-side">
                <h5>Community and Reviews</h5>
                <p>
                  Join our thriving community of buyers, sellers, and renters.
                  Leave reviews, read about other users' experiences, and
                  connect with real people who have benefited from our platform
                </p>
              </div>
            </Col>
            <Col
              xs={24}
              sm={11}
              md={11}
              lg={7}
              xl={7}
              className="wrapper"
              style={{ visibility: "hidden" }}
            ></Col>
          </Row>
        </div>

        <div
          className="background-image"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
          }}
        >
          <div className="content">
            <h5>Get Started Today</h5>
            <p>
              Start your journey with us today. Explore our listings, connect
              with experienced agents, and discover the possibilities that await
              you in the world of real estate. At zameendar properties, we're
              not just about properties; we're about your dreams and
              aspirations. Let's make them a reality, together.
            </p>
            <div className="btn-container">
              <div className="icon">
                <CaretRightOutlined />
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="timeline-wrapper">
          <Timeline
            mode="alternate"
            items={[
              {
                label: "Vision",
                children:
                  "Our vision is to revolutionize the way people buy, sell, and rent properties by providing a seamless and user-friendly online platform that empowers individuals and businesses to make informed real estate decisions.",
              },
              {
                children:
                  "Our mission is to connect buyers, sellers, renters, and real estate professionals in a transparent and efficient manner, offering comprehensive property listings, accurate market data, and innovative tools to simplify the property search process.",
                label: "Mission",
              },
              {
                children:
                  " We strive to create a trusted online community where users can easily discover their dream properties, make informed investment choices, and connect with the right professionals to facilitate successful transactions.",
                label: "Trust",
              },
              {
                children:
                  "Through continuous innovation and a commitment to exceptional user experience, we aim to become the go-to destination for all property-related needs, empowering individuals to make confident and informed decisions in the real estate market.",
                label: "Innovation",
              },
            ]}
          />
        </div>
        <div className="post-property-wrapper">
          <div
            className="bg-image"
            style={{ backgroundImage: `url("/images/map.png")` }}
          ></div>
          <p>You can start your Journey by adding Listings.</p>
          <div className="btn-post">
            <Button className="post">Add Property</Button>
          </div>
          <div className="bg-overlay"></div>
        </div>
      </div>
    </>
  );
}

export default About;
