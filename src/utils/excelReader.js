import * as XLSX from "xlsx";

const readExcel = (file) => {
  var reader = new FileReader();
  reader.readAsArrayBuffer(file);

  let data;

  reader.onload = function (e) {
    var bufferAray = e.target.result;
    data = reader.result;
  };

  reader.onerror = (err) => {
    return err;
  };

  const wb = XLSX.read(data, { type: "buffer" });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];

  /* Convert array to json*/
  const result = XLSX.utils.sheet_to_json(ws);
  return result;
};

export default readExcel;
