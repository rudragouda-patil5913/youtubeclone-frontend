import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.messages.length > 30) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
