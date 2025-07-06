import React, { useEffect, useState } from "react";
import "./home.less";

import PropertySlider from "./PropertySlider";
import { AutoComplete, Input, Select, message } from "antd";
import { citiesInIndia, states } from "../addProperty/constants";
import { SearchOutlined } from "@ant-design/icons";
import { BsBuildings, BsFillHouseDoorFill } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import GroupPlotsRoute from "../Routes/GroupPlotsRoute";
import GroupAppartmentsRoute from "../Routes/GroupAppartmentsRoute";
import GroupVillasRoute from "../Routes/GroupVillasRoute";
import { useNavigate, useParams } from "react-router-dom";
import RentRoute from "../Routes/RentRoute";
import PgRoute from "../Routes/PgRoute";
import CommercialRoute from "../Routes/CommercialRoute";
import PlotsRoute from "../Routes/PlotsRoute";
import {
  getLocation,
  getLocationByLatandLng,
} from "../addProperty/Location/GetLocationInfo";

const { Option } = Select;
function Home() {
  const [activeTab, setActiveTab] = useState();
  const [activeBottomTab, setActiveBottomTab] = useState();
  const params = useParams();
  const [location, setLocation] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const data = await getLocation();
        console.log(data);
        setLocation(data?.city);
      } catch (error) {
        setLocation("Hyderabad")
        // message.error(error.message);
      }
    };
    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (params.type) {
      setActiveTab(params.type);
    } else {
      setActiveTab("buy-properties");
    }
  }, [params]);

  const options = [
    { value: "Kukatpally" },
    { value: "Chintal" },
    { value: "Batman" },
  ];

  const bottomTabs = [
    { title: "Gated Communities", icon: <BsBuildings /> },
    { title: "Individual Properties", icon: <BsFillHouseDoorFill /> },
    { title: "Villas", icon: <GiVikingLonghouse /> },
  ];
  // const tabs = ["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"];

  const tabs = [
    { name: "BUY", path: "buy-properties" },
    { name: "RENT", path: "rent-properties" },
    { name: "COMMERCIAL", path: "commercial-properties" },
    { name: "PG/CO-LIVING", path: "pg-properties" },
    { name: "PLOTS", path: "plot-properties" },
  ];
  return (
    <div className="home-page-wrapper">
      <div className="home-container">
        <img
          src="https://homeradar.cththemes.co/wp-content/uploads/2020/12/14.jpg"
          alt="home-img"
          loading="lazy"
        />
        <div className="overlay-home"></div>

        <div className="search-tab-container">
          <div className="search-tab-wrapper">
            <div className="tabs-container">
              {tabs.map((item) => {
                return (
                  <div
                    className={
                      activeTab === item.path ? "tab-item active" : "tab-item"
                    }
                    onClick={() => {
                      navigate(`/property/${item.path}`);
                      setActiveTab(item.path);
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div className="search-box">
              <Select
                placeholder="Select a city"
                className="state-select"
                showSearch
                value={location}
              >
                {Object.keys(citiesInIndia).map((state) =>
                  citiesInIndia[state].map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))
                )}
              </Select>
              <AutoComplete
                className="search-autocomplete"
                options={options}
                placeholder="Search Properties"
                filterOption={(inputValue, option) =>
                  option?.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <div className="search-icon">
                <SearchOutlined />
              </div>
            </div>
          </div>
          <div className="bottom-property-tabs">
            {bottomTabs.map((item) => {
              return (
                <div
                  className={
                    activeBottomTab === item.title
                      ? "tab-bottom-item active"
                      : "tab-bottom-item"
                  }
                  onClick={() => setActiveBottomTab(item)}
                >
                  <div className="bottom-icon">{item.icon}</div>
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {activeTab === "buy-properties" ? (
        <>
          {" "}
          <GroupAppartmentsRoute />
          <GroupVillasRoute />
        </>
      ) : activeTab === "rent-properties" ? (
        <>
          <RentRoute />
        </>
      ) : activeTab === "pg-properties" ? (
        <>
          <PgRoute />
        </>
      ) : activeTab === "commercial-properties" ? (
        <>
          <CommercialRoute />
        </>
      ) : activeTab === "plot-properties" ? (
        <>
          <GroupPlotsRoute />
          <PlotsRoute />
        </>
      ) : (
        <></>
      )}

      {/* <GroupPlotsRoute /> */}
    </div>
  );
}

export default Home;
