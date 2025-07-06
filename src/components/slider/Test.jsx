import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./slider.less";

// import required modules
import { Zoom, FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Slider({ imageList, title }) {
  const [mainSwiper, setMainSwiper] = useState(null); // Add mainSwiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setThumbsSwiper(swiper);
    setActiveTabIndex(swiper.activeIndex);
  };

  const handleTabClick = (index) => {
    setActiveTabIndex(index);

    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideTo(index);
      thumbsSwiper.update();
    }

    if (mainSwiper && !mainSwiper.destroyed) {
      // Update the main slider here
      mainSwiper.slideTo(index);
      mainSwiper.update();
    }
  };

  const arrayOfObjects = imageList.map((item, index) => ({
    id: index + 1,
    title: item.meta_data[0].name,
    url: process.env.REACT_APP_BASE_URL + item.image,
  }));

  const allImageTitles = imageList.reduce((uniqueArray, item) => {
    const title = item.meta_data[0].name;
    const url = process.env.REACT_APP_BASE_URL + item.image;

    // Check if the title is not already in the uniqueArray
    if (!uniqueArray.some((obj) => obj.title === title)) {
      uniqueArray.push({ title, url });
    }

    return uniqueArray;
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="header">
          <div className="left">
            <h6>{title}</h6>
          </div>
          <div className="right">
            <Button>Contact</Button>
            <div onClick={() => navigate(-1)}>X</div>
          </div>
        </div>
        <div className="tabs">
          {allImageTitles.map((img, index) => {
            return (
              <div
                className={
                  activeTabIndex === index ? "tab-item active" : "tab-item"
                }
                onClick={() => handleTabClick(index)}
                key={index}
              >
                {img.title}
              </div>
            );
          })}
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          onSwiper={(swiper) => setMainSwiper(swiper)} // Capture the main slider
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          zoom={true}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Zoom, FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper2"
        >
          {arrayOfObjects.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img src={img.url} alt="card-img" />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {arrayOfObjects.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={img.url} alt="card-img" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
