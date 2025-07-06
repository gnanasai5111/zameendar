import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import { getAllBuyerRent } from "../../redux/getBuyerProperties/getBuyerPropertiesActions";
import PropertySlider from "../home/PropertySlider";

function RentRoute() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllBuyerRent(user?.token));
  }, [user?.token]);

  const getBuyerPropertiesReducer = useSelector(
    (state) => state.getBuyerProperties.rent
  );

  console.log(getBuyerPropertiesReducer);
  const renderData = () => {
    if (getBuyerPropertiesReducer.loading) {
      return <Loading />;
    } else if (getBuyerPropertiesReducer.success.ok) {
      return (
        <>
          <PropertySlider
            data={getBuyerPropertiesReducer.success.data?.data}
            title="Rent"
            id="rent"
            type="rent"
          />
        </>
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default RentRoute;
