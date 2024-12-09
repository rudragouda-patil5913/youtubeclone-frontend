import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    sideBarMenuOpen: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarMenuOpen = !state.sideBarMenuOpen;
    },
    removeSideBar: (state) => {
      state.sideBarMenuOpen = false;
    },
    addSideBar: (state) => {
      state.sideBarMenuOpen = true;
    },
  },
});

export const { toggleSideBar, removeSideBar, addSideBar } = appSlice.actions;

export default appSlice.reducer;
