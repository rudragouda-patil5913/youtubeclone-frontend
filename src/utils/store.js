import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import suggestionReducer from "./cacheSliceSuggestion";
import chatReducer from "./chatSlice";
import videosReducer from "./videosSlice"

const store = configureStore({
  reducer: {
    videos:videosReducer,
    app: appReducer,
    suggestions: suggestionReducer,
    chat: chatReducer,
    },
});

export default store;
