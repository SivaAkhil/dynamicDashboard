import { createSlice } from "@reduxjs/toolkit";

const initial = [];

const slice = createSlice({
  name: "newDashboard",
  initialState: initial,
  reducers: {
    createMetric: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default slice.reducer;
