import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productSlice from "./reducers/productSlice";
import modalSlice from "./reducers/modalSlice";
import cartSlice from "./reducers/cartSlice";

const reducer = combineReducers({
  product: productSlice,
  modal: modalSlice,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: reducer,
});
