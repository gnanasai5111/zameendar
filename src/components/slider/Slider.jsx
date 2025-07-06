import React, { useState } from "react";
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
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Slider({ imageList, title }) {
  const [mainSwiper, setMainSwiper] = useState(null); // Add mainSwiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const groupedArray = [];
  let flags = new Array(imageList?.length).fill(false);
  for (let i = 0; i < imageList.length; i++) {
    if (flags[i]) {
      continue;
    }
    for (let j = 0; j < imageList.length; j++) {
      if (imageList[j].meta_data[0].name === imageList[i].meta_data[0].name) {
        groupedArray.push(imageList[j]);
        flags[j] = true;
      }
    }
  }

  const allImageTitles = imageList.reduce((uniqueArray, item) => {
    const title = item.meta_data[0].name;
    const url = process.env.REACT_APP_BASE_URL + item.image;
    const id = item.image_id;

    // Check if the title is not already in the uniqueArray
    if (!uniqueArray.some((obj) => obj.title === title)) {
      uniqueArray.push({ title, url, id });
    }

    return uniqueArray;
  }, []);

  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    let title = groupedArray[swiper.activeIndex].meta_data[0].name;
    let tabIndex = allImageTitles.findIndex((i) => i.title === title);

    setThumbsSwiper(swiper);
    setActiveTabIndex(tabIndex);
  };

  const handleTabClick = (id) => {
    let tabIndex = allImageTitles.findIndex((i) => i.id === id);
    let imageIndex = groupedArray.findIndex((i) => i.image_id === id);
    console.log(tabIndex, imageIndex);
    setActiveTabIndex(tabIndex);

    if (thumbsSwiper && !thumbsSwiper.destroyed) {
      thumbsSwiper.slideTo(imageIndex);
      thumbsSwiper.update();
    }

    if (mainSwiper && !mainSwiper.destroyed) {
      // Update the main slider here
      mainSwiper.slideTo(imageIndex);
      mainSwiper.update();
    }
  };

  const leftHandler = () => {
    if (start !== 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };
  const rightHandler = () => {
    if (end < allImageTitles?.length) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  console.log(allImageTitles, "imagetu");

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
        <div className="desktop-tabs">
          <LeftOutlined onClick={() => leftHandler()} />
          <div className="tabs">
            {allImageTitles
              .map((img, index) => {
                return (
                  <div
                    className={
                      activeTabIndex === index ? "tab-item active" : "tab-item"
                    }
                    onClick={() => handleTabClick(img.id)}
                    key={index}
                  >
                    {img.title}
                  </div>
                );
              })
              .slice(start, end)}
          </div>
          <RightOutlined onClick={() => rightHandler()} />
        </div>
        <div className="tabs-mobile">
          {allImageTitles.map((img, index) => {
            return (
              <div
                className={
                  activeTabIndex === index ? "tab-item active" : "tab-item"
                }
                onClick={() => handleTabClick(img.id)}
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
          onSwiper={(swiper) => setMainSwiper(swiper)}
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
          {groupedArray.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    src={process.env.REACT_APP_BASE_URL + img.image}
                    alt="card-img"
                  />
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
          {groupedArray.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={process.env.REACT_APP_BASE_URL + img.image}
                  alt="card-img"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
