import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filter: {
    brandValue: [],
    priceRange: {
      priceLow: false,
      priceHigh: false,
    },

    sort: {
      priceLow: false,
      priceHigh: false,
      newest: false,
    },
  },
  filterArray: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setInitialState } = productSlice.actions;

export default productSlice.reducer;

// filterBrand: (state, { payload: { addBrand } }) => {
//   if (state.brandValue.find(addBrand)) {
//     state.brandValue.filter((brand) => brand !== addBrand);
//   } else {
//     state.brandValue.push(addBrand);
//   }
// },
