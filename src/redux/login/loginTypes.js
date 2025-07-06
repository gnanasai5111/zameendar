export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
    payload: null,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};
