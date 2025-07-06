import axios from "axios";
import { message } from "antd";
import {
  addGroupVillasFailure,
  addGroupVillasLoading,
  addGroupVillasSuccess,
} from "./addGroupVillasTypes";

export const addGroupVillas = (data, token,navigate) => (dispatch) => {
  dispatch(addGroupVillasLoading());
  axios
    .post("http://64.227.177.77/api/add_group_villa/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      dispatch(addGroupVillasSuccess(res.data));
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Group Villas");
      navigate(
        `/add-property/sell/group/group-villas/${res.data?.property_id}`
      );
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addGroupVillasFailure(err.message));
    });
};
