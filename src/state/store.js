// store.js
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../state/recipeSlice"

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;
