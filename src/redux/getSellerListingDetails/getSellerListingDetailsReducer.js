import {
    GET_SELLER_LISTING_DETAILS_FAILURE,
    GET_SELLER_LISTING_DETAILS_LOADING,
    GET_SELLER_LISTING_DETAILS_SUCCESS,
  } from "./getSellerListingDetailsTypes";
  
  const initialState = {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  };
  
  const getSellerListingDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SELLER_LISTING_DETAILS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_SELLER_LISTING_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: {
            ...state.success,
            ok: true,
            data: action.payload,
          },
        };
      case GET_SELLER_LISTING_DETAILS_FAILURE:
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
  
  export default getSellerListingDetailsReducer;
  