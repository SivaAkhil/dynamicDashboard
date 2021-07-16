import { combineReducers } from "@reduxjs/toolkit";

import tabsReducer from "./tabs";
import dashboardReducer from "./dashboard";
import newDashboardReducer from "./newDashboard";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  dashboard: dashboardReducer,
  newDashboard: newDashboardReducer,
  modal: modalReducer,
});

export default rootReducer;
