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
          data: [60, 40, 30],
          backgroundColor: [
              "#E1FF72",
              "#E1BEF6",
              "#E3F5FF",
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
