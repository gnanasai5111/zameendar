export const GET_SELLER_LISTING_DETAILS_LOADING = "GET_SELLER_LISTING_DETAILS_LOADING";
export const GET_SELLER_LISTING_DETAILS_SUCCESS = "GET_SELLER_LISTING_DETAILS_SUCCESS";
export const GET_SELLER_LISTING_DETAILS_FAILURE = "GET_SELLER_LISTING_DETAILS_FAILURE";

export const getSellerListingDetailsLoading = () => {
  return {
    type: GET_SELLER_LISTING_DETAILS_LOADING,
    payload: null,
  };
};

export const getSellerListingDetailsSuccess = (data) => {
  return {
    type: GET_SELLER_LISTING_DETAILS_SUCCESS,
    payload: data,
  };
};

export const getSellerListingDetailsFailure = (err) => {
  return {
    type: GET_SELLER_LISTING_DETAILS_FAILURE,
    payload: err,
  };
};