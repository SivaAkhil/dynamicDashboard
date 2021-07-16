import _ from "lodash";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { v4 as uuid } from "uuid";

import "./CartitianInput.css";
import { useState } from "react";
import { connect } from "react-redux";
import randomColor from "../utils/randomColor";

const CartitianInput = ({
  chart,
  data,
  entities,
  createMetric,
  closeModal,
  closeMetric,
}) => {
  const [xaxis, setXais] = useState(entities[0]);
  const [yaxis, setYaxis] = useState(entities[1]);
  const [error, setError] = useState(false);
  const [graphName, setGraphName] = useState("");
  const [chartName, setChartName] = useState("");

  if (xaxis === yaxis && error === false) {
    setError(true);
  }

  if (xaxis !== yaxis && error === true) {
    setError(false);
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const xData = data.map((obj) => _.get(obj, xaxis));
    const yData = data.map((obj) => _.get(obj, yaxis));

    let dataset;

    if (chart === "line") {
      dataset = [
        {
          label: graphName,
          data: yData,
          borderColor: randomColor(),
          fill: false,
        },
      ];
    } else {
      dataset = [
        {
          label: graphName,
          data: yData,
          backgroundColor: new Array(xData).fill(randomColor()),
          borderWidth: 1,
        },
      ];
    }

    const chartdata = {
      rawdata: data,
      id: uuid(),
      chartType: chart,
      chartName: chartName,
      layout: { i: "1", x: 0, y: 0, w: 1, h: 1 },
      data: {
        labels: xData,
        datasets: dataset,
      },
    };

    createMetric(chartdata);
    closeMetric();
    closeModal();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <p>GraphName</p>
        <TextField value={chartName} onChange={handleChartnameChange} />
        <p>GraphName</p>
        <TextField value={graphName} onChange={handleGraphnameChange} />
        <p>Select Axis Data</p>
        <p>Select Item to display on x-axis</p>
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
        <p>Select Item to display on y-axis (choose Integer type Data)</p>
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

        {/* <p>Sort By options</p> */}
        {/* <TextField select value={yaxis ? yaxis : ""} onChange={handleYChange}>
          {entities.map((e) => {
            console.log(e);
            return (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            );
          })}
        </TextField> */}
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

export default connect(null, mapDispatchToProps)(CartitianInput);

// manual input

// const LineInput = () => {
//   // line Chart

//   const intialChartData = [
//     {
//       id: uuid(),
//       graphName: "",
//       color: { r: 0, g: 0, b: 0 },
//       isPickerOpen: false,
//       axis: [{ id: uuid(), x: "", y: "" }],
//     },
//   ];

//   const [chartData, setChartData] = useState(intialChartData);
//   const [chartName, setChartName] = useState("");

//   const handleChartNameInput = (e) => {
//     setChartName(e.target.value);
//   };

//   const handleAddAxis = (aindex, gindex) => {
//     const cdata = [...chartData];
//     cdata[gindex].axis.push({ id: uuid(), x: "", y: "" });
//     setChartData(cdata);
//   };

//   const handleRemoveAxis = (aindex, gindex) => {
//     if (chartData[gindex].axis.length <= 1) return;
//     const cdata = [...chartData];
//     cdata[gindex].axis.splice(aindex, 1);
//     setChartData(cdata);
//   };

//   const handleAddGraph = () => {
//     setChartData([
//       ...chartData,
//       {
//         id: uuid(),
//         graphName: "",
//         color: { r: 0, g: 0, b: 0 },
//         isPickerOpen: false,
//         axis: [{ id: uuid(), x: "", y: "" }],
//       },
//     ]);
//   };

//   const handleRemoveGraph = (index) => {
//     if (chartData.length === 1) return;
//     const graphs = [...chartData];
//     graphs.splice(index, 1);
//     setChartData(graphs);
//   };

//   const toggleColorPicker = (gindex) => {
//     const cdata = [...chartData];
//     cdata[gindex].isPickerOpen = !chartData[gindex].isPickerOpen;
//     setChartData(cdata);
//   };

//   const setColor = (gindex, newColor) => {
//     if (chartData[gindex].color === newColor) return;
//     const cdata = [...chartData];
//     cdata[gindex].color = newColor;
//     setChartData(cdata);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(chartData);
//   };

//   const handleInputChange = (e, gindex, aindex) => {
//     const { value, name } = e.target;
//     const cdata = [...chartData];
//     if (aindex != null || undefined) {
//       cdata[gindex].axis[aindex][name] = value;
//     } else {
//       cdata[gindex][name] = value;
//     }
//     setChartData(cdata);
//   };

//   return (
//     <div className="lineinput-container">
//       <h1>Line Chart</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="chartName">Chart Name</label>
//         <TextField
//           type="text"
//           value={chartName}
//           onChange={handleChartNameInput}
//         />
//         {chartData.map((g, i) => {
//           return (
//             <div key={g.id}>
//               <p>Graph: {i + 1}</p>
//               <label htmlFor="">Graph Name</label>
//               <TextField
//                 name="graphName"
//                 value={g.graphName}
//                 onChange={(e) => handleInputChange(e, i)}
//               />
//               <p>Axis Config</p>
//               <p>x-axis y-axis</p>
//               {g.axis.map((a, idx) => {
//                 return (
//                   <div key={a.id}>
//                     <TextField
//                       type="text"
//                       name="x"
//                       value={a.x}
//                       onChange={(e) => handleInputChange(e, i, idx)}
//                     />
//                     <TextField
//                       type="text"
//                       name="y"
//                       value={a.y}
//                       onChange={(e) => handleInputChange(e, i, idx)}
//                     />
//                     <div onClick={() => handleRemoveAxis(idx, i)}>---</div>
//                     <div type="button" onClick={() => handleAddAxis(idx, i)}>
//                       ++
//                     </div>
//                   </div>
//                 );
//               })}
//               <p>graphColor:-</p>
//               {g.isPickerOpen && (
//                 <CompactPicker
//                   color={g.color}
//                   onChange={(color) => setColor(i, color)}
//                 />
//               )}
//               <button onClick={() => toggleColorPicker(i)}>
//                 {g.isPickerOpen ? "Pick Color" : "Choose Color"}
//               </button>
//               <button onClick={() => handleRemoveGraph(i)}>Remove Graph</button>
//               <button type="button" onClick={() => handleAddGraph(i)}>
//                 Add Graph
//               </button>
//             </div>
//           );
//         })}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LineInput;
