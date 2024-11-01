import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from './actions';
import * as types from './actionTypes';

const apiUrl = 'https://66ff425c2b9aac9c997eb603.mockapi.io/Task';

// Fetch todos saga
function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put(actions.fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchTodosFailure(error.message));
  }
}

// Add todo saga
function* addTodoSaga(action) {
  try {
    const response = yield call(axios.post, apiUrl, action.payload);
    yield put(actions.addTodoSuccess(response.data));
  } catch (error) {
    yield put(actions.addTodoFailure(error.message));
  }
}

// Delete todo saga
function* deleteTodoSaga(action) {
  try {
    yield call(axios.delete, `${apiUrl}/${action.payload}`);
    yield put(actions.deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(actions.deleteTodoFailure(error.message));
  }
}

// Root saga
export default function* rootSaga() {
  yield takeEvery(types.FETCH_TODOS_REQUEST, fetchTodosSaga);
  yield takeEvery(types.ADD_TODO_REQUEST, addTodoSaga);
  yield takeEvery(types.DELETE_TODO_REQUEST, deleteTodoSaga);
}