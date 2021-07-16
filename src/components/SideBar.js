import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

import "./sidebar.css";
import Logo from "../asserts/logo1.svg";
import Tabs from "./Tabs";

const SideBar = (props) => {
  const { toggleSideBar, sidebarStatus } = props;

  return (
    <div
      className={`sidebar-main-container ${
        sidebarStatus && "sidebar-main-container-opened"
      }`}
    >
      <div className="sidebar-logo-container">
        <img src={Logo} alt="" className="sidebar-logo" />
      </div>
      <Tabs />
      <div className="sidebar-toggler" onClick={toggleSideBar}>
        {sidebarStatus ? (
          <CancelIcon className="sidebar-toggler-icon" />
        ) : (
          <MenuIcon className="sidebar-toggler-icon" />
        )}
        {sidebarStatus && <p>Close</p>}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    sidebarStatus: state.tabs.sidebarStatus,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    toggleSideBar: () => dispatch({ type: "tabs/toggleSideBar" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SideBar);
