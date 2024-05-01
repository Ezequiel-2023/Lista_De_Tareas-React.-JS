// archivo goalsSlice

import { createSlice } from "@reduxjs/toolkit";


export const goalsSlice = createSlice({
    name : 'goals',
    initialState: {
        Value: [
        {
           name: 'Tecnico En Desarrollo De software',
           description: 'Ganar Todos Los cursos',
           dueDate: '15/12/2024'
        }
        ]
    },
    reducers:{ 
        addGoal: (state, action) =>{
            state.Value.push(action.payload);
        },
        removeGoal : (state, action) =>{
            state.Value = state.Value.filter(goal => goal.task1 !== action.payload);
        }
    }
})

export const {addGoal, removeGoal} = goalsSlice.actions;

export  default goalsSlice.reducer;