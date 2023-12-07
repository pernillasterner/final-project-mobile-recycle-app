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
      state.filterArray = action.payload;
      state.filterArray = action.payload;
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
    setPriceRange: (state, action) => {
      const resetProducts = state.products.filter(
        (product) =>
          state.filter.brandValue.length === 0 ||
          state.filter.brandValue.includes(product.brandValue)
      );
      const range = action.payload;
      const updatedProducts = resetProducts.filter((item) => {
        return item.priceValue >= range[0] && item.priceValue <= range[1];
      });

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
    sortProducts: (state, action) => {
      const sorting = action.payload;

      switch (sorting) {
        case "high-low":
          state.filter.sort.priceHigh = true;
          state.filter.sort.priceLow = false;
          state.filter.sort.newest = false;
          break;
        case "low-high":
          state.filter.sort.priceLow = true;
          state.filter.sort.priceHigh = false;
          state.filter.sort.newest = false;
          break;
        case "newest":
          state.filter.sort.newest = true;
          state.filter.sort.priceLow = false;
          state.filter.sort.priceHigh = false;
          break;
      }

      if (state.filter.sort.priceLow) {
        state.filterArray.sort((a, b) => a.priceValue - b.priceValue);
      } else if (state.filter.sort.priceHigh) {
        state.filterArray.sort((a, b) => b.priceValue - a.priceValue);
      } else if (state.filter.sort.newest) {
        state.filterArray.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      } else {
        state.filterArray = updatedProducts;
      }
    },
  },
});

export const {
  setInitialState,
  setFilter,
  clearFilters,
  calculatePriceRange,
  sortProducts,
  setPriceRange,
} = productSlice.actions;

export default productSlice.reducer;
