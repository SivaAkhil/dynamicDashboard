import { useState } from "react";

import mockData from "../utils/graphdata";
import "./showallgraphtypes.css";
import ChartHolder from "./ChartHolder";
import ChartConfig from "./ChartConfig";

const ShowAllGraphTypes = (props) => {
  const [chart, setChart] = useState();

  const handleClick = (chart) => {
    setChart(chart);
  };

  if (chart) {
    return <ChartConfig chart={chart} />;
  }

  return (
    <div className="graphtypes-container">
      {mockData.map((d) => {
        return (
          <div
            key={d.id}
            className="graph-container"
            onClick={() => handleClick(d.chart)}
          >
            <ChartHolder chartType={d.chart} data={d.data} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllGraphTypes;
