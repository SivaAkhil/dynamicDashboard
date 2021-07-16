import { createSlice } from "@reduxjs/toolkit";

import {
  barData,
  bubbledata,
  doorpidata,
  lineData,
  scatterdata,
  polardata,
  radardata,
} from "../utils/graphdata";

const intial = {
  lineData: lineData,
  barData: barData,
  radarData: radardata,
  donutData: doorpidata,
  PieData: doorpidata,
  polarData: polardata,
  bubbleData: bubbledata,
  scatterData: scatterdata,
};

const slice = createSlice({
  name: "charts",
  initialState: intial,
  reducers: {
    setLineData: () => {
      //
    },

    setBarData: () => {
      //
    },
  },
});

export default slice.reducer;
