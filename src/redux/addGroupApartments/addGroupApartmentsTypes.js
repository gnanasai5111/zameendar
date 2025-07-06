export const ADD_GROUP_APARTMENTS_LOADING = "ADD_GROUP_APARTMENTS_LOADING";
export const ADD_GROUP_APARTMENTS_SUCCESS = "ADD_GROUP_APARTMENTS_SUCCESS";
export const ADD_GROUP_APARTMENTS_FAILURE = "ADD_GROUP_APARTMENTS_FAILURE";

export const addGroupApartmentsLoading = () => {
  return {
    type: ADD_GROUP_APARTMENTS_LOADING,
    payload: null,
  };
};

export const addGroupApartmentsSuccess = (data) => {
  return {
    type: ADD_GROUP_APARTMENTS_SUCCESS,
    payload: data,
  };
};

export const addGroupApartmentsFailure = (err) => {
  return {
    type: ADD_GROUP_APARTMENTS_FAILURE,
    payload: err,
  };
};
