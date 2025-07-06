import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loader/Loading";
import { getAllBuyerGroupAppartments } from "../../redux/getBuyerProperties/getBuyerPropertiesActions";
import PropertySlider from "../home/PropertySlider";
import BuyerProperties from "../buyProperties/BuyerProperties";

function GroupAppartmentsRoute({ detailPage, city, setTotalItems }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [loadingMore, setLoadingMore] = useState(false);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (user?.token) {
      dispatch(getAllBuyerGroupAppartments(user?.token, currentPage));
    }
  }, [user?.token, currentPage]);

  const getBuyerPropertiesReducer = useSelector(
    (state) => state.getBuyerProperties.groupAppartments
  );

  useEffect(() => {
    if (getBuyerPropertiesReducer.success.data) {
      if (detailPage) {
        setTotalItems(getBuyerPropertiesReducer.success.data?.total_items);
      }
      if (currentPage === 1) {
        // When the first page is loaded, set the data
        setAllData(getBuyerPropertiesReducer.success.data?.data);
      } else {
        // When loading more pages, concatenate the data
        setAllData([
          // ...allData,
          ...getBuyerPropertiesReducer.success.data?.data,
        ]);
      }
    }
  }, [getBuyerPropertiesReducer.success.data, currentPage]);

  const handleLoadMore = () => {
    if (!loadingMore && getBuyerPropertiesReducer.success.data?.next_page) {
      setLoadingMore(true);
      setCurrentPage(currentPage + 1); // Increment the page number
    }
  };

  const renderData = () => {
    if (getBuyerPropertiesReducer.loading) {
      return <Loading isSmall />;
    } else if (getBuyerPropertiesReducer.success.ok) {
      if (detailPage) {
        return (
          <BuyerProperties
            city={city}
            data={allData}
            nextPage={getBuyerPropertiesReducer.success.data?.next_page}
            title="Group Appartments"
            id="group-appartments"
            type="group"
            onLoadMore={handleLoadMore}
          />
        );
      }
      return (
        <>
          <PropertySlider
            data={getBuyerPropertiesReducer.success.data?.data}
            title="Group Appartments"
            id="group-appartments"

            type="group"
          />
        </>
      );
    } else {
    }
  };
  return <div className="route-wrapper">{renderData()}</div>;
}

export default GroupAppartmentsRoute;
