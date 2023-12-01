import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filter: {
    brandValue: [],
    priceRange: {
      priceLow: 0,
      priceHigh: 0,
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
    setFilter: (state, action) => {
      const selectedBrand = action.payload;

      const brandExists = state.filter.brandValue.includes(selectedBrand);

      if (brandExists) {
        state.filter.brandValue = state.filter.brandValue.filter(
          (brand) => brand !== selectedBrand
        );
      } else {
        state.filter.brandValue.push(selectedBrand);
      }
      const updatedProducts = state.products.filter(
        (product) =>
          state.filter.brandValue.length === 0 ||
          state.filter.brandValue.includes(product.brandValue)
      );
      state.filterArray = updatedProducts;
    },
    clearFilters: (state) => {
      state.filter = initialState.filter;
      state.filterArray = state.products;
    },
    calculatePriceRange: (state) => {
      let highestPrice = state.products[0].priceValue;
      let lowestPrice = state.products[0].priceValue;
      state.products.forEach((element) => {
        if (highestPrice < element.priceValue) {
          state.filter.priceRange.priceHigh = element.priceValue;
          highestPrice = element.priceValue;
        } else if (lowestPrice > element.priceValue) {
          state.filter.priceRange.priceLow = element.priceValue;
          lowestPrice = element.priceValue;
        }
      });
    },
  },
});

export const { setInitialState, setFilter, clearFilters, calculatePriceRange } =
  productSlice.actions;

export default productSlice.reducer;

// setFilter: (state, action) => {
//   const filterOption = action.payload;
//   // Get the initial array of products and make a copy of that
//   const initialProducts = state.products;
//   // Run filter on the parameters and return the filtered array

//   const updatedProducts = initialProducts.filter((product) =>
//     product.brandValue.includes(filterOption)
//   );

//   // Update the state

//   state.filterArray = updatedProducts;
// };
