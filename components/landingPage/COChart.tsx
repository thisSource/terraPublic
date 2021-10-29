import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "CO2 reduction month per 100 € (kg)",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(252, 211, 77, 1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(0,0,0,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        0.1, 1.62, 1.03, 2.05, 3.06, 2.03, 2.08, 2.75, 3.1, 4.05, 5.1, 5.3,
      ],
    },
  ],
};

const options = {
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function COChart() {
  return (
    <div className="mt-4">
      <h2 className="text-gray-700 text-base font-semibold">
        CO2 reduction per 100 €
      </h2>
      <Line data={data} options={options} />
      <h2 className="mt-8 text-green-700 text-xs font-semibold">
        - 5,3 kg 12 months
      </h2>
    </div>
  );
}

export default COChart;
