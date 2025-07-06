import { authLogout, authSuccess } from "./authTypes";

export const authUserDetails = (data) => (dispatch) => {
  dispatch(authSuccess(data));
};

export const logout = () => (dispatch) => {
  dispatch(authLogout());
};
