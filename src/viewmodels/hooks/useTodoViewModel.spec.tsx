import {act, renderHook} from '@testing-library/react-hooks';

import {useTodoViewModel} from './useTodoViewModel';

describe('useTodoViewModel', () => {
  it('should initialize with default todos', () => {
    const {result} = renderHook(() => useTodoViewModel());

    expect(result.current.todos.length).toBe(2);
    expect(result.current.todos[0]).toEqual({
      id: 1,
      title: 'Learn React Native',
      completed: false,
    });
    expect(result.current.todos[1]).toEqual({
      id: 2,
      title: 'Build a Todo App',
      completed: true,
    });
  });

  it('should add a new todo', () => {
    const {result} = renderHook(() => useTodoViewModel());

    act(() => {
      result.current.setNewTodoTitle('New Task');
    });

    act(() => {
      result.current.handleAddTodo();
    });

    expect(result.current.todos.length).toBe(3);
    expect(result.current.todos[2].title).toBe('New Task');
    expect(result.current.todos[2].completed).toBe(false);
  });

  it('should not add a todo with an empty title', () => {
    const {result} = renderHook(() => useTodoViewModel());

    act(() => {
      result.current.setNewTodoTitle('');
    });

    act(() => {
      result.current.handleAddTodo();
    });

    expect(result.current.todos.length).toBe(2);
  });

  it('should toggle todo completed status', () => {
    const {result} = renderHook(() => useTodoViewModel());

    act(() => {
      result.current.handleToggleTodo(1);
    });

    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.handleToggleTodo(1);
    });

    expect(result.current.todos[0].completed).toBe(false);
  });

  it('should delete a todo', () => {
    const {result} = renderHook(() => useTodoViewModel());

    act(() => {
      result.current.handleDeleteTodo(1);
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].id).toBe(2);
  });
});
