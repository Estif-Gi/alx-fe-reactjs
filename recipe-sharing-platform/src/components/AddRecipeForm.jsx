import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    const ingredientsArray = ingredients.split(",").map((item) => item.trim());
    const stepsArray = steps.split(".").map((step) => step.trim());

    if (ingredientsArray.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsArray,
      steps: stepsArray,
    };

    console.log("Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Example: Tomato, Onion, Garlic, Olive oil"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Preparation Steps (separate with periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Example: Chop vegetables. Cook for 10 minutes. Serve hot."
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
