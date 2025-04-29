import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar'; 
import FavoritesList from './components/FavoritesList'; 
import RecommendationsList from './components/RecommendationsList';
function App() {
  return (
    <>
      <Router>
        <div>
          <h1 className='text-xl font-bold m-5 ml-8'>Recipe Sharing App</h1>
          <nav className="flex shadow-lg mb-10 rounded-md gap-5 p-4 m-2 bg-gray-200 justify-around md:justify-self-center md:gap-10">
            <Link className="hover:text-gray-700" to="/">Home</Link> 
            <Link className="hover:text-gray-700" to="/add">Add Recipe</Link> 
            {/* <Link to="/favorites">Favorites</Link>  */}
            <Link className="hover:text-gray-700" to="/recommendations">Recommendations</Link>
          </nav>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;