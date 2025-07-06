import {
  SELLER_SIGNUP_FAILURE,
  SELLER_SIGNUP_LOADING,
  SELLER_SIGNUP_SUCCESS,
} from "./sellerSignupTypes";

const initialState = {
  loading: false,
  success: { ok: false, data: null },
  failure: { error: false, message: "" },
};

const sellerSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SELLER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: {
          ...state.success,
          ok: true,
          data: action.payload,
        },
      };
    case SELLER_SIGNUP_FAILURE:
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

export default sellerSignupReducer;
