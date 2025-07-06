export const ADD_COMMERCIAL_LOADING = "ADD_COMMERCIAL_LOADING";
export const ADD_COMMERCIAL_SUCCESS = "ADD_COMMERCIAL_SUCCESS";
export const ADD_COMMERCIAL_FAILURE = "ADD_COMMERCIAL_FAILURE";

export const addCommercialLoading = () => {
  return {
    type: ADD_COMMERCIAL_LOADING,
    payload: null,
  };
};

export const addCommercialSuccess = (data) => {
  return {
    type: ADD_COMMERCIAL_SUCCESS,
    payload: data,
  };
};

export const addCommercialFailure = (err) => {
  return {
    type: ADD_COMMERCIAL_FAILURE,
    payload: err,
  };
};
