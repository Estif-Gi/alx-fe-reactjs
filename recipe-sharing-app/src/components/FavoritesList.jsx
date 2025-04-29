import useRecipeStore from './recipeStore';
import { useParams } from 'react-router-dom';
const FavoritesList = () => {
  const {id} = useParams();
  const favorites = useRecipeStore((state) => {
    const recipesMap = new Map(state.recipes.map(recipe => [recipe.id, recipe]));
    return state.favorites
      .map((id) => recipesMap.get(id))
      .filter(Boolean);
  });

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;