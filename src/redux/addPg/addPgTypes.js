export const ADD_PG_LOADING = "ADD_PG_LOADING";
export const ADD_PG_SUCCESS = "ADD_PG_SUCCESS";
export const ADD_PG_FAILURE = "ADD_PG_FAILURE";

export const addPgLoading = () => {
  return {
    type: ADD_PG_LOADING,
    payload: null,
  };
};

export const addPgSuccess = (data) => {
  return {
    type: ADD_PG_SUCCESS,
    payload: data,
  };
};

export const addPgFailure = (err) => {
  return {
    type: ADD_PG_FAILURE,
    payload: err,
  };
};
