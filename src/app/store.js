import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// The Global store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
