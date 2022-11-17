import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});