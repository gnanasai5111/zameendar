import axios from "axios";
import { message } from "antd";

import {
  getAllBuildingsFailure,
  getAllBuildingsLoading,
  getAllBuildingsSuccess,
  getAllCommercialFailure,
  getAllCommercialLoading,
  getAllCommercialSuccess,
  getAllFlatsFailure,
  getAllFlatsLoading,
  getAllFlatsSuccess,
  getAllGroupAppartmentsFailure,
  getAllGroupAppartmentsLoading,
  getAllGroupAppartmentsSuccess,
  getAllGroupPlotsFailure,
  getAllGroupPlotsLoading,
  getAllGroupPlotsSuccess,
  getAllGroupVillasFailure,
  getAllGroupVillasLoading,
  getAllGroupVillasSuccess,
  getAllPgFailure,
  getAllPgLoading,
  getAllPgSuccess,
  getAllPlotsFailure,
  getAllPlotsLoading,
  getAllPlotsSuccess,
  getAllRentFailure,
  getAllRentLoading,
  getAllRentSuccess,
  getAllVillasFailure,
  getAllVillasLoading,
  getAllVillasSuccess,
} from "./getBuyerPropertiesTypes";

// GROUP PLOTS
export const getAllBuyerGroupPlots = (token, page) => (dispatch) => {
  dispatch(getAllGroupPlotsLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_group_plot/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllGroupPlotsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllGroupPlotsFailure(err.message));
    });
};
// GROUP APPARTMENTS
export const getAllBuyerGroupAppartments = (token, page) => (dispatch) => {
  dispatch(getAllGroupAppartmentsLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_group_appartments/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllGroupAppartmentsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllGroupAppartmentsFailure(err.message));
    });
};

// GROUP VILLAS
export const getAllBuyerGroupVillas = (token, page) => (dispatch) => {
  dispatch(getAllGroupVillasLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_group_villa/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllGroupVillasSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllGroupVillasFailure(err.message));
    });
};

// FLATS
export const getAllBuyerFlats = (token, page) => (dispatch) => {
  dispatch(getAllFlatsLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_flat/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllFlatsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllFlatsFailure(err.message));
    });
};

// BUILDINGS
export const getAllBuyerBuildings = (token, page) => (dispatch) => {
  dispatch(getAllBuildingsLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_building/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllBuildingsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllBuildingsFailure(err.message));
    });
};

// VILLAS
export const getAllBuyerVillas = (token, page) => (dispatch) => {
  dispatch(getAllVillasLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_villa/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllVillasSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllVillasFailure(err.message));
    });
};

// PLOTS
export const getAllBuyerPlots = (token, page) => (dispatch) => {
  dispatch(getAllPlotsLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_open_plot/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllPlotsSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllPlotsFailure(err.message));
    });
};

// RENT
export const getAllBuyerRent = (token, page) => (dispatch) => {
  dispatch(getAllRentLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_rent/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllRentSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllRentFailure(err.message));
    });
};

// PG
export const getAllBuyerPg = (token, page) => (dispatch) => {
  dispatch(getAllPgLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_pg/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllPgSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllPgFailure(err.message));
    });
};

// COMMERCIAL
export const getAllBuyerCommercial = (token, page) => (dispatch) => {
  dispatch(getAllCommercialLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}api/get_all_commercial/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
      params: {
        page: page,
      },
    })
    .then((res) => {
      dispatch(getAllCommercialSuccess(res.data));
    })
    .catch((err) => {
      message.error(err.message);
      dispatch(getAllCommercialFailure(err.message));
    });
};
