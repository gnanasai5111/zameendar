export const GET_SELLER_LISTINGS_LOADING = "GET_SELLER_LISTINGS_LOADING";
export const GET_SELLER_LISTINGS_SUCCESS = "GET_SELLER_LISTINGS_SUCCESS";
export const GET_SELLER_LISTINGS_FAILURE = "GET_SELLER_LISTINGS_FAILURE";

export const getSellerListingsLoading = () => {
  return {
    type: GET_SELLER_LISTINGS_LOADING,
    payload: null,
  };
};

export const getSellerListingsSuccess = (data) => {
  return {
    type: GET_SELLER_LISTINGS_SUCCESS,
    payload: data,
  };
};

export const getSellerListingsFailure = (err) => {
  return {
    type: GET_SELLER_LISTINGS_FAILURE,
    payload: err,
  };
};
