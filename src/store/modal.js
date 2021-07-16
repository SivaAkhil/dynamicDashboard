import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",

  initialState: { status: false },
  reducers: {
    toggleModal: (state, action) => {
      state.status = !state.status;
    },

    closeModal: (state, action) => {
      state.status = false;
    },

    openModal: (state, action) => {
      state.status = true;
    },
  },
});

export default slice.reducer;
