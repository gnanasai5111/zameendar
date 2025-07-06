import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import { getAllBuyerFlats } from "../../redux/getBuyerProperties/getBuyerPropertiesActions";

function FlatsRoute() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllBuyerFlats(user?.token));
  }, [user?.token]);

  const getBuyerPropertiesReducer = useSelector(
    (state) => state.getBuyerProperties.flats
  );

  console.log(getBuyerPropertiesReducer);
  const renderData = () => {
    if (getBuyerPropertiesReducer.loading) {
      return <Loading />;
    } else if (getBuyerPropertiesReducer.success.ok) {
      <></>;
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default FlatsRoute;
