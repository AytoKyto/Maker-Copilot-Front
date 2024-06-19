<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement
} from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
);

const chartData = {
  labels: ["Bénéfice", "Dépense"],
  datasets: [
      {
          label: "My First Dataset",
          data: [60, 40],
          backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(255, 205, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(201, 203, 207, 0.8)"
          ],
          hoverOffset: 4
      }
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  responsive: true
};
</script>
