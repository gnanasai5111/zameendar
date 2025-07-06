import axios from "axios";
import { message } from "antd";
import {
  addSingleVillaFailure,
  addSingleVillaLoading,
  addSingleVillaSuccess,
} from "./addSingleVillaTypes";

export const addSingleVilla = (data, token, navigate) => (dispatch) => {
  dispatch(addSingleVillaLoading());
  axios
    .post("http://64.227.177.77/api/add_villa/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Villa");

      navigate(`/add-property/sell/single/villa/${res.data?.property_id}`);
      dispatch(addSingleVillaSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addSingleVillaFailure(err.message));
    });
};
