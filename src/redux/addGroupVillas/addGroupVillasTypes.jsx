export const ADD_GROUP_VILLAS_LOADING = "ADD_GROUP_VILLAS_LOADING";
export const ADD_GROUP_VILLAS_SUCCESS = "ADD_GROUP_VILLAS_SUCCESS";
export const ADD_GROUP_VILLAS_FAILURE = "ADD_GROUP_VILLAS_FAILURE";

export const addGroupVillasLoading = () => {
  return {
    type: ADD_GROUP_VILLAS_LOADING,
    payload: null,
  };
};

export const addGroupVillasSuccess = (data) => {
  return {
    type: ADD_GROUP_VILLAS_SUCCESS,
    payload: data,
  };
};

export const addGroupVillasFailure = (err) => {
  return {
    type: ADD_GROUP_VILLAS_FAILURE,
    payload: err,
  };
};
