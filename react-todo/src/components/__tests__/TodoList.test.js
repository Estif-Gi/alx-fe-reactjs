import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Ensure correct import path

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todos/i)).toBeInTheDocument();
});

test('allows users to add a todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
