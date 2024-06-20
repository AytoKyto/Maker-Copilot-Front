<template>
    <div class="flex space-x-2 mt-5">
        <DefaultBox customClass="h-[300px] w-2/3">
            <div class="h-full flex flex-col justify-between space-x-2 mb-3">
                <HeaderArrowNext title="Évolution de vos revenus" subtitle="sur les 5 derniers mois" :to="'/'"
                    :icon="PresentationChartLineIcon" />
                <div class="flex space-x-3 items-end h-full">
                    <p class="text-14 w-1/4 text-slate-500"><span
                            class="text-36 font-semibold text-slate-900">20%</span>
                        d'évolution de votre chiffre d'affaire par
                        rapport
                        au mois précédent</p>
                    <div class="w-3/4 h-full">
                        <LineStyledChart />
                    </div>
                </div>
            </div>
        </DefaultBox>
        <div class="w-1/3 h-52 flex flex-col space-y-2 px-2">
            <NumberCard title="Bénéfice" subtitle="Juin" value=500 unity="€" changeType="increase" change="20" />
        </div>
    </div>
</template>

<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/20/solid'
import LineStyledChart from '../../../../components/Chart/LineStyledChart.vue'
import DefaultBox from '../../../../components/Layout/DefaultBox.vue'
import NumberCard from '../../../../components/Ui/NumberCard.vue'
import HeaderArrowNext from '../../../../components/Header/HeaderArrowNext.vue'
</script>