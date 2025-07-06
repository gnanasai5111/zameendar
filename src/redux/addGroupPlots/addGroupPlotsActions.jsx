import axios from "axios";
import { message } from "antd";
import {
  addGroupPlotsFailure,
  addGroupPlotsLoading,
  addGroupPlotsSuccess,
} from "./addGroupPlotsTypes";


export const addGroupPlots = (data, token,navigate) => (dispatch) => {
  dispatch(addGroupPlotsLoading());
  axios
    .post("http://64.227.177.77/api/add_group_plot/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      dispatch(addGroupPlotsSuccess(res.data));
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Group Plots");
      navigate(
        `/add-property/sell/group/group-plots/${res.data?.property_id}`
      );
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addGroupPlotsFailure(err.message));
    });
};
