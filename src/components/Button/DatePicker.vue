<template>
    <div class="">
        <vue-tailwind-datepicker i18n="id" :auto-apply="false" :options="options" v-model="dateValue"
            :formatter="formatter" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const dateValue = ref([]);
const formatter = ref({
    date: 'DD MMM YYYY',
    month: 'MMM',
})
const options = ref({
    shortcuts: {
        today: "Aujourd'hui",
        yesterday: "Hier",
        past: (period) => `Les ${period} derniers jours`,
        currentMonth: "Ce mois-ci",
        pastMonth: "Le mois dernier",
    },
    footer: {
        apply: "Appliquer",
        cancel: "Annuler",
    },
});
</script>
