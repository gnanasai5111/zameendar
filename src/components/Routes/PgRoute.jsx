import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import { getAllBuyerPg } from "../../redux/getBuyerProperties/getBuyerPropertiesActions";
import PropertySlider from "../home/PropertySlider";

function PgRoute() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllBuyerPg(user?.token));
  }, [user?.token]);

  const getBuyerPropertiesReducer = useSelector(
    (state) => state.getBuyerProperties.pg
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
            title="PG/Co-Living"
            id="pg"
            type="pg"
          />
        </>
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default PgRoute;
