export const ADD_RENT_LOADING = "ADD_RENT_LOADING";
export const ADD_RENT_SUCCESS = "ADD_RENT_SUCCESS";
export const ADD_RENT_FAILURE = "ADD_RENT_FAILURE";

export const addRentLoading = () => {
  return {
    type: ADD_RENT_LOADING,
    payload: null,
  };
};

export const addRentSuccess = (data) => {
  return {
    type: ADD_RENT_SUCCESS,
    payload: data,
  };
};

export const addRentFailure = (err) => {
  return {
    type: ADD_RENT_FAILURE,
    payload: err,
  };
};
