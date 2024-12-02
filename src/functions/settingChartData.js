import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices) => {
  setChartData({
    labels: prices?.map((data) => gettingDate(data[0])),
    datasets: [
      {
        data: prices?.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(247, 182, 84,0.1)",
        tension: 0.25,
        borderColor: "#fab44c",
        pointRadius: 0,
        yAxisID: "crypto1",
      },
    ],
  });
};
