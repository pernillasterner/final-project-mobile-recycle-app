import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productReducer from "./reducers/productSlice";
import modalReducer from "./reducers/modalSlice";
import cartReducer from "./reducers/cartSlice";

const reducer = combineReducers({
  product: productReducer,
  modal: modalReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: reducer,
});
