// archivo tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    Value: []
  },
  reducers: {
    addTasks: (state, action) => {
      state.Value.push(action.payload);
    },
    removeTasks: (state, action) => {
      state.Value = state.Value.filter(tasks => tasks.taskId!== action.payload);
    }
  }
});


export const { addTasks, removeTasks } = tasksSlice.actions;

export  default tasksSlice.reducer;