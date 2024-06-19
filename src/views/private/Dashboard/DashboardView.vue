<template>
  <DefaultAppLayout>
    <div class="flex flex-col space-y-3">
      <StatsDash />
      <div class="flex items-center space-x-3">
        <VentesDash />
        <NumberCard title="Chiffre d'affaire" subtitle="Juin" value=1000 unity="€" changeType="increase" change="20" />
      </div>
    </div>
  </DefaultAppLayout>
</template>

<script setup>
import DefaultAppLayout from '../../../components/Layout/DefaultAppLayout.vue'
import StatsDash from './components/StatsDash.vue';
import VentesDash from './components/VentesDash.vue';
import NumberCard from '../../../components/Ui/NumberCard.vue'
</script>