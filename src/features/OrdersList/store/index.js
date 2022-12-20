import orders from "./slices/ordersSlice";
import filters from "./slices/filtersSlice";
import orderForm from "./slices/orderFormSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
  orderForm,
});

export default rootReducer;
