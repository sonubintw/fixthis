// SavedPersonalRecipe.js
import React from "react";
import { connect } from "react-redux";

const SavedPersonalRecipe = ({ personalRecipes }) => {
  return (
    <div>
      <h2>Saved Personal Recipes</h2>
      <ul>
        {personalRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalRecipes: state.recipes.personalRecipes,
  };
};

export default connect(mapStateToProps)(SavedPersonalRecipe);
