import axios from "axios";
import { message } from "antd";
import {
  addCommercialFailure,
  addCommercialLoading,
  addCommercialSuccess,
} from "./addCommercialTypes";

export const addCommercial =
  (data, token, navigate, type, saleType) => (dispatch) => {
    dispatch(addCommercialLoading());
    axios
      .post("http://64.227.177.77/api/add_commercial/", data, {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((res) => {
        localStorage.setItem("property_id", res.data?.property_id);
        localStorage.setItem("property_type", type);
        localStorage.setItem("commercial_type", saleType);

        navigate(
          `/add-property/${saleType}/commercial/${type}/${res.data?.property_id}`
        );

        dispatch(addCommercialSuccess(res.data));
      })
      .catch((err) => {
        message.error(err.message);
        dispatch(addCommercialFailure(err.message));
      });
  };
