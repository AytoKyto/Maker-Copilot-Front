<template>
    <div class="flex space-x-2 mt-5">
        <DefaultBox customClass="h-[14.5rem] w-1/2">
            <div class="h-full flex flex-col justify-between space-x-2 mb-3">
                <HeaderArrowNext title="Évolution de vos revenus" subtitle="sur les 3 derniers mois" :to="'/'"
                    :icon="PresentationChartLineIcon" />
                <div class="flex space-x-3 items-end h-full">
                    <p class="text-14 w-1/3 text-slate-500"><span
                            class="text-36 font-semibold text-slate-900">20%</span>
                        d'évolution de vos bénéfices par
                        rapport
                        au mois précédent</p>
                    <div class="w-2/3 h-full">
                        <CustombarChart />
                    </div>
                </div>
            </div>
        </DefaultBox>
        <div class="w-1/2 h-52 flex flex-col space-y-2 px-2">
            <div class="h-full flex items-center justify-between space-x-2 mb-3">
                <p class="text-20 font-semibold">Balence de ventes</p>
                <div class="flex space-x-5 items-center">
                    <DatePicker />
                    <div class="rounded-full p-4 bg-c_smoke_white hover:bg-c_gray cursor-pointer">
                        <EllipsisHorizontalIcon class="h-5 w-5 flex-shrink-0 self-center text-slate-900"
                            aria-hidden="true" />
                    </div>
                </div>
            </div>
            <div class="h-full flex space-x-2">
                <NumberCard title="Chiffre d'affaire" subtitle="Juin" value=1000 unity="€" changeType="increase"
                    change="20" />
                <NumberCard title="Bénéfice" subtitle="Juin" value=500 unity="€" changeType="increase"
                    change="20" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { EllipsisHorizontalIcon, PresentationChartLineIcon } from '@heroicons/vue/20/solid'
import CustombarChart from '../../../../components/Chart/CustombarChart.vue'
import DefaultBox from '../../../../components/Layout/DefaultBox.vue'
import NumberCard from '../../../../components/Ui/NumberCard.vue'
import DatePicker from '../../../../components/Button/DatePicker.vue'
import HeaderArrowNext from '../../../../components/Header/HeaderArrowNext.vue'
</script>