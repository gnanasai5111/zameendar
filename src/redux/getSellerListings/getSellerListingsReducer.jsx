import {
    GET_SELLER_LISTINGS_FAILURE,
    GET_SELLER_LISTINGS_LOADING,
    GET_SELLER_LISTINGS_SUCCESS,
  } from "./getSellerListingsTypes";
  
  const initialState = {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  };
  
  const getSellerListingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SELLER_LISTINGS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_SELLER_LISTINGS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: {
            ...state.success,
            ok: true,
            data: action.payload,
          },
        };
      case GET_SELLER_LISTINGS_FAILURE:
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
  
  export default getSellerListingsReducer;
  