import axios from "axios";
import { message } from "antd";
import { sellerSignupFailure, sellerSignupSuccess } from "./sellerSignupTypes";
import { authSuccess } from "../authUser/authTypes";

export const sellerSignup = (data, navigate) => (dispatch) => {
  dispatch(sellerSignupFailure());
  axios
    .post("http://64.227.177.77/api/seller_signup/", data)
    .then((res) => {
      navigate("/");
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: res.data.token,
          email: res.data.user_type.email,
          firstName: res.data.user_type.first_name,
          lastName: res.data.user_type.last_name,
          isBuyer: res.data.user_type.is_buyer,
          isSeller: res.data.user_type.is_seller,
        })
      );
      dispatch(
        authSuccess({
          token: res.data.token,
          email: res.data.user_type.email,
          firstName: res.data.user_type.first_name,
          lastName: res.data.user_type.last_name,
          isBuyer: res.data.user_type.is_buyer,
          isSeller: res.data.user_type.is_seller,
        })
      );
      dispatch(sellerSignupSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(sellerSignupFailure(err.message));
    });
};

export const getSignupOtp = (data, setOtp, form) => {
  axios
    .get("http://64.227.177.77/api/send_signup_sms_otp/", {
      params: {
        phone: data,
      },
    })
    .then((res) => {
      form.setFieldValue("otp", res.data["otp only for testing"]);
      setOtp(res.data["otp only for testing"]);
    })
    .catch((err) => {
      message.error(err.message);
    });
};
