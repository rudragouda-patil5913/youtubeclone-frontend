import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videoslist",
  initialState: {
    list: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
  },
});

export const { addVideos } = videosSlice.actions;

export default videosSlice.reducer;
