import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <>
      <SearchBar /> 
      <div className="border-2 border-gray-400 rounded-xl m-4 p-1 bg-gray-200 flex flex-col gap-2 w-[50%] justify-self-center">
        <h2 className="text-xl ml-6 mt- font-bold">Recipes</h2>
        {recipesToDisplay.map((recipe) => (
          <div key={recipe.id}
              className="ml-4 m-2 bg-blue-50 rounded-md p-2 shadow-xl  flex flex-col gap-2 b "
          >
            <h3>
              <Link to={`/recipe/${recipe.id}`}><span className="font-semibold">Title: </span>{recipe.title}</Link>
            </h3>
            <p><span className="font-semibold">Description: </span>{recipe.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;