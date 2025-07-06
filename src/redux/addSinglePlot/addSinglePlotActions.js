import axios from "axios";
import { message } from "antd";
import {
  addSinglePlotFailure,
  addSinglePlotLoading,
  addSinglePlotSuccess,
} from "./addSinglePlotTypes";

export const addSinglePlot = (data, token, navigate) => (dispatch) => {
  dispatch(addSinglePlotLoading());
  axios
    .post("http://64.227.177.77/api/add_open_plot/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Plot");

      navigate(`/add-property/sell/single/plot/${res.data?.property_id}`);
      dispatch(addSinglePlotSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addSinglePlotFailure(err.message));
    });
};
