import { Button, Input, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./get-location-info.less";

function GetLocationInfo({ data, setData, dataKey, form }) {
  const [searchValue, setSearchValue] = useState(
    data?.maps_details?.long_name ? data?.maps_details?.long_name : ""
  );
  const [searchResults, setSearchResults] = useState([]);
  const [emptyCaseFlag, setEmptyCaseFlag] = useState(false);

  const handleSearch = async (value) => {
    if (value) {
      const results = await dummyLocationSearch(value);

      if (results?.length === 0) {
        setEmptyCaseFlag(true);
      }
      setSearchResults(results);
    } else {
      message.error("Please Search a location!");
    }
  };

  useEffect(() => {
    setSearchResults([]);
    setEmptyCaseFlag(false);
  }, [searchValue]);

  const dummyLocationSearch = async (value) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${data?.state},${data?.city},${value}&countrycodes=IN`
      );
      const res = await response?.data;

      return res.map((result) => ({
        long_name: result.display_name,
        short_name: result.name,
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
      }));
    } catch (e) {
      message.error(e.message);
    }
  };

  const handleSelect = (value) => {
    const selected = searchResults.find((result) => result.long_name === value);
    setData({ ...data, [dataKey]: selected });

    form.setFieldValue(dataKey, selected);

    setSearchValue(value);
  };

  return (
    <div className="search-box">
      <div className="input-wrapper">
        <Input
          style={{ width: "100%" }}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Location"
          onPressEnter={() => handleSearch(searchValue)}
          value={searchValue}
          autoComplete="off"
        />
        <Button onClick={() => handleSearch(searchValue)}> Search</Button>
      </div>
      {emptyCaseFlag && (
        <div className="empty-container">
          {searchResults?.length === 0 ? (
            <>
              <div>No Results found</div>
            </>
          ) : null}
        </div>
      )}
      <div className="search-container">
        {searchResults?.map((i, index) => {
          return (
            <div
              className="search-item"
              onClick={() => handleSelect(i.long_name)}
              key={index}
            >
              <h4>{i.long_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetLocationInfo;

export const getLocationByLatandLng = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const res = await response?.data;

    return {
      long_name: res?.display_name,
      short_name: res?.address?.neighbourhood,
      lat: parseFloat(res?.lat),
      lng: parseFloat(res?.lon),
      city: res?.address?.city,
      state: res?.address?.state,
    };
  } catch (e) {
    message.error(e.message);
  }
};

export const getLocation = async () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function success(position) {
          try {
            const location = await getLocationByLatandLng(
              position.coords.latitude,
              position.coords.longitude
            );
            resolve(location);
          } catch (error) {
            reject(error);
          }
        },
        function error(error_message) {
          reject(new Error("An error has occurred while retrieving location"));
        }
      );
    } else {
      reject(new Error("Geolocation is not enabled on this browser"));
    }
  });
};
