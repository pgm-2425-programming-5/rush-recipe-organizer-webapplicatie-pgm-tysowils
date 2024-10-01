import React from "react";
import { RecipeType } from "../../types/recipe";

interface RecipeProps {
  recipe: RecipeType;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
