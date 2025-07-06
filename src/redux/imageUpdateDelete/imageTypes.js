export const UPDATE_IMAGE_LOADING = "UPDATE_IMAGE_LOADING";
export const UPDATE_IMAGE_SUCCESS = "UPDATE_IMAGE_SUCCESS";
export const UPDATE_IMAGE_FAILURE = "UPDATE_IMAGE_FAILURE";

export const DELETE_IMAGE_LOADING = "DELETE_IMAGE_LOADING";
export const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
export const DELETE_IMAGE_FAILURE = "DELETE_IMAGE_FAILURE";

export const updateImageLoading = () => {
  return {
    type: UPDATE_IMAGE_LOADING,
    payload: null,
  };
};

export const updateImageSuccess = (data) => {
  return {
    type: UPDATE_IMAGE_SUCCESS,
    payload: data,
  };
};

export const updateImageFailure = (err) => {
  return {
    type: UPDATE_IMAGE_FAILURE,
    payload: err,
  };
};

export const deleteImageLoading = () => {
  return {
    type: DELETE_IMAGE_LOADING,
    payload: null,
  };
};

export const deleteImageSuccess = (data) => {
  return {
    type: DELETE_IMAGE_SUCCESS,
    payload: data,
  };
};

export const deleteImageFailure = (err) => {
  return {
    type: DELETE_IMAGE_FAILURE,
    payload: err,
  };
};
