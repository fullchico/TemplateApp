import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';

import {WrapperProviders} from '../../../providers';
import {useTodoViewModel} from '../../../viewmodels/TodoViewModel';
import {TodoView} from '.';

// Mock do hook useTodoViewModel
jest.mock('../../../viewmodels/TodoViewModel');

const Componente = () => {
  return (
    <WrapperProviders>
      <TodoView />
    </WrapperProviders>
  );
};

describe('TodoView', () => {
  beforeEach(() => {
    (useTodoViewModel as jest.Mock).mockReturnValue({
      todos: [
        {id: 1, title: 'Learn React Native', completed: false},
        {id: 2, title: 'Build a Todo App', completed: true},
      ],
      newTodoTitle: '',
      setNewTodoTitle: jest.fn(),
      handleAddTodo: jest.fn(),
      handleToggleTodo: jest.fn(),
      handleDeleteTodo: jest.fn(),
    });
  });

  it('should render the initial todos', () => {
    render(<Componente />);

    expect(screen.getByText('Learn React Native')).toBeTruthy();
    expect(screen.getByText('Build a Todo App')).toBeTruthy();
  });

  it('should add a new todo when the add button is pressed', () => {
    const {getByPlaceholderText, getByText} = render(<Componente />);
    const mockHandleAddTodo = useTodoViewModel().handleAddTodo;
    const input = getByPlaceholderText('Add new item');
    const addButton = getByText('Add');

    // Simular digitação de novo título
    fireEvent.changeText(input, 'New Task');

    // Simular clique no botão de adicionar
    fireEvent.press(addButton);

    expect(mockHandleAddTodo).toHaveBeenCalled();
  });

  it('should update the input value when typing', () => {
    const mockSetNewTodoTitle = useTodoViewModel().setNewTodoTitle;
    const {getByPlaceholderText} = render(<Componente />);
    const input = getByPlaceholderText('Add new item');

    // Simular digitação de texto no Input
    fireEvent.changeText(input, 'Test Task');

    expect(mockSetNewTodoTitle).toHaveBeenCalledWith('Test Task');
  });

  it('should call toggle todo when clicking on a todo', () => {
    const mockHandleToggleTodo = useTodoViewModel().handleToggleTodo;
    const {getByTestId} = render(<Componente />);
    const firstTodo = getByTestId('ToggleTodo-0');

    fireEvent.press(firstTodo);

    expect(mockHandleToggleTodo).toHaveBeenCalledWith(1);
  });

  it('should call delete todo when clicking on the delete button', () => {
    const mockHandleDeleteTodo = useTodoViewModel().handleDeleteTodo;
    const {getByTestId} = render(<Componente />);
    const deleteButton = getByTestId('DeleteTodo-0');

    fireEvent.press(deleteButton);

    expect(mockHandleDeleteTodo).toHaveBeenCalledWith(1);
  });
});
