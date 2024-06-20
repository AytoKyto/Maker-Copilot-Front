<template>
  <DefaultAppLayout>
    <div class="flex flex-col space-y-3">
      <StatsDash />
      <div class="flex items-baseline space-x-3">
        <VentesDash />
        <DefaultBox customClass="h-max w-1/3 h-[10.2rem] flex flex-col justify-between">
          <HeaderArrowNext title="Vos 5 meilleurs canaux" subtitle="en juin" to="/" :icon="UsersIcon" />
          <SourceTable />
        </DefaultBox>
      </div>
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

import {
  UsersIcon,
} from '@heroicons/vue/24/solid';
</script>