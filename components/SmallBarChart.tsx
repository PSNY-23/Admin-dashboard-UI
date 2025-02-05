import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler );

const SmallBarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "April"];
  const datasets = [12, 45, 67, 43];
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
        borderWidth: 0.5,
        barPercentage: 0.25,
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
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Lighter grid color
          lineWidth: 0.5, // Decrease the grid line width
          drawOnChartArea: true, // Make sure grid lines are drawn on the chart area
          drawTicks: false, // Remove ticks on Y axis
          tickLength: 0, // Remove tick marks
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
        display: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Lighter grid color
          lineWidth: 0.5, // Decrease the grid line width
          drawOnChartArea: true, // Ensure grid lines are drawn on the chart area
          drawTicks: false, // Remove ticks on X axis
          tickLength: 0, // Remove tick marks
        },
      },
    },
  };
  return (
    <div style={{ width: "600px" }}>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default SmallBarChart;