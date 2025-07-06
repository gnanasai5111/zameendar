export const ADD_SINGLE_FLAT_LOADING = "ADD_SINGLE_FLAT_LOADING";
export const ADD_SINGLE_FLAT_SUCCESS = "ADD_SINGLE_FLAT_SUCCESS";
export const ADD_SINGLE_FLAT_FAILURE = "ADD_SINGLE_FLAT_FAILURE";

export const addSingleFlatLoading = () => {
  return {
    type: ADD_SINGLE_FLAT_LOADING,
    payload: null,
  };
};

export const addSingleFlatSuccess = (data) => {
  return {
    type: ADD_SINGLE_FLAT_SUCCESS,
    payload: data,
  };
};

export const addSingleFlatFailure = (err) => {
  return {
    type: ADD_SINGLE_FLAT_FAILURE,
    payload: err,
  };
};
