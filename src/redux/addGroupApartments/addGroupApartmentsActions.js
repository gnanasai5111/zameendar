import axios from "axios";
import { message } from "antd";
import {
  addGroupApartmentsFailure,
  addGroupApartmentsLoading,
  addGroupApartmentsSuccess,
} from "./addGroupApartmentsTypes";

export const addGroupApartments = (data, token, navigate) => (dispatch) => {
  dispatch(addGroupApartmentsLoading());
  axios
    .post("http://64.227.177.77/api/add_group_appartment/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Group Appartments");

      navigate(
        `/add-property/sell/group/group-appartments/${res.data?.property_id}`
      );

      dispatch(addGroupApartmentsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addGroupApartmentsFailure(err.message));
    });
};
