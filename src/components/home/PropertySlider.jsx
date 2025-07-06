import React, { useEffect, useRef, useState } from "react";
import "./property-slider.less";
import ReusableCard from "./ReusableCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function PropertySlider({ data, title, id, type }) {
  const [scrollLeftDisabled, setScrollLeftDisabled] = useState(true);
  const [scrollRightDisabled, setScrollRightDisabled] = useState(false);

  useEffect(() => {
    const slider = document.getElementById(id);

    // Function to handle scroll event and update button states
    const handleScroll = () => {
      console.log(slider.scrollLeft + slider.clientWidth, slider.scrollWidth);
      if (slider) {
        setScrollLeftDisabled(slider.scrollLeft <= 0);
        setScrollRightDisabled(
          slider.scrollLeft + slider.clientWidth + 2 >= slider.scrollWidth
        );
      }
    };
    slider.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  console.log(data, "data");

  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft -= document.querySelector(
      ".reusable-card-container"
    ).clientWidth;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft += document.querySelector(
      ".reusable-card-container"
    ).clientWidth;
  };

  return (
    <div className="properties-wrapper">
      <div className="property-container">
        <div className="heading-title-container">
          <h2 className="property-main-title">{title}</h2>
          <p>Recently added Properties</p>
        </div>
        <div className="slider-container-wrapper">
          <div className="property-wrapper-slider" id={id}>
            {data?.map((item) => {
              return <ReusableCard item={item} type={type} id={id} />;
            })}
          </div>
          <button
            className="left-btn"
            onClick={slideLeft}
            disabled={scrollLeftDisabled}
          >
            <LeftOutlined />
          </button>
          <button
            className="right-btn"
            onClick={slideRight}
            disabled={scrollRightDisabled}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertySlider;
