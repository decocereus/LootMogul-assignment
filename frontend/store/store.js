import { configureStore } from "@reduxjs/toolkit";
import collegeSliceReducer from "../features/collegeInfoSlice";
import studentSliceReducer from "../features/studentInfoSlice";

export const store = configureStore({
  reducer: { collegeSliceReducer, studentSliceReducer },
});
