import CartitianInput from "./CartitianInput";
import RadialInput from "./RadialInput";

const ConfigEditor = ({ data, chart }) => {
  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  const entities = getHeadings();

  if (chart === "line" || chart === "bar") {
    return <CartitianInput chart={chart} data={data} entities={entities} />;
  }

  if (chart === "donut" || chart === "pie" || chart === "polar") {
    return <RadialInput chart={chart} data={data} entities={entities} />;
  }
};

export default ConfigEditor;
