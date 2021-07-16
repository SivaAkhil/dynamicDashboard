import { createSlice } from "@reduxjs/toolkit";

// tool kit updates data immutably so nothing requred for tweaks

const slice = createSlice({
  name: "tabs",
  initialState: { currentTab: 1, sidebarStatus: false },
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
    },

    toggleSideBar: (state, action) => {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },
});

export default slice.reducer;
