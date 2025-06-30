import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const GenderWeeklyAccessChart = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Male",
          data: [23, 30, 15, 20, 25, 28, 35],
        },
        {
          name: "Female",
          data: [25, 20, 30, 35, 40, 30, 25],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 10,
        },
      },
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => {
          return val + "";
        },
      },
      colors: ["#008FFB", "#FF4560"],
      legend: {

      },
      title: {
        text: "Weekly Access",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#8A8B8C",
          fontWeight:500
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="chart"></div>;
};

export default GenderWeeklyAccessChart;
