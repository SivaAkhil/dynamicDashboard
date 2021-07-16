import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { connect } from "react-redux";

import randomColor from "../utils/randomColor";

const RadialInput = (props) => {
  const { chart, data, entities, createMetric, closeModal, closeMetric } =
    props;

  const [graphName, setGraphName] = useState("");
  const [chartName, setChartName] = useState("");
  const [xaxis, setXais] = useState(entities[0]);
  const [yaxis, setYaxis] = useState(entities[1]);
  const [error, setError] = useState(false);

  if (xaxis === yaxis && error === false) {
    setError(true);
  }

  if (xaxis !== yaxis && error === true) {
    setError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const xData = data.map((obj) => _.get(obj, xaxis));
    const yData = data.map((obj) => _.get(obj, yaxis));

    let dataset;

    // if (chart === "donut" || chart === "pie") {
    dataset = [
      {
        label: graphName,
        data: yData,
        backgroundColor: new Array(xData.length)
          .fill(0)
          .map((a) => randomColor()),
        hoverOffset: 4,
      },
    ];
    // } else {
    //   dataset = [
    //     {
    //       label: graphName,
    //       data: yData,
    //       backgroundColor: new Array(xData).map((a) => randomColor()),
    //       borderWidth: 1,
    //     },
    //   ];
    // }

    const chartdata = {
      rawdata: data,
      id: uuid(),
      chartType: chart,
      chartName: chartName,
      layout: { i: "1", x: 0, y: 0, w: 3, h: 3 },
      data: {
        labels: xData,
        datasets: dataset,
      },
    };

    createMetric(chartdata);
    closeMetric();
    closeModal();
  };

  const handleXChange = (e) => {
    setXais(e.target.value);
  };

  const handleYChange = (e) => {
    setYaxis(e.target.value);
  };

  const handleGraphnameChange = (e) => {
    setGraphName(e.target.value);
  };

  const handleChartnameChange = (e) => {
    setChartName(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <p>GraphName:-</p>
        <TextField value={chartName} onChange={handleChartnameChange} />
        <p>GraphName</p>
        <TextField value={graphName} onChange={handleGraphnameChange} />
        <p>Select Radial Data</p>
        <p>Select labels entity</p>
        <TextField
          select
          value={xaxis ? xaxis : ""}
          onChange={handleXChange}
          error={error}
        >
          {entities.map((e) => {
            return (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            );
          })}
        </TextField>
        <p>Select Data Entity</p>
        <TextField
          select
          value={yaxis ? yaxis : ""}
          onChange={handleYChange}
          error={error}
        >
          {entities.map((e) => {
            return (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            );
          })}
        </TextField>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMetric: (payload) =>
      dispatch({ type: "newDashboard/createMetric", payload: payload }),
    closeModal: () => dispatch({ type: "modal/closeModal" }),
    closeMetric: () => dispatch({ type: "dashboard/createMetric" }),
  };
};

export default connect(null, mapDispatchToProps)(RadialInput);

// end data format

// const data = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };
