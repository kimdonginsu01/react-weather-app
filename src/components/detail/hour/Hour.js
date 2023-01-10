import { useEffect } from "react";
import Chart from "chart.js";
import { timeFormat } from "../../../plugins/format";

export default function Hour({ weatherData }) {
  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: weatherData.hourly.map((item) => timeFormat(item.dt)),
        datasets: [
          {
            label: "Temp",
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: weatherData.hourly.map((item) => item.temp),
          },
          {
            label: "Feels like",
            fill: false,
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: weatherData.hourly.map((item) => item.feels_like),
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Time",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Temperature",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [weatherData]);
  return (
    <>
      <div className="shadow-lg rounded bg-violet-400 mt-[24px] mx-[24px] w-[90%] min-h-[400px]">
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-700-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
