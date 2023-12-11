import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity || 0;
        existingItem.quantity += 1;
        state.totalItems += 1;
      } else {
        state.cartItems.push(newItem);
        newItem.quantity = 1;
        state.totalItems += 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;

      // Find the item to remove
      const existingItem = state.cartItems.find(
        (item) => item.id === itemIdToRemove
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== itemIdToRemove
          );
        }
      }

      state.totalItems -= 1;
    },
    updateTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
      // Update totalItems based on the new cartItems
      state.totalItems = state.cartItems.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateTotalItems, updateCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
