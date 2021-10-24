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
      label: "Fund development %",
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
      data: [0.1, 0.2, 1.0, 0.5, 1.1, 2.0, 2.5, 1.5, 2.0, 2.5, 3.0, 4.2],
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

function DevChart() {
  return (
    <div className="mt-4">
      <h2 className="text-gray-700 text-base font-semibold">
        Development 12 months
      </h2>
      <Line data={data} options={options} />
      <h2 className="mt-8 text-green-700 text-xs font-semibold">
        12 months + 4,2 %
      </h2>
    </div>
  );
}

export default DevChart;
