<template>
    <DefaultBox customClass="w-1/3 h-[400px]">
        <div class="h-full flex flex-col justify-between space-x-2 mb-3">
            <HeaderArrowNext title="Vos dernières ventes" subtitle="4 dernières ventes de juin" to="/sales"
                :icon="PresentationChartLineIcon" />
            <div class="flex space-x-3 items-end">
                <div class="w-full">
                    <VenteLayoutTable>
                        <VenteHeaderTable />
                        <tbody>
                            <VenteRowTable v-for="item in ventes" :key="item.id" :name="item.name"
                                :description="item.description" :client="item.client" :ca="item.ca"
                                :benefice="item.benefice" />
                        </tbody>
                    </VenteLayoutTable>
                </div>
            </div>
        </div>
    </DefaultBox>
</template>

<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/20/solid'
import DefaultBox from '../../../../components/Layout/DefaultBox.vue'
import HeaderArrowNext from '../../../../components/Header/HeaderArrowNext.vue'
import VenteLayoutTable from '../../../../components/Table/Layout/VenteLayoutTable.vue'
import VenteHeaderTable from '../../../../components/Table/Header/VenteHeaderTable.vue'
import VenteRowTable from '../../../../components/Table/Row/VenteRowTable.vue'

const ventes = [
    {
        id: 1,
        name: 'Slow-01-07-24',
        description: '5 produits vendue',
        client: 'Slow',
        ca: '100 €',
        benefice: '32 €',
    },
    {
        id: 2,
        name: 'Slow-01-07-24',
        description: '5 produits vendue',
        client: 'Slow',
        ca: '100 €',
        benefice: '32 €',
    },
    {
        id: 3,
        name: 'Slow-01-07-24',
        description: '5 produits vendue',
        client: 'Slow',
        ca: '100 €',
        benefice: '32 €',
    },
    {
        id: 4,
        name: 'Slow-01-07-24',
        description: '5 produits vendue',
        client: 'Slow',
        ca: '100 €',
        benefice: '32 €',
    },

]
</script>