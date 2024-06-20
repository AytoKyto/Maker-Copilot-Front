<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "#E1BEF6",
            borderColor: "#E1BEF6",
            borderWidth: 2,
            fill: true,
            tension: 0.4
        },
    ],
};

const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
</script>
