import { AUTH_LOGOUT, AUTH_SUCCESS } from "./authTypes";

const initialState = {
  token: null,
  email: "",
  firstName: "",
  lastName: "",
  isBuyer: false,
  isSeller: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isBuyer: action.payload.isBuyer,
        isSeller: action.payload.isSeller,
      };
    case AUTH_LOGOUT:
      return {
        token: null,
        email: "",
        firstName: "",
        lastName: "",
        isBuyer: false,
        isSeller: false,
      };
    default:
      return state;
  }
};

export default authReducer;
