import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Product/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import reportReducer from "./Report/Reducer";
// import customerProductReducer from "./Customers/Product/Reducer";
import productReducer from "../Redux/Admin/Product/Reducer";
// import cartReducer from "./Customers/Cart/Reducer";
// import { orderReducer } from "./Customers/Order/Reducer";
import adminOrderReducer from "../Redux/Admin/Orders/Reducer";
// import ReviewReducer from "./Customers/Review/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  customersProduct: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
  report: reportReducer,
  //   review: ReviewReducer,

  // admin
  adminsProduct: productReducer,
  adminsOrder: adminOrderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
