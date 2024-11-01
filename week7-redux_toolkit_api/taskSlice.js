// src/taskSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

// Thunk để lấy danh sách công việc từ API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://66ff425c2b9aac9c997eb603.mockapi.io/Task');
  return response.json();
});

// Thunk để thêm công việc mới
export const addTask = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await fetch(`https://66ff425c2b9aac9c997eb603.mockapi.io/Task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
  return response.json();
});

// Thunk để cập nhật công việc
export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await fetch(`https://66ff425c2b9aac9c997eb603.mockapi.io/Task/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: task.name }),
  });
  return response.json();
});

// Slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload; // Cập nhật task
        }
      });
  },
});

// Xuất reducer và action
export default taskSlice.reducer;
