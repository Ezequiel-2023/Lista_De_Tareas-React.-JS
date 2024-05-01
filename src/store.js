
// archivo store
import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./components/reducers/goalsSlice";
import optionsReducer from "./components/reducers/optionsSlice"; 
import tasksReducer from "./components/reducers/tasksSlice";

export default configureStore({
  reducer: {
    goals: goalsReducer,
    options: optionsReducer,
    tasks : tasksReducer
  }
});