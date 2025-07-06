import React from "@testing-library/react";
import { BiBuilding, BiHomeSmile } from "react-icons/bi";
import { BsFillBuildingsFill, BsPersonWorkspace } from "react-icons/bs";
import { GiVillage } from "react-icons/gi";
import { TfiLayoutGrid3, TfiLayoutSidebarNone } from "react-icons/tfi";

export const propertyTypes = ["Buy", "Rent", "Pg/Co-Living"];
export const cities = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

export const categories = [
  "Group Apartments",
  "Group Villas",
  "Group Plots",
  "Flat",
  "Villa",
  "Plot",
  "PG/Co-Living",
];

export const categoriesWithIcons = [
  { name: "Group Apartments", icon: <BsFillBuildingsFill /> },
  { name: "Group Villas", icon: <GiVillage /> },
  { name: "Group Plots", icon: <TfiLayoutGrid3 /> },
  { name: "Flat", icon: <BiBuilding /> },
  { name: "Villa", icon: <BiHomeSmile /> },
  { name: "Plot", icon: <TfiLayoutSidebarNone /> },
  { name: "PG/Co-Living", icon: <BsPersonWorkspace /> },
];

export function convertNumToCurrency(value) {
  const val = Math.abs(value);
  if (val >= 10000000)
    return `${(value / 10000000).toFixed(2)?.toLocaleString()} Cr`;
  if (val >= 100000)
    return `${(value / 100000).toFixed(2)?.toLocaleString()} Lac`;
  return value?.toLocaleString();
}

export const amenities = [
  "Gym",
  "Parking",
  "Lift",
  "Club House",
  "Swimming Pool",
  "Security",
  "Cricket Pitch",
  "Badminton",
  "Basket Ball",
  "Gas Pipeline",
  "Manjeera",
];

export const areaTypes = [
  "sqft",
  "sqyards",
  "sqm",
  "sqkm",
  "Acres",
  "Hectares",
];

export const propertyAges = [
  "Less than 1 year",
  "Less than 3 years",
  "Less than 5 years",
  "Less than 10 years",
  "More than 10 years",
];

export const propertyFacings = [
  "North",
  "East",
  "West",
  "South",
  "North-East",
  "South-West",
  "North-West",
  "South-East",
];

export const furnishing = ["Furnished", "Semi-Furnished", "UnFurnished"];
