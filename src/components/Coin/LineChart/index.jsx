import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; 

function LineChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
    },
  };

  return <div className="w-full rounded-lg my-8">
    <Line data={chartData} options={options} style={{ width: "100%", height: "100%"}}/>
  </div>;
}

export default LineChart;