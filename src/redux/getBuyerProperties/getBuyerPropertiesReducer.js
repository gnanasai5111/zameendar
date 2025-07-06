import {
  GET_ALL_BUILIDNGS_FAILURE,
  GET_ALL_BUILIDNGS_LOADING,
  GET_ALL_BUILIDNGS_SUCCESS,
  GET_ALL_COMMERCIAL_FAILURE,
  GET_ALL_COMMERCIAL_LOADING,
  GET_ALL_COMMERCIAL_SUCCESS,
  GET_ALL_FLATS_FAILURE,
  GET_ALL_FLATS_LOADING,
  GET_ALL_FLATS_SUCCESS,
  GET_ALL_GROUP_APPARTMENTS_FAILURE,
  GET_ALL_GROUP_APPARTMENTS_LOADING,
  GET_ALL_GROUP_APPARTMENTS_SUCCESS,
  GET_ALL_GROUP_PLOTS_FAILURE,
  GET_ALL_GROUP_PLOTS_LOADING,
  GET_ALL_GROUP_PLOTS_SUCCESS,
  GET_ALL_GROUP_VILLAS_FAILURE,
  GET_ALL_GROUP_VILLAS_LOADING,
  GET_ALL_GROUP_VILLAS_SUCCESS,
  GET_ALL_PG_FAILURE,
  GET_ALL_PG_LOADING,
  GET_ALL_PG_SUCCESS,
  GET_ALL_PLOTS_FAILURE,
  GET_ALL_PLOTS_LOADING,
  GET_ALL_PLOTS_SUCCESS,
  GET_ALL_RENT_FAILURE,
  GET_ALL_RENT_LOADING,
  GET_ALL_RENT_SUCCESS,
  GET_ALL_VILLAS_FAILURE,
  GET_ALL_VILLAS_LOADING,
  GET_ALL_VILLAS_SUCCESS,
} from "./getBuyerPropertiesTypes";

const initialState = {
  groupAppartments: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  groupVillas: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  groupPlots: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  villas: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  flats: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  buildings: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  plots: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  rent: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  pg: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
  commercial: {
    loading: false,
    success: { ok: false, data: null },
    failure: { error: false, message: "" },
  },
};

const getBuyerPropertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // GROUP APPARTMENTS
    case GET_ALL_GROUP_APPARTMENTS_LOADING:
      return {
        ...state,
        groupAppartments: {
          ...state.groupAppartments,
          loading: true,
        },
      };
    case GET_ALL_GROUP_APPARTMENTS_SUCCESS:
      return {
        ...state,
        groupAppartments: {
          ...state.groupAppartments,
          loading: false,
          success: {
            ...state.groupAppartments.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_GROUP_APPARTMENTS_FAILURE:
      return {
        ...state,
        groupAppartments: {
          ...state.groupAppartments,
          loading: false,
          success: {
            ...state.groupAppartments.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.groupAppartments.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // GROUP VILLAS
    case GET_ALL_GROUP_VILLAS_LOADING:
      return {
        ...state,
        groupVillas: {
          ...state.groupVillas,
          loading: true,
        },
      };
    case GET_ALL_GROUP_VILLAS_SUCCESS:
      return {
        ...state,
        groupVillas: {
          ...state.groupVillas,
          loading: false,
          success: {
            ...state.groupVillas.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_GROUP_VILLAS_FAILURE:
      return {
        ...state,
        groupVillas: {
          ...state.groupVillas,
          loading: false,
          success: {
            ...state.groupVillas.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.groupVillas.failure,
            error: true,
            message: action.payload,
          },
        },
      };

    // GROUP PLOTS
    case GET_ALL_GROUP_PLOTS_LOADING:
      return {
        ...state,
        groupPlots: {
          ...state.groupPlots,
          loading: true,
        },
      };
    case GET_ALL_GROUP_PLOTS_SUCCESS:
      return {
        ...state,
        groupPlots: {
          ...state.groupPlots,
          loading: false,
          success: {
            ...state.groupPlots.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_GROUP_PLOTS_FAILURE:
      return {
        ...state,
        groupPlots: {
          ...state.groupPlots,
          loading: false,
          success: {
            ...state.groupPlots.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.groupPlots.failure,
            error: true,
            message: action.payload,
          },
        },
      };

    // FLATS
    case GET_ALL_FLATS_LOADING:
      return {
        ...state,
        flats: {
          ...state.flats,
          loading: true,
        },
      };
    case GET_ALL_FLATS_SUCCESS:
      return {
        ...state,
        flats: {
          ...state.flats,
          loading: false,
          success: {
            ...state.flats.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_FLATS_FAILURE:
      return {
        ...state,
        flats: {
          ...state.flats,
          loading: false,
          success: {
            ...state.flats.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.flats.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // BUILDINGS
    case GET_ALL_BUILIDNGS_LOADING:
      return {
        ...state,
        buildings: {
          ...state.buildings,
          loading: true,
        },
      };
    case GET_ALL_BUILIDNGS_SUCCESS:
      return {
        ...state,
        buildings: {
          ...state.buildings,
          loading: false,
          success: {
            ...state.buildings.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_BUILIDNGS_FAILURE:
      return {
        ...state,
        buildings: {
          ...state.buildings,
          loading: false,
          success: {
            ...state.buildings.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.buildings.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // VILLAS
    case GET_ALL_VILLAS_LOADING:
      return {
        ...state,
        villas: {
          ...state.villas,
          loading: true,
        },
      };
    case GET_ALL_VILLAS_SUCCESS:
      return {
        ...state,
        villas: {
          ...state.villas,
          loading: false,
          success: {
            ...state.villas.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_VILLAS_FAILURE:
      return {
        ...state,
        villas: {
          ...state.villas,
          loading: false,
          success: {
            ...state.villas.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.villas.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // PLOTS
    case GET_ALL_PLOTS_LOADING:
      return {
        ...state,
        plots: {
          ...state.plots,
          loading: true,
        },
      };
    case GET_ALL_PLOTS_SUCCESS:
      return {
        ...state,
        plots: {
          ...state.plots,
          loading: false,
          success: {
            ...state.plots.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_PLOTS_FAILURE:
      return {
        ...state,
        plots: {
          ...state.plots,
          loading: false,
          success: {
            ...state.plots.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.plots.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // RENT
    case GET_ALL_RENT_LOADING:
      return {
        ...state,
        rent: {
          ...state.rent,
          loading: true,
        },
      };
    case GET_ALL_RENT_SUCCESS:
      return {
        ...state,
        rent: {
          ...state.rent,
          loading: false,
          success: {
            ...state.rent.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_RENT_FAILURE:
      return {
        ...state,
        rent: {
          ...state.rent,
          loading: false,
          success: {
            ...state.rent.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.rent.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // PG
    case GET_ALL_PG_LOADING:
      return {
        ...state,
        pg: {
          ...state.pg,
          loading: true,
        },
      };
    case GET_ALL_PG_SUCCESS:
      return {
        ...state,
        pg: {
          ...state.pg,
          loading: false,
          success: {
            ...state.pg.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_PG_FAILURE:
      return {
        ...state,
        pg: {
          ...state.pg,
          loading: false,
          success: {
            ...state.pg.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.pg.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    // COMMERCIAL
    case GET_ALL_COMMERCIAL_LOADING:
      return {
        ...state,
        commercial: {
          ...state.commercial,
          loading: true,
        },
      };
    case GET_ALL_COMMERCIAL_SUCCESS:
      return {
        ...state,
        commercial: {
          ...state.commercial,
          loading: false,
          success: {
            ...state.commercial.success,
            ok: true,
            data: action.payload,
          },
        },
      };
    case GET_ALL_COMMERCIAL_FAILURE:
      return {
        ...state,
        commercial: {
          ...state.commercial,
          loading: false,
          success: {
            ...state.commercial.success,
            ok: false,
            data: null,
          },
          failure: {
            ...state.commercial.failure,
            error: true,
            message: action.payload,
          },
        },
      };
    default:
      return initialState;
  }
};

export default getBuyerPropertiesReducer;
