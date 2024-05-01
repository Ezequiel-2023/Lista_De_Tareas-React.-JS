// archico optionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        value: 'goals',
        style: {
            backgroundColor: 'blue', 
        }
    },
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload.option;
            state.style.backgroundColor = action.payload.backgroundColor;
        }
    }
})

export const { changeOption } = optionsSlice.actions;
export default optionsSlice.reducer;
