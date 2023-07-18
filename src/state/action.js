// redux/actions.js
export const SAVE_PERSONAL_RECIPE = "SAVE_PERSONAL_RECIPE";

export const savePersonalRecipe = (recipe) => {
  return {
    type: SAVE_PERSONAL_RECIPE,
    payload: recipe,
  };
};
