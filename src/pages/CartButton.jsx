// CartButton.js
import React from "react";
import { connect } from "react-redux";

const CartButton = ({ personalRecipes }) => {
  return (
    <div>
      <h2>Saved Recipes</h2>
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

export default connect(mapStateToProps)(CartButton);
