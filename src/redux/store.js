import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./login/loginReducer";
import sellerSignupReducer from "./sellerSignup/sellerSignupReducer";
import authReducer from "./authUser/authReducer";
import getSellerListingsReducer from "./getSellerListings/getSellerListingsReducer";
import getSellerListingDetailsReducer from "./getSellerListingDetails/getSellerListingDetailsReducer";
import getBuyerPropertiesReducer from "./getBuyerProperties/getBuyerPropertiesReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: sellerSignupReducer,
  user: authReducer,
  getSellerListings: getSellerListingsReducer,
  getSellerListingDetails: getSellerListingDetailsReducer,
  getBuyerProperties:getBuyerPropertiesReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
