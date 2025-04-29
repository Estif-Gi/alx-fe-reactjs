// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from './recipeStore';

let AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
    

  };

  return (
    <form onSubmit={handleSubmit}
          className="flex items-center m-5"
    >
      <div >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required={true}
          className='border rounded-md p-1'
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required={true}
        className='border rounded-md p-1 m-2'
      />
      <button className='border hover:bg-gray-200 p-1 rounded-md' type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm
