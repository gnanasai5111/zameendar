import axios from "axios";
import { loginFailure, loginLoading, loginSuccess } from "./loginTypes";
import { message } from "antd";
import { authSuccess } from "../authUser/authTypes";

// http://64.227.177.77/rest-auth/login/     - Development login url

export const loginUser = (data, navigate) => (dispatch) => {
  dispatch(loginLoading());
  axios
    .post("http://64.227.177.77/rest-auth/login/", data)
    .then((res) => {
      navigate("/");
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: res.data.key,
          email: res.data.user_type.email,
          firstName: res.data.user_type.first_name,
          lastName: res.data.user_type.last_name,
          isBuyer: res.data.user_type.is_buyer,
          isSeller: res.data.user_type.is_seller,
        })
      );
      dispatch(
        authSuccess({
          token: res.data.key,
          email: res.data.user_type.email,
          firstName: res.data.user_type.first_name,
          lastName: res.data.user_type.last_name,
          isBuyer: res.data.user_type.is_buyer,
          isSeller: res.data.user_type.is_seller,
        })
      );
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      message.error(err?.response?.data?.non_field_errors?.[0]);
      dispatch(loginFailure(err?.response?.data?.non_field_errors?.[0]));
    });
};
