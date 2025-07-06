import axios from "axios";
import { message } from "antd";
import { addPgFailure, addPgLoading, addPgSuccess } from "./addPgTypes";

export const addPg = (data, token, navigate) => (dispatch) => {
  dispatch(addPgLoading());
  axios
    .post("http://64.227.177.77/api/add_pg/", data, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((res) => {
      localStorage.setItem("property_id", res.data?.property_id);
      localStorage.setItem("property_type", "Pg");

      navigate(`/add-property/pg/${res.data?.property_id}`);

      dispatch(addPgSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(addPgFailure(err.message));
    });
};
