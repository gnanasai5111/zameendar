export const ADD_GROUP_PLOTS_LOADING = "ADD_GROUP_PLOTS_LOADING";
export const ADD_GROUP_PLOTS_SUCCESS = "ADD_GROUP_PLOTS_SUCCESS";
export const ADD_GROUP_PLOTS_FAILURE = "ADD_GROUP_PLOTS_FAILURE";

export const addGroupPlotsLoading = () => {
  return {
    type: ADD_GROUP_PLOTS_LOADING,
    payload: null,
  };
};

export const addGroupPlotsSuccess = (data) => {
  return {
    type: ADD_GROUP_PLOTS_SUCCESS,
    payload: data,
  };
};

export const addGroupPlotsFailure = (err) => {
  return {
    type: ADD_GROUP_PLOTS_FAILURE,
    payload: err,
  };
};
