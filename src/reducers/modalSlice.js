import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    isOpen: false,
  },
  reducers: {
    modalActive: (state) => {
      state.isOpen = false;
    },
  },
});

export const { modalActive } = modalSlice.actions;

export default modalSlice.reducer;
