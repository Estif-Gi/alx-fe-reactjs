import React from 'react';
import TodoList from './components/TodoList';  // Ensure the correct path
import Button from './exp/button';
import "./exp/index.css"; 
function App() {

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <Button/>
    </div>
  );
}

export default App;
