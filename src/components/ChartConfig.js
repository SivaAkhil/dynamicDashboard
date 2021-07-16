import ChartHolder from "./ChartHolder";
import "./chartconfig.css";
import { useState } from "react";
import * as XLSX from "xlsx";
import ConfigEditor from "./ConfigEditor";
// import useDataFileReader from "../utils/dataFileReader";

export default function ChartConfig(props) {
  const { chart } = props;
  const [data, setData] = useState();
  const [file, setFile] = useState();

  const handleFileInput = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function (e) {
        var bufferAray = e.target.result;
        const wb = XLSX.read(bufferAray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        /* Convert array to json*/
        const data = XLSX.utils.sheet_to_json(ws);
        setData(data);
      };

      reader.onerror = (err) => {
        return err;
      };
    }
  };

  if (data) {
    return <ConfigEditor data={data} chart={chart} />;
  }

  return (
    <div className="chartconfig-container">
      <div className="chart-container">
        <ChartHolder chartType={chart} mockData={true} />
        <h1>{chart}</h1>
      </div>
      <div className="chart-info-container">
        <div className="chartconfig-button-container">
          <div className="chartconfig-button">continue with mock Data</div>
          <input type="file" onChange={handleFileInput} />
          <div className="chartconfig-button" onClick={handleUpload}>
            Upload file
          </div>
          <div className="chartconfig-button">connect to Rest EndPoint</div>
        </div>
      </div>
    </div>
  );
}
