import "./homepage.css";
import SideBar from "../components/SideBar";
import GraphArea from "../components/GraphArea";
import Header from "../components/Header";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <SideBar />
      <Header />
      <GraphArea />
    </div>
  );
};

export default HomePage;
