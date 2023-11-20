import { createSlice } from "@reduxjs/toolkit";

export const collegeInfoSlice = createSlice({
  name: "collegInformation",
  initialState: {
    colleges: [],
  },
  reducers: {
    setColleges: (state, action) => {
      state.colleges = action.payload;
    },
  },
});

export const { setColleges } = collegeInfoSlice.actions;
export default collegeInfoSlice.reducer;
