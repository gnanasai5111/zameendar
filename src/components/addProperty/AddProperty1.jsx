import { Button, Radio } from "antd";
import React, { useEffect, useState } from "react";
import "./add-property.less";
import CustomButton from "../customButton/CustomButton";
import {
  BsFillBuildingFill,
  BsFillBuildingsFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { GiFamilyHouse, GiVillage } from "react-icons/gi";
import { BiRectangle } from "react-icons/bi";
import { Outlet, useNavigate } from "react-router-dom";
import {
  commercialCategoryTypes,
  commercialTypes,
  officeSpaceTypes,
  plotLandTypes,
  purchaseTypes,
  rentCategoryTypes,
  retailSpaceTypes,
  sellCategoryTypes,
  storageTypes,
} from "./constants";

function AddProperty() {
  const [category, setCategory] = useState();
  const [propertyType, setPropertyType] = useState();
  const [lookingFor, setLookingFor] = useState();
  const [categoryTypes, setCategoryTypes] = useState();

  const [activeCommercialItem, setActiveCommercialItem] = useState();

  const navigate = useNavigate();

  const navigateToAddProperty = () => {
    if (lookingFor === "Sell") {
      if (category === "Group") {
        const path = propertyType.toLowerCase().replace(/\s+/g, "-");
        navigate(`/add-property/sell/group/${path}`);
      } else if (category === "Single") {
        const path = propertyType.toLowerCase().replace(/\s+/g, "-");
        navigate(`/add-property/sell/single/${path}`);
      } else if (category === "Commercial") {
        if (propertyType && activeCommercialItem) {
          const path = propertyType.toLowerCase().replace(/\s+/g, "-");
          navigate(`/add-property/sell/commercial/${path}`);
        }
      }
    } else if (lookingFor === "Rent") {
      const path = category.toLowerCase().replace(/\s+/g, "-");
      navigate(`/add-property/rent/${path}`);
    } else if (lookingFor === "Commercial") {
      if (category === "Sell") {
        if (activeCommercialItem && propertyType) {
          const path = propertyType.toLowerCase().replace(/\s+/g, "-");
          navigate(`/add-property/sell/commercial/${path}`);
        }
      } else if (category === "Rent") {
        if (activeCommercialItem && propertyType) {
          const path = propertyType.toLowerCase().replace(/\s+/g, "-");
          navigate(`/add-property/rent/commercial/${path}`);
        }
      }
    }
  };

  const typeHandler = (type) => {
    setLookingFor(type);
    if (type === "Sell") {
      setCategoryTypes(sellCategoryTypes);
    } else if (type === "Rent") {
      // setCategory();
      setCategoryTypes(rentCategoryTypes);
    } else if (type === "Commercial") {
      // setCategory();
      setCategoryTypes(commercialCategoryTypes);
    } else {
      // setCategory();
      navigate("/add-property/pg");
    }
    setCategory();
    setActiveCommercialItem();
  };

  useEffect(() => {
    setActiveCommercialItem();
  }, [category]);
  return (
    <div className="add-properties-wrapper">
      <div className="add-property-body">
        <h6 className="title">You are looking to</h6>
        <div className="types-wrapper">
          {purchaseTypes.map((type) => {
            return (
              <div
                className={
                  lookingFor === type ? "type-wrapper active" : "type-wrapper"
                }
                onClick={() => typeHandler(type)}
              >
                {type}
              </div>
            );
          })}
        </div>
        <h6 className="title">Please choose the Property category</h6>
        <div className="category-wrapper">
          {categoryTypes?.map((item) => {
            return (
              <CustomButton
                value={category}
                title={item.title}
                setValue={setCategory}
                currentTitle={item.currentTitle}
              />
            );
          })}
        </div>
        <div className="property-type">
          {category === "Group" && (
            <>
              <h6 className="title">Please Select the Property Type</h6>
              <Radio.Group
                name="Group"
                className="radio-group-btns"
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <Radio value="Group Apartments">
                  <div>
                    <h6 className="heading">Group Apartments</h6>
                    <span className="desc">
                      You can post advertisements for group apartments here.
                    </span>
                  </div>
                  <BsFillBuildingsFill />
                </Radio>
                <Radio value="Group Villas">
                  {" "}
                  <div>
                    <h6 className="heading">Group Villas</h6>
                    <span className="desc">
                      You can post advertisements for group villas here.
                    </span>
                  </div>
                  <GiVillage />
                </Radio>
                <Radio value="Group Plots">
                  {" "}
                  <div>
                    <h6 className="heading">Group Plots</h6>
                    <span className="desc">
                      You can post advertisements for group plots here.
                    </span>
                  </div>
                  <TfiLayoutGrid3 />
                </Radio>
              </Radio.Group>
            </>
          )}
          {category === "Single" && (
            <>
              <h6 className="title">Please Select the Property Type</h6>
              <Radio.Group
                name="Group"
                className="radio-group-btns"
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <Radio value="Flat">
                  <div>
                    <h6 className="heading">Flat</h6>
                    <span className="desc">
                      You can post advertisements for Flat here.
                    </span>
                  </div>
                  <BsFillHouseDoorFill />
                </Radio>
                <Radio value="Villa">
                  {" "}
                  <div>
                    <h6 className="heading">Villa</h6>
                    <span className="desc">
                      You can post advertisements for Villa here.
                    </span>
                  </div>
                  <GiFamilyHouse />
                </Radio>
                <Radio value="Building">
                  {" "}
                  <div>
                    <h6 className="heading">Building</h6>
                    <span className="desc">
                      You can post advertisements for Building here.
                    </span>
                  </div>
                  <BsFillBuildingFill />
                </Radio>
                <Radio value="Plot">
                  {" "}
                  <div>
                    <h6 className="heading">Plot</h6>
                    <span className="desc">
                      You can post advertisements for Plot here.
                    </span>
                  </div>
                  <BiRectangle />
                </Radio>
              </Radio.Group>
            </>
          )}
          {(category === "Sell" ||
            category === "Rent" ||
            category === "Commercial") && (
            <>
              <h6 className="title">Please Select the Property Type</h6>
              <div className="types-wrapper">
                {commercialTypes.map((type) => {
                  return (
                    <div
                      className={
                        activeCommercialItem === type
                          ? "type-wrapper active"
                          : "type-wrapper"
                      }
                      onClick={() => setActiveCommercialItem(type)}
                    >
                      {type}
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {activeCommercialItem === "Office Space" && (
            <>
              <h6 className="title">
                what Kind of {activeCommercialItem} is it
              </h6>
              <div className="types-wrapper">
                <Radio.Group
                  name="Group"
                  className="radio-group-btns"
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {officeSpaceTypes.map((i) => {
                    return (
                      <Radio value={i.title}>
                        {" "}
                        <div>
                          <h6 className="heading">{i.title}</h6>
                          <span className="desc">
                            You can post advertisements for {i.title} here.
                          </span>
                        </div>
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </div>
            </>
          )}
          {activeCommercialItem === "Retail Space" && (
            <>
              <h6 className="title">
                what Kind of {activeCommercialItem} is it
              </h6>
              <div className="types-wrapper">
                <Radio.Group
                  name="Group"
                  className="radio-group-btns"
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {retailSpaceTypes.map((i) => {
                    return (
                      <Radio value={i.title}>
                        {" "}
                        <div>
                          <h6 className="heading">{i.title}</h6>
                          <span className="desc">
                            You can post advertisements for {i.title} here.
                          </span>
                        </div>
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </div>
            </>
          )}
          {activeCommercialItem === "Plot/Land" && (
            <>
              <h6 className="title">
                what Kind of {activeCommercialItem} is it
              </h6>
              <div className="types-wrapper">
                <Radio.Group
                  name="Group"
                  className="radio-group-btns"
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {plotLandTypes.map((i) => {
                    return (
                      <Radio value={i.title}>
                        {" "}
                        <div>
                          <h6 className="heading">{i.title}</h6>
                          <span className="desc">
                            You can post advertisements for {i.title} here.
                          </span>
                        </div>
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </div>
            </>
          )}
          {activeCommercialItem === "Storage" && (
            <>
              <h6 className="title">
                what Kind of {activeCommercialItem} is it
              </h6>
              <div className="types-wrapper">
                <Radio.Group
                  name="Group"
                  className="radio-group-btns"
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {storageTypes.map((i) => {
                    return (
                      <Radio value={i.title}>
                        {" "}
                        <div>
                          <h6 className="heading">{i.title}</h6>
                          <span className="desc">
                            You can post advertisements for {i.title} here.
                          </span>
                        </div>
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bottom-buttons-grp">
        <Button className="back-btn">Back</Button>
        <Button className="next-btn" onClick={() => navigateToAddProperty()}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default AddProperty;
