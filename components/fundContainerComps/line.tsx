import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [10, 102, 101, 102, 101, 105, 100, 102, 101, 102],
  datasets: [
    {
      fill: false,
      lineTension: 0.01,
      backgroundColor: "rgba(255,255,255,0.4)",
      borderColor: "rgba(75,92,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(20,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 100,
      data: [100, 102, 103, 105, 102, 107, 108, 108, 107, 108, 109],
    },
  ],
};

export default function FundContainer() {
  return (
    <div>
      <Line data={data} width={200} height={80} />
    </div>
  );
}
