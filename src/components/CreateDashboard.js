import { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./createdashboard.css";
import DashboardConfig from "./dashboardConfig";
import Modal from "./Modal";
import DashBoard from "./Dashboard";
import ChartHolder from "./ChartHolder";

const CreateDashboard = (props) => {
  const {
    isDashboardCreated,
    createDashboard,
    addMetric,
    openModal,
    modalStatus,
    metrics,
  } = props;

  const [showInput, setShowInput] = useState(false);
  const [dashboardName, setDashboardName] = useState("");

  const handleAddNew = () => {
    setShowInput(true);
  };

  const handleInputChange = (e) => {
    setDashboardName(e.target.value);
  };

  const handleDashboardNameSubmit = (e) => {
    e.preventDefault();
    setShowInput(false);
    // setModal(true);
    if (!isDashboardCreated) {
      createDashboard();
    }
  };

  useEffect(() => {
    if (addMetric && modalStatus === false) {
      openModal();
    }
  }, [addMetric, modalStatus]);

  if (modalStatus) {
    return (
      <Modal>
        <DashboardConfig />
      </Modal>
    );
  }

  console.log(metrics);

  if (isDashboardCreated) {
    return (
      <>
        {!metrics ? (
          <h1>Dashboard Empty</h1>
        ) : (
          <DashBoard>
            {metrics.map((metric) => {
              return (
                <div key={metric.id} className="dragable-corner">
                  <ChartHolder
                    chartType={metric.chartType}
                    data={metric.data}
                  />
                </div>
              );
            })}
            {/* <div key={1}>
              <ChartHolder chartType={"bar"} data={barData} />
            </div> */}
          </DashBoard>
        )}
      </>
    );
  }

  if (showInput) {
    return (
      <div className="createdashboard-container">
        <form action="" onSubmit={handleDashboardNameSubmit}>
          <p>Enter DashBoard Name</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="dashboardName"
            value={dashboardName}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="createdashboard-container">
      <div className="createdashboard-new-button" onClick={handleAddNew}>
        Add new DashBoard
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDashboardCreated: state.dashboard.isDashboardCreated,
    addMetric: state.dashboard.addMetric,
    modalStatus: state.modal.status,
    metrics: state.newDashboard,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    createDashboard: () => dispatch({ type: "dashboard/createDashboard" }),
    openModal: () => dispatch({ type: "modal/openModal" }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(CreateDashboard);
