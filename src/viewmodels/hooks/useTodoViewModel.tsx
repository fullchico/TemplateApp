import {useState} from 'react';

import {Todo} from '../../models/Todo';

export const useTodoViewModel = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1, title: 'Learn React Native', completed: false},
    {id: 2, title: 'Build a Todo App', completed: true},
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === '') return;
    const newTodo = {id: Date.now(), title: newTodoTitle, completed: false};
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return {
    todos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    newTodoTitle,
    setNewTodoTitle,
  };
};
