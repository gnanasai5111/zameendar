import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerListings } from "../../redux/getSellerListings/getSellerListingsActions";
import Loading from "../loader/Loading";
import SellerListings from "../sellerListings/SellerListings";

function SellerListingsRoute() {
  const dispatch = useDispatch();

  const getSellerListingsReducer = useSelector(
    (state) => state.getSellerListings
  );
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.token) {
      dispatch(getSellerListings(user?.token));
    }
  }, [user?.token]);

  



  const renderData = () => {
    if (getSellerListingsReducer.loading) {
      return <Loading />;
    } else if (getSellerListingsReducer.success.ok) {
      return (
        <SellerListings
          sellerListingsData={getSellerListingsReducer.success.data?.data}
        />
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default SellerListingsRoute;
