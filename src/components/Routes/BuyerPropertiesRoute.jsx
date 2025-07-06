import React, { useState } from "react";
import { useParams } from "react-router-dom";

import GroupAppartmentsRoute from "./GroupAppartmentsRoute";
import GroupVillasRoute from "./GroupVillasRoute";
import CommercialRoute from "./CommercialRoute";
import PgRoute from "./PgRoute";
import RentRoute from "./RentRoute";
import PlotsRoute from "./PlotsRoute";
import FlatsRoute from "./FlatsRoute";
import VillasRoute from "./VillasRoute";
import BuildingsRoute from "./BuildingsRoute";
import GroupPlotsRoute from "./GroupPlotsRoute";
import { Select } from "antd";
import FilterProperties from "../FilterProperties/FilterProperties";
import FilterPropertiesMobile from "../FilterProperties/FilterPropertiesMobile";
import PropertySideBar from "../propertySideBar/PropertySideBar";
import "./../buyProperties/properties.less";
const { Option } = Select;

const routeComponents = {
  "group-appartments": GroupAppartmentsRoute,
  "group-villas": GroupVillasRoute,
  "group-plots": GroupPlotsRoute,
  flats: FlatsRoute,
  villas: VillasRoute,
  buildings: BuildingsRoute,
  plots: PlotsRoute,
  "rent-properties": RentRoute,
  "pg-properties": PgRoute,
  "commercial-properties": CommercialRoute,
};

function BuyerPropertiesRoute() {
  const { category, city } = useParams();
  const [totalItems, setTotalItems] = useState(0);

  const SelectedComponent = routeComponents[category];

  if (SelectedComponent) {
    return (
      <div className="listing-wrapper">
        <div className="desktop-filter">
          <FilterProperties />
        </div>
        <div className="mobile-filter">
          <FilterPropertiesMobile />
        </div>
        <div className="listings">
          <PropertySideBar />
          <div className="listings-container">
            <div className="sort-box">
              <div>
                <h6>Showing {totalItems} results</h6>
                <p>Properties in {city}</p>
              </div>
              <Select placeholder="Sort">
                <Option value="Price(A)">Price(Asc)</Option>
                <Option value="Price(D)">Price(Dsc)</Option>
                <Option value="date">Date</Option>
              </Select>
            </div>
            <SelectedComponent
              detailPage
              city={city}
              setTotalItems={setTotalItems}
            />
            ;
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default BuyerPropertiesRoute;
