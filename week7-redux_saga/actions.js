import * as types from './actionTypes';

// Fetch todos
export const fetchTodosRequest = () => ({ type: types.FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: types.FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: types.FETCH_TODOS_FAILURE, payload: error });

// Add todo
export const addTodoRequest = (todo) => ({ type: types.ADD_TODO_REQUEST, payload: todo });
export const addTodoSuccess = (todo) => ({ type: types.ADD_TODO_SUCCESS, payload: todo });
export const addTodoFailure = (error) => ({ type: types.ADD_TODO_FAILURE, payload: error });

// Delete todo
export const deleteTodoRequest = (id) => ({ type: types.DELETE_TODO_REQUEST, payload: id });
export const deleteTodoSuccess = (id) => ({ type: types.DELETE_TODO_SUCCESS, payload: id });
export const deleteTodoFailure = (error) => ({ type: types.DELETE_TODO_FAILURE, payload: error });