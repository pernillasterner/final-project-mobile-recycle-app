import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    refurbished: [],
    peer2peer: [],
  },
  filter: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.products = [];
    },
  },
});

export const { clearProducts } = productSlice.actions;

export default productSlice.reducer;
