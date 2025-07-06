import axios from "axios";
import { message } from "antd";
import {
  getSellerListingDetailsFailure,
  getSellerListingDetailsLoading,
  getSellerListingDetailsSuccess,
} from "./getSellerListingDetailsTypes";

export const getSellerListingDetails = (propertyId, token) => (dispatch) => {
  dispatch(getSellerListingDetailsLoading());
  axios
    .get("http://64.227.177.77/api/get_seller_property_details/", {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        property_id: propertyId,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(getSellerListingDetailsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getSellerListingDetailsFailure(err.message));
    });
};
