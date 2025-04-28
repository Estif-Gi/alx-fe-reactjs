import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <Router>
      <div className="border-2 bg-yellow-50 gap-10 flex pl-10">
        <Link className="m-4" to='/'>Home</Link>
        <Link className="m-4" to='/Add-recipe'>Add recipe</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/Add-recipe" element={<AddRecipeForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
