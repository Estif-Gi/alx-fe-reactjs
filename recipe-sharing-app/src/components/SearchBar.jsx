import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Trigger filtering whenever the search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
    />
  );
};

export default SearchBar;