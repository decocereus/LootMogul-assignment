import { createSlice } from "@reduxjs/toolkit";

export const studentInfoSlice = createSlice({
  name: "studentInfo",
  initialState: {
    students: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { setStudents } = studentInfoSlice.actions;
export default studentInfoSlice.reducer;
