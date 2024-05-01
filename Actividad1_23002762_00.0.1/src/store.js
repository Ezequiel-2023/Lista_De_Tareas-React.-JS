
// archivo store
import { configureStore } from "@reduxjs/toolkit";

import goalsReducer from  "./components/reducers/goalsSlice";
import optionsReducer from  "./components/reducers/goalsSlice";

export default configureStore({
    reducer: {
        goals : goalsReducer,
        options:optionsReducer
    }
})