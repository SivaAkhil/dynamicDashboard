import { Responsive, WidthProvider } from "react-grid-layout";

import "./dashboard.css";
import ChartHolder from "./ChartHolder";
import mockData from "../utils/graphdata";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashBoard = (props) => {
  const { children } = props;

  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 0, y: 0, w: 1, h: 1 },
    { i: "4", x: 1, y: 0, w: 1, h: 1 },
    { i: "5", x: 0, y: 0, w: 1, h: 1 },
    { i: "6", x: 1, y: 0, w: 1, h: 1 },
    { i: "7", x: 0, y: 0, w: 1, h: 1 },
    { i: "8", x: 1, y: 0, w: 1, h: 1 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      layouts={{ lg: layout, md: layout, sm: layout, xs: layout, xxs: layout }}
      draggableHandle=".dragable-corner"
      isDraggable
      isResizable
      useCSSTransforms
      resizeHandles={["se", "e", "n", "s", "w"]}
      // margin={[20, 20]}
      // autoSize={false}
    >
      {children}
      {/* <div className="dashboard-container"> */}
      {/* {dummyData.map((d) => {
        return (
          // <ChartHolder
          //   className="dragable-corner"
          //   key={d.id.toString()}
          //   chartType={d.chart}
          //   data={d.data}
          // />
        );
      })} */}
      {/* <div className="box box-1 dragable-corner" key="1">
        {/* <ChartHolder chartType={"bar"} data={mockData.barData}></ChartHolder> */}
      {/* </div> */}
      {/* <ChartHolder className="box box-2 dragable-corner" key={3} chartType={} data={}></ChartHolder>
      <ChartHolder className="box box-2 dragable-corner" key={4} chartType={} data={}></ChartHolder>
      <ChartHolder className="box box-2 dragable-corner" key={2} chartType={} data={}></ChartHolder>
      <ChartHolder className="box box-2 dragable-corner" key={5} chartType={} data={}></ChartHolder>
      <ChartHolder className="box box-2 dragable-corner" key={6} chartType={} data={}></ChartHolder>
      <ChartHolder className="box box-2 dragable-corner" key={7} chartType={} data={}></ChartHolder> */}
      {/* </div> */}
    </ResponsiveGridLayout>
  );
};

export default DashBoard;
