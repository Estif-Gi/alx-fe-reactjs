import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar'; 
import FavoritesList from './components/FavoritesList'; 
import RecommendationsList from './components/RecommendationsList';
function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> |{' '}
          <Link to="/favorites">Favorites</Link> |{' '}
          <Link to="/recommendations">Recommendations</Link>
        </nav>
        <SearchBar /> {/* Add SearchBar */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;