import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./loginTypes";

const initialState = {
  loading: false,
  success: { ok: false, data: null },
  failure: { error: false, message: "" },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: {
          ...state.success,
          ok: true,
          data: action.payload,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: {
          ...state.success,
          ok: false,
          data: null,
        },
        failure: { ...state.failure, error: true, message: action.payload },
      };
    default:
      return initialState;
  }
};

export default loginReducer;
