import { createSlice } from "@reduxjs/toolkit";

const initial = {
  isDashboardCreated: false,
  addMetric: false,
};

const slice = createSlice({
  name: "dashboard",
  initialState: initial,
  reducers: {
    createDashboard: (state, action) => {
      state.isDashboardCreated = true;
    },

    createMetric: (state, action) => {
      state.addMetric = !state.addMetric;
    },
  },
});

export default slice.reducer;
