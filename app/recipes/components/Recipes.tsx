import React from "react";
import Recipe from "./Recipe";
import { RecipeType } from "../../types/recipe";

interface RecipesProps {
  recipes: RecipeType[];
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, k) => (
        <Recipe key={k} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
