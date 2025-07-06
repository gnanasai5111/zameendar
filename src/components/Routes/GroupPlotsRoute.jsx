import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import { getAllBuyerGroupPlots } from "../../redux/getBuyerProperties/getBuyerPropertiesActions";
import PropertySlider from "../home/PropertySlider";

function GroupPlotsRoute() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllBuyerGroupPlots(user?.token));
  }, [user?.token]);

  const getBuyerPropertiesReducer = useSelector(
    (state) => state.getBuyerProperties.groupPlots
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
            title="Group Plots"
            id="group-plots"
            type="plot"
          />
        </>
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default GroupPlotsRoute;
