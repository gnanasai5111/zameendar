export const ADD_SINGLE_PLOT_LOADING = "ADD_SINGLE_PLOT_LOADING";
export const ADD_SINGLE_PLOT_SUCCESS = "ADD_SINGLE_PLOT_SUCCESS";
export const ADD_SINGLE_PLOT_FAILURE = "ADD_SINGLE_PLOT_FAILURE";

export const addSinglePlotLoading = () => {
  return {
    type: ADD_SINGLE_PLOT_LOADING,
    payload: null,
  };
};

export const addSinglePlotSuccess = (data) => {
  return {
    type: ADD_SINGLE_PLOT_SUCCESS,
    payload: data,
  };
};

export const addSinglePlotFailure = (err) => {
  return {
    type: ADD_SINGLE_PLOT_FAILURE,
    payload: err,
  };
};
