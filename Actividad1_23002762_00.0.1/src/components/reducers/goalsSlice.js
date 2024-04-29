// archivo goalsSlice

import { createSlice } from "@reduxjs/toolkit";


export const goalsSlice = createSlice({
    name : 'goals',
    initialState: {
        Value: [
        {
           name: '',
           description: '',
           dueDate: ''
        }
        ]
    },
    reducers:{ 
        addGoal: (state, action) =>{
            state.Value.push(action.payload);
        },
        removeGoal : (state, action) =>{
            state.Value = state.Value.filter(goal => goal.id !== action.payload);
        }
    }
})

export const {addGoal, removeGoal} = goalsSlice.actions;

export  default goalsSlice.reducer;