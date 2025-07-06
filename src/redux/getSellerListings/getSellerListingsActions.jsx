import axios from "axios";
import { message } from "antd";
import {
  getSellerListingsFailure,
  getSellerListingsLoading,
  getSellerListingsSuccess,
} from "./getSellerListingsTypes";

export const getSellerListings = (token) => (dispatch) => {
  console.log("token", token);
  dispatch(getSellerListingsLoading());
  axios
    .get("http://64.227.177.77/api/get_seller_properties/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(getSellerListingsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getSellerListingsFailure(err.message));
    });
};




