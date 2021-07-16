import { connect } from "react-redux";

import ProfileAvatar from "./ProfileAvatar";
import "./header.css";

const createDashBoardButtons = [
  { id: 1, name: "Add Metric", action: "createMetric" },
];

const Header = (props) => {
  const { currentTab, isDashboardCreated, clickButton } = props;

  return (
    <div className="header-container">
      <ProfileAvatar />
      <ul className="header-links">
        {(currentTab === 3) & isDashboardCreated
          ? createDashBoardButtons.map((b) => {
              return (
                <li
                  className="header-link"
                  key={b.name}
                  onClick={() => clickButton(b.action)}
                >
                  {b.name}
                </li>
              );
            })
          : null}

        {/* <li className="header-link">Link 1</li>
        <li className="header-link">Link 2</li>
        <li className="header-link">Link 3</li> */}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTab: state.tabs.currentTab,
    isDashboardCreated: state.dashboard.isDashboardCreated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickButton: (input) => dispatch({ type: `dashboard/${input}` }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
