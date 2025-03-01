import { Link } from 'react-router-dom';
import useRecipeStore from './RecipeStore.js';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  console.log(recipes);
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;