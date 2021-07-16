import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GroupIcon from "@material-ui/icons/Group";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { connect } from "react-redux";

import "./tabs.css";

const Tabs = (props) => {
  const { changeTab, currentTab, sidebarStatus } = props;

  const handleClick = (input) => {
    if (input === currentTab) return;
    changeTab(input);
  };

  return (
    <div className="tabs-container">
      <div
        className={`tabs tab ${currentTab === 1 && "active"}`}
        onClick={() => handleClick(1)}
      >
        <AssessmentIcon className="tab-icons" />
        {sidebarStatus && <p className="tab-names">Active Dashboard</p>}
      </div>

      <div
        className={`tabs tab ${currentTab === 2 && "active"}`}
        onClick={() => handleClick(2)}
      >
        <DashboardIcon className="tab-icons" />
        {sidebarStatus && <p className="tab-names">DashBoards</p>}
      </div>

      <div
        className={`tabs tab ${currentTab === 3 && "active"}`}
        onClick={() => handleClick(3)}
      >
        <AddBoxIcon className="tab-icons" />
        {sidebarStatus && <p className="tab-names">create dashboard</p>}
      </div>

      <div
        className={`tabs tab ${currentTab === 4 && "active"}`}
        onClick={() => handleClick(4)}
      >
        <GroupIcon className="tab-icons" />
        {sidebarStatus && <p className="tab-names">users</p>}
      </div>

      <div
        className={`tabs tab ${currentTab === 5 && "active"}`}
        onClick={() => handleClick(5)}
      >
        <AccountCircleIcon className="tab-icons" />
        {sidebarStatus && <p className="tab-names">Profile</p>}
      </div>
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
    changeTab: (payload) =>
      dispatch({ type: "tabs/changeTab", payload: payload }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Tabs);

// admin tabs:-
// Profile
// dashboards
// users
// create dashboard
