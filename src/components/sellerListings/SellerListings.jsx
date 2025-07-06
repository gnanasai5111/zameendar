import React, { useEffect, useState } from "react";
import SellerListingsTabs from "./SellerListingsTabs";
import { Empty } from "antd";
import { BsFillBuildingsFill, BsPersonWorkspace } from "react-icons/bs";
import { GiVillage } from "react-icons/gi";
import { TfiLayoutGrid3, TfiLayoutSidebarNone } from "react-icons/tfi";
import { BiBuilding, BiHomeSmile } from "react-icons/bi";
import "./seller-listings.less";
import GroupSellerListCard from "./GroupSellerListCard";
import SingleSellerListCard from "./SingleSellerListCard";
import RentListingCard from "./RentListingCard";
import PgListingCard from "./PgListingCard";
import CommercialListingCard from "./CommercialListingCard";

let tabs = [
  { name: "All" },
  {
    name: "Residential",
    respectiveValues: ["Sell", "Rent", "PG"],
    Sell: [
      { name: "Group Appartment", icon: <BsFillBuildingsFill /> },
      { name: "Group Villa", icon: <GiVillage /> },
      { name: "Group Plot", icon: <TfiLayoutGrid3 /> },
      { name: "Flat", icon: <BiBuilding /> },
      { name: "Villa", icon: <BiHomeSmile /> },
      { name: "Building", icon: <BiBuilding /> },
      { name: "Open Plot", icon: <TfiLayoutSidebarNone /> },
    ],
    Rent: [
      { name: "Flat", icon: <BiBuilding /> },
      { name: "Villa", icon: <BiHomeSmile /> },
      { name: "Building", icon: <BiBuilding /> },
    ],
    PG: [],
  },
  {
    name: "Commercial",
    respectiveValues: ["Sell", "Rent"],
    Sell: [
      { name: "Co-Working", icon: <BsPersonWorkspace /> },
      { name: "Ready to Move in", icon: <BsPersonWorkspace /> },
      { name: "Located in Mall", icon: <BsPersonWorkspace /> },
      { name: "Located in Commercial Project", icon: <BsPersonWorkspace /> },
      { name: "Residential Project", icon: <BsPersonWorkspace /> },
      { name: "Retail complex/building", icon: <BsPersonWorkspace /> },
      { name: "Commercial Land", icon: <BsPersonWorkspace /> },
      { name: "Industrial Land", icon: <BsPersonWorkspace /> },
      { name: "Agriculture Land", icon: <BsPersonWorkspace /> },
      { name: "Cold Storage", icon: <BsPersonWorkspace /> },
      { name: "Warehouse", icon: <BsPersonWorkspace /> },
      { name: "Other", icon: <BsPersonWorkspace /> },
    ],
    Rent: [
      { name: "Co-Working", icon: <BsPersonWorkspace /> },
      { name: "Ready to Move in", icon: <BsPersonWorkspace /> },
      { name: "Located in Mall", icon: <BsPersonWorkspace /> },
      { name: "Located in Commercial Project", icon: <BsPersonWorkspace /> },
      { name: "Residential Project", icon: <BsPersonWorkspace /> },
      { name: "Retail complex/building", icon: <BsPersonWorkspace /> },
      { name: "Commercial Land", icon: <BsPersonWorkspace /> },
      { name: "Industrial Land", icon: <BsPersonWorkspace /> },
      { name: "Agriculture Land", icon: <BsPersonWorkspace /> },
      { name: "Cold Storage", icon: <BsPersonWorkspace /> },
      { name: "Warehouse", icon: <BsPersonWorkspace /> },
      { name: "Other", icon: <BsPersonWorkspace /> },
    ],
  },
];

function SellerListings({ sellerListingsData }) {
  const [listings, setListings] = useState(sellerListingsData);
  const [searchElement, setSearchElement] = useState("");
  const [activeData, setActiveData] = useState({
    activeTab: "All",
    activeType: "",
    activeProperty: "",
  });

  useEffect(() => {
    setListings(sellerListingsData);
  }, [sellerListingsData]);

  // Filter and search logic
  const filterListings = () => {
    return sellerListingsData.filter((listing) => {
      const projectNameMatch =
        listing.project_name
          ?.toLowerCase()
          ?.includes(searchElement?.toLowerCase()) || searchElement === "";

      if (activeData.activeTab === "All") {
        return projectNameMatch;
      }

      if (activeData.activeTab === "Commercial") {
        const typeMatch = listing.property_type === "Commercial";
        const commercialTypeMatch =
          listing.commercial_type === activeData.activeType;
        const propertyMatch =
          activeData.activeProperty === "" ||
          activeData?.activeProperty
            ?.toLowerCase()
            .includes(listing.commerical_category?.slice(0, 4)?.toLowerCase());

        return (
          projectNameMatch && typeMatch && commercialTypeMatch && propertyMatch
        );
      }

      if (activeData.activeType === "Rent") {
        return (
          listing.property_type === "Rent" &&
          listing.rent_type === activeData.activeProperty &&
          projectNameMatch
        );
      }

      if (activeData.activeType === "PG") {
        return listing.property_type === "PG" && projectNameMatch;
      }

      return (
        listing.property_type !== "Commercial" &&
        listing.property_type === activeData.activeProperty &&
        projectNameMatch
      );
    });
  };

  // Apply the filter function whenever activeData or searchElement changes
  useEffect(() => {
    const filteredListings = filterListings();
    setListings(filteredListings);
  }, [activeData, searchElement]);

  return (
    <div className="seller-listings">
      <SellerListingsTabs
        tabs={tabs}
        activeData={activeData}
        setActiveData={setActiveData}
        searchElement={searchElement}
        setSearchElement={setSearchElement}
      />
      <div className="seller-data">
        {listings?.length === 0 && (
          <div className="empty-container">
            <Empty description="No Listings Found!" />
          </div>
        )}
        <div className="listings-container">
          {listings?.map((item) => {
            if (
              item.property_type === "Group Appartment" ||
              item.property_type === "Group Plot" ||
              item.property_type === "Group Villa"
            ) {
              return <GroupSellerListCard item={item} />;
            } else if (
              item.property_type === "Flat" ||
              item.property_type === "Building" ||
              item.property_type === "Villa" ||
              item.property_type === "Open Plot"
            ) {
              return <SingleSellerListCard item={item} />;
            } else if (item.property_type === "Rent") {
              return <RentListingCard item={item} />;
            } else if (item.property_type === "PG") {
              return <PgListingCard item={item} />;
            } else if (item.property_type === "Commercial") {
              return <CommercialListingCard item={item} />;
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default SellerListings;
