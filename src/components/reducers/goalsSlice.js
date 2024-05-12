// archivo goalsSlice

import { createSlice } from "@reduxjs/toolkit";


export const goalsSlice = createSlice({
    name : 'goals',
    initialState: {
        Value: []
    },
    reducers:{ 
        addGoal: (state, action) =>{
            state.Value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
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
        removeGoal : (state, action) =>{
            state.Value = state.Value.filter(goals => goals.goalsId!== action.payload);
            fetch("http://localhost:3001/goals//removeGoals/" + action.payload,{
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
})

export const {addGoal, removeGoal} = goalsSlice.actions;

export  default goalsSlice.reducer;