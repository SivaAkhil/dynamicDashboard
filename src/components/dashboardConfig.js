import "./dashboardconfig.css";
import ShowAllGraphTypes from "./ShowAllGraphTypes";

const DashboardConfig = (props) => {
  const { toggleModal, name } = props;
  return (
    <div className="dashboardconfig-container">
      <h1>{name}</h1>
      <ShowAllGraphTypes />
    </div>
  );
};

export default DashboardConfig;
