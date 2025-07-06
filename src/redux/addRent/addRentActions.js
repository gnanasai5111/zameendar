import axios from "axios";
import { message } from "antd";
import { addRentFailure, addRentLoading, addRentSuccess } from "./addRentTypes";

export const addRent = (data, token, navigate, type) => (dispatch) => {
  dispatch(addRentLoading());
  axios
    .post("http://64.227.177.77/api/add_rent/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem(
        "property_type",
        "Rent " + type?.charAt(0).toUpperCase() + type?.slice(1)
      );

      navigate(`/add-property/rent/${type}/${res.data?.property_id}`);
      dispatch(addRentSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addRentFailure(err.message));
    });
};
