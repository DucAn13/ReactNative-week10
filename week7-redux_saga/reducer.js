import * as types from './actionTypes';

const initialState = {
  todos: [],
  error: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case types.FETCH_TODOS_FAILURE:
      return { ...state, error: action.payload };
    case types.ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

export default todoReducer;