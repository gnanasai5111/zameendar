export const ADD_SINGLE_VILLA_LOADING = "ADD_SINGLE_VILLA_LOADING";
export const ADD_SINGLE_VILLA_SUCCESS = "ADD_SINGLE_VILLA_SUCCESS";
export const ADD_SINGLE_VILLA_FAILURE = "ADD_SINGLE_VILLA_FAILURE";

export const addSingleVillaLoading = () => {
  return {
    type: ADD_SINGLE_VILLA_LOADING,
    payload: null,
  };
};

export const addSingleVillaSuccess = (data) => {
  return {
    type: ADD_SINGLE_VILLA_SUCCESS,
    payload: data,
  };
};

export const addSingleVillaFailure = (err) => {
  return {
    type: ADD_SINGLE_VILLA_FAILURE,
    payload: err,
  };
};
