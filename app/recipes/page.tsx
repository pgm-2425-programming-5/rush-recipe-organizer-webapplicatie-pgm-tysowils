"use client";
import React from "react";
import Recipes from "./components/Recipes";
import Form from "./components/Form";
import { RecipeType } from "./types/recipe";
import { useRouter } from "next/navigation";

const RecipesPage: React.FC = () => {
  const [recipes, setRecipes] = React.useState([]);
  const router = useRouter();

  let storedRecipes = localStorage.getItem("recipes");
  if (storedRecipes) {
    setRecipes(JSON.parse(storedRecipes));
  }

  function SubmitHandler(recipe): RecipeType {
    if (!storedRecipes) {
      localStorage.setItem("recipes", JSON.stringify([recipe]));
      router.push("/recipes");
      return;
    }
    storedRecipes = JSON.parse(storedRecipes);
    storedRecipes.push(recipe);
    setRecipes(JSON.parse(storedRecipes));
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));
  }

  return (
    <div>
      <h1 className="p-4">Jouw Recepten</h1>
      <ul>
        {recipes.length === 0 ? (
          <p>Je hebt nog geen recepten toegevoegd.</p>
        ) : (
          <Recipes recipes={recipes} />
        )}
        <Form onSubmit={SubmitHandler} />
      </ul>
    </div>
  );
};

export default RecipesPage;
