// GROUP APPARTMENTS
export const GET_ALL_GROUP_APPARTMENTS_LOADING =
  "GET_ALL_GROUP_APPARTMENTS_LOADING";
export const GET_ALL_GROUP_APPARTMENTS_SUCCESS =
  "GET_ALL_GROUP_APPARTMENTS_SUCCESS";
export const GET_ALL_GROUP_APPARTMENTS_FAILURE =
  "GET_ALL_GROUP_APPARTMENTS_FAILURE";

export const getAllGroupAppartmentsLoading = () => {
  return {
    type: GET_ALL_GROUP_APPARTMENTS_LOADING,
    payload: null,
  };
};

export const getAllGroupAppartmentsSuccess = (data) => {
  return {
    type: GET_ALL_GROUP_APPARTMENTS_SUCCESS,
    payload: data,
  };
};

export const getAllGroupAppartmentsFailure = (err) => {
  return {
    type: GET_ALL_GROUP_APPARTMENTS_FAILURE,
    payload: err,
  };
};

// GROUP VILLAS
export const GET_ALL_GROUP_VILLAS_LOADING = "GET_ALL_GROUP_VILLAS_LOADING";
export const GET_ALL_GROUP_VILLAS_SUCCESS = "GET_ALL_GROUP_VILLAS_SUCCESS";
export const GET_ALL_GROUP_VILLAS_FAILURE = "GET_ALL_GROUP_VILLAS_FAILURE";

export const getAllGroupVillasLoading = () => {
  return {
    type: GET_ALL_GROUP_VILLAS_LOADING,
    payload: null,
  };
};

export const getAllGroupVillasSuccess = (data) => {
  return {
    type: GET_ALL_GROUP_VILLAS_SUCCESS,
    payload: data,
  };
};

export const getAllGroupVillasFailure = (err) => {
  return {
    type: GET_ALL_GROUP_VILLAS_FAILURE,
    payload: err,
  };
};

// GROUP PLOTS
export const GET_ALL_GROUP_PLOTS_LOADING = "GET_ALL_GROUP_PLOTS_LOADING";
export const GET_ALL_GROUP_PLOTS_SUCCESS = "GET_ALL_GROUP_PLOTS_SUCCESS";
export const GET_ALL_GROUP_PLOTS_FAILURE = "GET_ALL_GROUP_PLOTS_FAILURE";

export const getAllGroupPlotsLoading = () => {
  return {
    type: GET_ALL_GROUP_PLOTS_LOADING,
    payload: null,
  };
};

export const getAllGroupPlotsSuccess = (data) => {
  return {
    type: GET_ALL_GROUP_PLOTS_SUCCESS,
    payload: data,
  };
};

export const getAllGroupPlotsFailure = (err) => {
  return {
    type: GET_ALL_GROUP_PLOTS_FAILURE,
    payload: err,
  };
};

// FLATS
export const GET_ALL_FLATS_LOADING = "GET_ALL_FLATS_LOADING";
export const GET_ALL_FLATS_SUCCESS = "GET_ALL_FLATS_SUCCESS";
export const GET_ALL_FLATS_FAILURE = "GET_ALL_FLATS_FAILURE";

export const getAllFlatsLoading = () => {
  return {
    type: GET_ALL_FLATS_LOADING,
    payload: null,
  };
};

export const getAllFlatsSuccess = (data) => {
  return {
    type: GET_ALL_FLATS_SUCCESS,
    payload: data,
  };
};

export const getAllFlatsFailure = (err) => {
  return {
    type: GET_ALL_FLATS_FAILURE,
    payload: err,
  };
};

// BUILDING
export const GET_ALL_BUILIDNGS_LOADING = "GET_ALL_BUILIDNGS_LOADING";
export const GET_ALL_BUILIDNGS_SUCCESS = "GET_ALL_BUILIDNGS_SUCCESS";
export const GET_ALL_BUILIDNGS_FAILURE = "GET_ALL_BUILIDNGS_FAILURE";

export const getAllBuildingsLoading = () => {
  return {
    type: GET_ALL_BUILIDNGS_LOADING,
    payload: null,
  };
};

