import React from "react";

import { Bar, Line, Doughnut, Pie, PolarArea } from "react-chartjs-2";
import * as Zoom from "chartjs-plugin-zoom";

import "./chartholder.css";
import {
  barData,
  lineData,
  doorpidata,
  polardata,
  tableData,
} from "../utils/graphdata";

console.log("table", tableData[0].columns);

const ChartHolder = ({ chartType, data, mockData }) => {
  switch (chartType) {
    case "bar":
      console.log("reached");
      return (
        <Bar
          data={mockData === true ? barData : data}
          plugins={[Zoom]}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            pan: {
              enabled: true,
              mode: "xy",
              speed: 10,
            },
            zoom: {
              enabled: true,
              mode: "xy",
              drag: false,
              rangeMin: {
                x: 0,
                y: 0,
              },
              rangeMax: {
                x: 30,
                y: 30,
              },
            },
            title: "checking",
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      );

    case "line":
      return (
        <Line
          data={mockData === true ? lineData : data}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      );

    case "donut":
      return (
        <Doughnut
          data={mockData === true ? doorpidata : data}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      );

    case "pie":
      return (
        <Pie
          data={mockData === true ? doorpidata : data}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      );

    case "polar":
      return (
        <PolarArea
          data={mockData === true ? polardata : data}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      );

    // case "table":
    //   return (
    //     <DataGrid
    //       rows={tableData[0].rows}
    //       colomns={tableData[0].columns}
    //       // autoPageSize={true}
    //       pageSize={5}
    //     />
    //   );
    // case "bubble":
    //   return (
    //     <Bubble
    //       data={mockData === true ? bubbledata : data}
    //       options={{ maintainAspectRatio: false }}
    //     />
    //   );
    // case "radar":
    //   return (
    //     <Radar
    //       data={mockData === true ? radardata : data}
    //       options={{ maintainAspectRatio: false }}
    //     />
    //   );
    // case "scatter":
    //   return <Scatter data={mockData === true ? scatterdata : data} />;

    default:
      return <h1>"unknown chart"</h1>;
  }
};

export default ChartHolder;
