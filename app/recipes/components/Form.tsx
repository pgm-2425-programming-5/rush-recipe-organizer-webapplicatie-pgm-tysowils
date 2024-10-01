import React, { useState } from "react";
import { RecipeType } from "../../types/recipe";

interface RecipeFormProps {
  onSubmit: (recipe: RecipeType) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState<RecipeType>({
    name: "",
    ingredients: [],
    instructions: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe({
      ...recipe,
      ingredients: newIngredients,
    });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const removeIngredient = (index: number) => {
    const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({
      ...recipe,
      ingredients: newIngredients,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(recipe);
    setRecipe({
      name: "",
      ingredients: [],
      instructions: "",
      category: "",
    });
  };

  return (
    <form className="pt-20" onSubmit={handleSubmit}>
      <div className="pt-4">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="pt-4">
        <label>Ingredients:</label>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="pt-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(e, index)}
              required
            />
            <button type="button" onClick={() => removeIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
      </div>
      <div className="pt-4">
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <div className="pt-4">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={recipe.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
