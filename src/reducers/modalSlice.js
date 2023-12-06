import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    isActive: false,
  },
  reducers: {
    modalActive: (state) => {
      state.isActive = true;
    },
    modalNotActive(state) {
      state.isActive = false;
    },
  },
});

export const { modalActive, modalNotActive } = modalSlice.actions;

export default modalSlice.reducer;
