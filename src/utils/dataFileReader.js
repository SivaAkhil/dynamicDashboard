import { useState } from "react";
import XLSX from "xlsx";

const useDataFileReader = (props) => {
  // const { file } = props;

  const [data, setData] = useState();

  if (!props.file) return;

  if (props.file) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(props.file);

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

    return data;
  }
  return null;
};

export default useDataFileReader;
