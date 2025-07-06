export const ADD_SINGLE_BUILDING_LOADING = "ADD_SINGLE_BUILDING_LOADING";
export const ADD_SINGLE_BUILDING_SUCCESS = "ADD_SINGLE_BUILDING_SUCCESS";
export const ADD_SINGLE_BUILDING_FAILURE = "ADD_SINGLE_BUILDING_FAILURE";

export const addSingleBuildingLoading = () => {
  return {
    type: ADD_SINGLE_BUILDING_LOADING,
    payload: null,
  };
};

export const addSingleBuildingSuccess = (data) => {
  return {
    type: ADD_SINGLE_BUILDING_SUCCESS,
    payload: data,
  };
};

export const addSingleBuildingFailure = (err) => {
  return {
    type: ADD_SINGLE_BUILDING_FAILURE,
    payload: err,
  };
};
