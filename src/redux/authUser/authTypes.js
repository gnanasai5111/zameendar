export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
    payload: null,
  };
};
