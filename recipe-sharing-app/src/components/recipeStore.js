import { create  } from 'zustand';
import { persist } from 'zustand/middleware';

let useRecipeStore = create(  
  persist((set) => ({
  recipes: [],
  favorites: [], 
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],
  setRandomRecommendation: () =>
    set((state) => {
      const randomIndex = Math.floor(Math.random() * state.recipes.length);
      recommendations: [state.recipes[1].title] 
    }),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] 
    })),

  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] 
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
    })),
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })),  
    
    filterRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
      })),

      setSearchTerm: (term) => set({ searchTerm: term }),
})) , {name:"recipe-store"})

export default useRecipeStore