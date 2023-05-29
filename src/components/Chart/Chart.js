import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let maxAmountValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
          maxValue={maxAmountValue}
        />
      ))}
    </div>
  );
};

export default Chart;
