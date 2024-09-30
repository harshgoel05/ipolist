"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Necessary for chart.js to work
import { GMPEntry } from "@/utils/types";
import { convertDateTimeToDateFormatter } from "@/utils/helpers";

const PriceChart = ({ gmpTimeline }: { gmpTimeline: GMPEntry[] }) => {
  const filteredData = gmpTimeline
    .filter((item) => item.price !== null)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  // Prepare chart data
  const chartData = {
    labels: filteredData.map((item) =>
      convertDateTimeToDateFormatter(item.date)
    ),
    datasets: [
      {
        label: "GMP",
        data: filteredData.map((item) => item.price),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // For smooth curve
      },
    ],
  };

  // Chart configuration options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="w-full sm:w-1/2 bg-[#2A2A2A] p-8">
      <h2 className="text-xl font-semibold mb-4">Grey Market Premium Trend</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default PriceChart;
