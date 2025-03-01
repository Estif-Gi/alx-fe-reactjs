import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import useRecipeStore from "./RecipeStore";
const RecipeDetails = ({recipeId}) =>{
    const recipe = useRecipeStore(state =>
        state.recipe.find(recipe => recipe.id === recipeId)
    );
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
          {/* Render EditRecipeForm and DeleteRecipeButton here */}
        </div>
      );
}

export default RecipeDetails;