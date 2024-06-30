<template>
  <DefaultAppLayout>
    <div class="flex flex-col space-y-3 pr-3">
      <StatsDash />
      <div class="flex items-baseline space-x-3">
        <VentesDash />
        <DefaultBox customClass="w-1/3 h-[400px] flex flex-col justify-between">
          <HeaderArrowNext title="Vos 5 meilleurs canaux" subtitle="en juin" to="/" :icon="UsersIcon" />
          <SourceTable />
        </DefaultBox>
        <DefaultBox customClass="w-1/3 h-[400px] flex flex-col justify-between">
          <HeaderArrowNext title="Vos 5 meilleurs clients" subtitle="en juin" to="/" :icon="UsersIcon" />
          <SourceTable />
        </DefaultBox>
      </div>
      <DefaultBox customClass="w-full">
        <div class="h-full flex flex-col justify-between space-x-2 mb-3">
          <HeaderArrowNext title="Évolution de vos revenus" subtitle="sur les 5 derniers mois" :to="'/'"
            :icon="PresentationChartLineIcon" />
          <div class="h-[350px] mt-3">
            <LineStyledChart />
          </div>
        </div>
      </DefaultBox>
    </div>
  </DefaultAppLayout>
</template>

<script setup>
import DefaultAppLayout from '../../../components/Layout/DefaultAppLayout.vue'
import DefaultBox from '../../../components/Layout/DefaultBox.vue'
import HeaderArrowNext from '../../../components/Header/HeaderArrowNext.vue'
import StatsDash from './components/StatsDash.vue';
import VentesDash from './components/VentesDash.vue';
import SourceTable from '../../../components/Table/Other/SourceTable.vue'
import LineStyledChart from '../../../components/Chart/LineStyledChart.vue'

import {
  UsersIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/24/solid';
</script>