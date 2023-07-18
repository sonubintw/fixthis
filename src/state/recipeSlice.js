// reducers/recipeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalRecipes: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      const newRecipe = action.payload;
      state.personalRecipes = [...state.personalRecipes, newRecipe];
    },
    removeRecipe: (state, action) => {
      state.personalRecipes = state.personalRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
