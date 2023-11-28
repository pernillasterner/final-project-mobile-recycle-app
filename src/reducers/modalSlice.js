import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    modalActive: (state) => {
      state.isOpen = false;
    },
  },
});

export const { modalActive } = modalSlice.actions;

export default modalSlice.reducer;
