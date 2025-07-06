export const SELLER_SIGNUP_LOADING = "SELLER_SIGNUP_LOADING";
export const SELLER_SIGNUP_SUCCESS = "SELLER_SIGNUP_SUCCESS";
export const SELLER_SIGNUP_FAILURE = "SELLER_SIGNUP_FAILURE";

export const sellerSignupLoading = () => {
  return {
    type: SELLER_SIGNUP_LOADING,
    payload: null,
  };
};

export const sellerSignupSuccess = (data) => {
  return {
    type: SELLER_SIGNUP_SUCCESS,
    payload: data,
  };
};

export const sellerSignupFailure = (err) => {
  return {
    type: SELLER_SIGNUP_FAILURE,
    payload: err,
  };
};
