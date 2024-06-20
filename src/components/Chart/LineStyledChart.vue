<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip  // Register the Tooltip module
);

const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Chiffre d'affaire",
            data: [2700, 1600, 1880, 1900, 2000, 2200, 2500],
            backgroundColor: "#E1BEF6",
            borderColor: "#E1BEF6",
            borderWidth: 2,
            fill: false,
            tension: 0.4
        },
        {
            label: "Bénéfice",
            data: [1200, 1000, 1700, 1800, 1900, 1900, 2000],
            backgroundColor: "#E1FF72",
            borderColor: "#E1FF72",
            borderWidth: 2,
            fill: false,
            tension: 0.4
        },
    ],
};

const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: false  // Hide the legend
        },
        tooltip: {
            enabled: true,  // Enable tooltips
            mode: 'index',  // Show tooltip at all points along the index
            intersect: false, // Show tooltip even if not hovering directly on the line
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += context.parsed.y;
                    }
                    return label;
                }
            }
        }
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    },
    elements: {
        line: {
            borderWidth: 2
        },
        point: {
            radius: 1
        }
    }
};
</script>
