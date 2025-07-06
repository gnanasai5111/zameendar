import { Button, Modal, Radio } from "antd";
import React, { useEffect, useState } from "react";
import "./add-property.less";
import CustomButton from "../customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { propertyTabs } from "./constants";

function AddProperty() {
  // Looking to - Residential , commercial
  const [lookingFor, setLookingFor] = useState("Residential");
  const [lookingForError, setLookingForError] = useState(false);

  // Looking for - Sell, rent , pg
  const [lookingTo, setLookingTo] = useState();
  const [lookingToError, setLookingToError] = useState(false);

  // Property Type- Group , Single, Flat,Villa,Building
  const [propertyType, setPropertyType] = useState();
  const [propertyTypeError, setPropertyTypeError] = useState();

  // Property category - Group Apartments,Plots,Villas etc
  const [category, setCategory] = useState();
  const [categoryError, setCategoryError] = useState(false);

  // Modal for going into Previous filled Property
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  let propertyId = localStorage.getItem("property_id");
  let routePath = localStorage.getItem("property_type");
  let commercialType = localStorage.getItem("commercial_type");

  console.log(propertyId, routePath);

  const submitHandler = () => {
    if (!lookingTo) {
      setLookingToError(true);
    }
    if (!lookingFor) {
      setLookingForError(true);
    }
    if (!propertyType) {
      setPropertyTypeError(true);
    }
    if (!category) {
      setCategoryError(true);
    }
  };

  const lookingForHandler = (type) => {
    setLookingFor(type);
    setLookingTo();
    setPropertyType();
    setCategory();
  };

  const lookingToHandler = (type) => {
    if (type === "PG") {
      navigate("/add-property/pg");
    } else {
      setLookingTo(type);
      setPropertyType();
      setCategory();
    }
  };

  const propertyTypeHandler = (type) => {
    if (type === "Flat" || type === "Building" || type === "Villa") {
      const path = type.toLowerCase();
      navigate(`/add-property/rent/${path}`);
    } else {
      setPropertyType(type);
      setCategory();
    }
  };

  const categoryHandler = (type) => {
    setCategory(type);
    const path = type.toLowerCase().replace(/\s+/g, "-");

    if (lookingFor === "Commercial") {
      const route = lookingTo === "Sell" ? "sell" : "rent";
      navigate(`/add-property/${route}/commercial/${path}`);
    } else {
      const route = propertyType === "Group Properties" ? "group" : "single";
      navigate(`/add-property/sell/${route}/${path}`);
    }
  };

  useEffect(() => {
    if (lookingTo) {
      setLookingToError(false);
    }
    if (propertyType) {
      setPropertyTypeError(false);
    }
    if (category) {
      setCategoryError(false);
    }
  }, [lookingTo, propertyType, category]);

  useEffect(() => {
    if (propertyId) {
      setIsVisible(true);
    }
  }, [propertyId]);

  const continueHandler = () => {
    if (routePath === "Group Appartments") {
      navigate(`/add-property/sell/group/group-appartments/${propertyId}`);
    } else if (routePath === "Group Villas") {
      navigate(`/add-property/sell/group/group-villas/${propertyId}`);
    } else if (routePath === "Group Plots") {
      navigate(`/add-property/sell/group/group-plots/${propertyId}`);
    } else if (routePath === "Flat") {
      navigate(`/add-property/sell/single/flat/${propertyId}`);
    } else if (routePath === "Building") {
      navigate(`/add-property/sell/single/building/${propertyId}`);
    } else if (routePath === "Villa") {
      navigate(`/add-property/sell/single/villa/${propertyId}`);
    } else if (routePath === "Plot") {
      navigate(`/add-property/sell/single/plot/${propertyId}`);
    } else if (routePath === "Rent Flat") {
      navigate(`/add-property/rent/flat/${propertyId}`);
    } else if (routePath === "Rent Building") {
      navigate(`/add-property/rent/building/${propertyId}`);
    } else if (routePath === "Rent Villa") {
      navigate(`/add-property/rent/villa/${propertyId}`);
    } else if (routePath === "Pg") {
      navigate(`/add-property/pg/${propertyId}`);
    } else if (commercialType === "sell" || commercialType === "rent") {
      navigate(
        `/add-property/${commercialType}/commercial/${routePath}/${propertyId}`
      );
    }
  };
  const cancelHandler = () => {
    localStorage.removeItem("property_id");
    localStorage.removeItem("property_type");
    localStorage.removeItem("commercial_type");
    setIsVisible(false);
  };

  return (
    <div className="add-properties-wrapper">
      <div className="add-property-body">
        <h6 className="title">You are looking For</h6>
        <div className="types-wrapper">
          {Object.keys(propertyTabs).map((item, index) => {
            return (
              <div
                key={index}
                className={
                  lookingFor === item ? "type-wrapper active" : "type-wrapper"
                }
                onClick={() => lookingForHandler(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        {lookingForError && (
          <p className="error-text">Please Select the following!</p>
        )}
        {lookingFor && (
          <>
            <h6 className="title">You are Looking to</h6>
            <div className="category-wrapper">
              {Object.keys(propertyTabs[lookingFor]).map((item, index) => {
                return (
                  <CustomButton
                    key={index}
                    value={lookingTo}
                    title={item}
                    handler={lookingToHandler}
                    currentTitle={item}
                  />
                );
              })}
            </div>
            {lookingToError && (
              <p className="error-text">Please Select the following!</p>
            )}
          </>
        )}
        {(lookingTo === "Rent" || lookingTo === "Sell") && (
          <>
            <h6 className="title">Please choose the Property Type</h6>
            <div className="category-wrapper">
              {Object.keys(propertyTabs[lookingFor][lookingTo]).map(
                (item, index) => {
                  return (
                    <CustomButton
                      key={index}
                      value={propertyType}
                      title={item}
                      handler={propertyTypeHandler}
                      currentTitle={item}
                      name="second"
                    />
                  );
                }
              )}
            </div>
            {propertyTypeError && (
              <p className="error-text">Please Select the following!</p>
            )}
          </>
        )}
        {propertyType &&
          propertyType !== "Flat" &&
          propertyType !== "Building" &&
          propertyType !== "Villa" && (
            <div className="property-type">
              <h6 className="title">Please Select the Property Category</h6>
              <Radio.Group
                name="Group"
                className="radio-group-btns"
                onChange={(e) => categoryHandler(e.target.value)}
              >
                {propertyType &&
                  propertyTabs[lookingFor][lookingTo][propertyType].map(
                    (item, index) => {
                      return (
                        <Radio value={item.name} key={index}>
                          <div>
                            <h6 className="heading">{item.name}</h6>
                            <span className="desc">{item.desc}</span>
                          </div>
                          {item.icon}
                        </Radio>
                      );
                    }
                  )}
              </Radio.Group>
              {categoryError && (
                <p className="error-text">Please Select the following!</p>
              )}
            </div>
          )}
      </div>

      <div className="bottom-buttons-grp">
        <Button className="back-btn" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button className="next-btn" onClick={() => submitHandler()}>
          Next
        </Button>
      </div>

      <Modal
        open={isVisible}
        className="property-continue-modal"
        destroyOnClose
        centered
        closeIcon={false}
        mask={true}
        footer={false}
        onCancel={() => setIsVisible(false)}
      >
        <h6>Continue Where you left off?</h6>
        <p>Pickup from where you left the form last time</p>
        <div className="btns-grp">
          <Button onClick={() => cancelHandler()}>Cancel</Button>
          <Button onClick={() => continueHandler()}>Continue</Button>
        </div>
      </Modal>
    </div>
  );
}

export default AddProperty;
