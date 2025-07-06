import axios from "axios";
import { message } from "antd";
import {
  addSingleFlatFailure,
  addSingleFlatLoading,
  addSingleFlatSuccess,
} from "./addSingleFlatTypes";


export const addSingleFlat = (data, token,navigate) => (dispatch) => {
  dispatch(addSingleFlatLoading());
  axios
    .post("http://64.227.177.77/api/add_flat/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Flat");

      navigate(
        `/add-property/sell/single/flat/${res.data?.property_id}`
      );

      dispatch(addSingleFlatSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addSingleFlatFailure(err.message));
    });
};
