import { connect } from "react-redux";

import "./grapharea.css";
import ChartHolder from "./ChartHolder";
import ShowAllGraphTypes from "./ShowAllGraphTypes";
import DashBoard from "./Dashboard";
import CreateDashboard from "./CreateDashboard";

const GraphArea = (props) => {
  const { currentTab, sidebarStatus, toggleSideBar } = props;

  const handleClick = () => {
    if (!sidebarStatus) return;
    toggleSideBar();
  };

  return (
    <div className="grapharea-container" onClick={handleClick}>
      {currentTab === 1 && <DashBoard />}
      {currentTab === 3 && <CreateDashboard />}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentTab: state.tabs.currentTab,
    sidebarStatus: state.tabs.sidebarStatus,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleSideBar: () => dispatch({ type: "tabs/toggleSideBar" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(GraphArea);
