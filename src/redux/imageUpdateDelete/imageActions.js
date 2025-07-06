import axios from "axios";
import { message } from "antd";
import {
  deleteImageFailure,
  deleteImageLoading,
  deleteImageSuccess,
  updateImageFailure,
  updateImageLoading,
  updateImageSuccess,
} from "./imageTypes";

export const updateImage = (token, data) => (dispatch) => {
  console.log("token", token);
  dispatch(updateImageLoading());
  axios
    .post("http://64.227.177.77/api/update_property_image/", data, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      dispatch(updateImageSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(updateImageFailure(err.message));
    });
};

export const deleteImage = (token, data) => (dispatch) => {
  console.log("token", token);
  dispatch(deleteImageLoading());
  axios
    .post("http://64.227.177.77/api/delete_property_image/", data, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      dispatch(deleteImageSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(deleteImageFailure(err.message));
    });
};
