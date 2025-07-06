import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import PropertyDetails from "../propertyDetails/PropertyDetails";
import { useParams } from "react-router-dom";
import { getSellerListingDetails } from "../../redux/getSellerListingDetails/getSellerListingDetailsActions";
import Slider from "../slider/Slider";

function GalleryRoute() {
  const dispatch = useDispatch();

  const params = useParams();
  const propertyId = params.propertyid;
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (propertyId) {
      dispatch(getSellerListingDetails(propertyId, user?.token));
    }
  }, [propertyId, user?.token]);

  const getSellerListingDetailsReducer = useSelector(
    (state) => state.getSellerListingDetails
  );

  const renderData = () => {
    if (getSellerListingDetailsReducer.loading) {
      return <Loading />;
    } else if (getSellerListingDetailsReducer.success.ok) {
      return (
        <Slider
          imageList={getSellerListingDetailsReducer.success.data?.data?.images?.filter(
            (i) => i.title === "Property Images"
          )}
          title={getSellerListingDetailsReducer.success.data?.data?.project_name}
        />
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default GalleryRoute;
