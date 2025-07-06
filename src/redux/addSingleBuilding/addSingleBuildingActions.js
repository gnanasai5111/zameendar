import axios from "axios";
import { message } from "antd";
import {
  addSingleBuildingFailure,
  addSingleBuildingLoading,
  addSingleBuildingSuccess,
} from "./addSingleBuildingTypes";


export const addSingleBuilding = (data, token,navigate) => (dispatch) => {
  dispatch(addSingleBuildingLoading());
  axios
    .post("http://64.227.177.77/api/add_building/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Building");

      navigate(
        `/add-property/sell/single/building/${res.data?.property_id}`
      );
      dispatch(addSingleBuildingSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addSingleBuildingFailure(err.message));
    });
};
