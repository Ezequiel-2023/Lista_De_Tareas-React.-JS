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
      fetch("http://localhost:3001/tasks/addTasks",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : "desarrolloDeAplicacionesWeb"
        },
        body : JSON.stringify(action.payload)
      }).catch((err)=>{
        console.log(err);
      })
    },
    initAddTasks : (state , action) =>{
      console.log(action.payload)
      state.Value.push(action.payload)
    },
    removeTasks: (state, action) => {
      state.Value = state.Value.filter(tasks => tasks.taskId!== action.payload);
      fetch("http://localhost:3001/tasks/removeTasks/" + action.payload,{
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json",
          "Authorization" : "desarrolloDeAplicacionesWeb"
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
});


export const { addTasks, removeTasks, initAddTasks } = tasksSlice.actions;

export  default tasksSlice.reducer;