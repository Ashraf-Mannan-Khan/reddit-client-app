import { configureStore } from "@reduxjs/toolkit";
import allRedditsReducer from "../features/allReddits/allRedditsSlice.jsx";
import searchTermReducer from "../features/searchReddit/searchTermSlice.jsx";
import keywordSliceReducer from "../component/side-menu/keywordSlice/keywordSlice.jsx"
export const store = configureStore({
  reducer: {
    allReddits: allRedditsReducer,
    search: searchTermReducer,
    keyword: keywordSliceReducer
  },
});
