// archico optionsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
    name: 'option',
    initialState: {
        value: 'tasks',
    },
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload.option;
        }
    }
})

export const { changeOption } = optionsSlice.actions;
export default optionsSlice.reducer;