export const getAllBuildingsSuccess = (data) => {
  return {
    type: GET_ALL_BUILIDNGS_SUCCESS,
    payload: data,
  };
};

export const getAllBuildingsFailure = (err) => {
  return {
    type: GET_ALL_BUILIDNGS_FAILURE,
    payload: err,
  };
};

// VILLAS
export const GET_ALL_VILLAS_LOADING = "GET_ALL_VILLAS_LOADING";
export const GET_ALL_VILLAS_SUCCESS = "GET_ALL_VILLAS_SUCCESS";
export const GET_ALL_VILLAS_FAILURE = "GET_ALL_VILLAS_FAILURE";

export const getAllVillasLoading = () => {
  return {
    type: GET_ALL_VILLAS_LOADING,
    payload: null,
  };
};

export const getAllVillasSuccess = (data) => {
  return {
    type: GET_ALL_VILLAS_SUCCESS,
    payload: data,
  };
};

export const getAllVillasFailure = (err) => {
  return {
    type: GET_ALL_VILLAS_FAILURE,
    payload: err,
  };
};

// PLOTS
export const GET_ALL_PLOTS_LOADING = "GET_ALL_PLOTS_LOADING";
export const GET_ALL_PLOTS_SUCCESS = "GET_ALL_PLOTS_SUCCESS";
export const GET_ALL_PLOTS_FAILURE = "GET_ALL_PLOTS_FAILURE";

export const getAllPlotsLoading = () => {
  return {
    type: GET_ALL_PLOTS_LOADING,
    payload: null,
  };
};

export const getAllPlotsSuccess = (data) => {
  return {
    type: GET_ALL_PLOTS_SUCCESS,
    payload: data,
  };
};

export const getAllPlotsFailure = (err) => {
  return {
    type: GET_ALL_PLOTS_FAILURE,
    payload: err,
  };
};

// RENT
export const GET_ALL_RENT_LOADING = "GET_ALL_RENT_LOADING";
export const GET_ALL_RENT_SUCCESS = "GET_ALL_RENT_SUCCESS";
export const GET_ALL_RENT_FAILURE = "GET_ALL_RENT_FAILURE";

export const getAllRentLoading = () => {
  return {
    type: GET_ALL_RENT_LOADING,
    payload: null,
  };
};

export const getAllRentSuccess = (data) => {
  return {
    type: GET_ALL_RENT_SUCCESS,
    payload: data,
  };
};

export const getAllRentFailure = (err) => {
  return {
    type: GET_ALL_RENT_FAILURE,
    payload: err,
  };
};

// PG
export const GET_ALL_PG_LOADING = "GET_ALL_PG_LOADING";
export const GET_ALL_PG_SUCCESS = "GET_ALL_PG_SUCCESS";
export const GET_ALL_PG_FAILURE = "GET_ALL_PG_FAILURE";

export const getAllPgLoading = () => {
  return {
    type: GET_ALL_PG_LOADING,
    payload: null,
  };
};

export const getAllPgSuccess = (data) => {
  return {
    type: GET_ALL_PG_SUCCESS,
    payload: data,
  };
};

export const getAllPgFailure = (err) => {
  return {
    type: GET_ALL_PG_FAILURE,
    payload: err,
  };
};

// COMMERCIAL
export const GET_ALL_COMMERCIAL_LOADING = "GET_ALL_COMMERCIAL_LOADING";
export const GET_ALL_COMMERCIAL_SUCCESS = "GET_ALL_COMMERCIAL_SUCCESS";
export const GET_ALL_COMMERCIAL_FAILURE = "GET_ALL_COMMERCIAL_FAILURE";

export const getAllCommercialLoading = () => {
  return {
    type: GET_ALL_COMMERCIAL_LOADING,
    payload: null,
  };
};

export const getAllCommercialSuccess = (data) => {
  return {
    type: GET_ALL_COMMERCIAL_SUCCESS,
    payload: data,
  };
};

export const getAllCommercialFailure = (err) => {
  return {
    type: GET_ALL_COMMERCIAL_FAILURE,
    payload: err,
  };
};
