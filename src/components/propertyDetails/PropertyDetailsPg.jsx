import React, { useEffect, useState } from "react";
import { Button, Col, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./property-details.less";
import { BsImages, BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import PropertyDetailsSideBar from "./PropertyDetailsSideBar";
import Gallery from "./Gallery";
import About from "./About";
import Location from "./Location";
import Amenities from "./Amenities";
import RoomDetails from "./RoomDetails";
import SharingTypePg from "./SharingTypePg";

function PropertyDetailsPg({ propertyData }) {
  console.log(propertyData, process.env.REACT_APP_BASE_URL);
  let type = propertyData?.property_type;

  const [activeItem, setActiveItem] = useState(0);
  const [propertyTabs, setPropertyTabs] = useState([
    { id: 0, name: "Gallery", icon: <BsImages /> },
    { id: 1, name: "Room Details", icon: <AiOutlineInfoCircle /> },
    { id: 2, name: "About", icon: <BsPersonWorkspace /> },
    { id: 3, name: "Sharing", icon: <BsPersonWorkspace /> },
    { id: 4, name: "Amenities", icon: <FaThList /> },
    { id: 5, name: "Location", icon: <BiCurrentLocation /> },
  ]);

  const refs = propertyTabs.map((item) => React.createRef());

  const navigate = useNavigate();

  useEffect(() => {
    // Add a scroll event listener to handle tab switching
    const handleScroll = () => {
      const scrollTop = window.scrollY + 70;
      const tabSections = document.querySelectorAll(".tab-section");

      tabSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;

        if (scrollTop >= sectionTop) {
          setActiveItem(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeItem]);

  return (
    <>
      <div className="property-details-wrapper">
        <PropertyDetailsSideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          propertyTabs={propertyTabs}
          refs={refs}
          data={propertyData}
        />
        <Row className="property-details-content">
          <Col
            span={24}
            className="gallery tab-section"
            ref={refs[0]}
            onClick={() => {
              if (propertyData?.images?.length > 0) {
                navigate(`/gallery/${propertyData?.property_id}`);
              } else {
                message.error("This Property Doesnt have any Images!");
              }
            }}
          >
            <Gallery images={propertyData?.images} />
            <div className="property-text">
              <div className="left">
                <h4>{propertyData?.project_name}</h4>
                <p>
                  {propertyData?.address?.area}, {propertyData?.address?.city}
                </p>
              </div>
              <Button className="contact-seller">Contact</Button>
            </div>
          </Col>

          <Col span={24} className="overview tab-section" ref={refs[1]}>
            <RoomDetails data={propertyData} />
          </Col>

          <Col span={24} className="about tab-section" ref={refs[2]}>
            <About data={propertyData?.about_property} />
          </Col>

          <Col
            span={24}
            className="pricing-floor-plan tab-section"
            ref={refs[3]}
          >
            <SharingTypePg data={propertyData} />
          </Col>

          <Col span={24} className="amenities tab-section" ref={refs[4]}>
            <Amenities data={propertyData?.amenities} />
          </Col>

          <Col span={24} className="location tab-section" ref={refs[5]}>
            <Location
              lat={propertyData?.map_details?.location?.split(",")[0]}
              lng={propertyData?.map_details?.location?.split(",")[1]}
            />
          </Col>
          <div
            className="footer"
            style={{ height: "400px", width: "100%" }}
          ></div>
        </Row>
      </div>
    </>
  );
}

export default PropertyDetailsPg;
