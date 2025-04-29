import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <div className="border-2 border-gray-400 rounded-xl m-4 p-2 bg-blue-100 flex flex-col gap-2 w-[50%] ">
        <h1 className="text-xl ml-6 mt- font-bold"><span className="font-semibold">Title: </span>{recipe.title}</h1>
        <p><span className="font-semibold">Description: </span>{recipe.description}</p>

      </div>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;