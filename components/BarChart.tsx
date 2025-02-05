import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

const MyBarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Sales",
        data: datasets,
        backgroundColor: [
          "#86A0FF",
          "#d1d5db",
          "#86A0FF",
          "#d1d5db",
        ],
        borderColor: [
          "#d1d5db",
          "#d1d5db",
          "#d1d5db",
          "#d1d5db",
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
      // insert similar in dataset object for making multi bar chart
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        display: true,
        beginAtZero: true,
        max: 100,
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
        display: true,
      },
    },
  };
  return (
    <div style={{ width: "1000px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyBarChart;