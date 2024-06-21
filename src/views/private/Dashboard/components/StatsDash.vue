<template>
    <div class="flex space-x-3 mt-5">
        <DefaultBox customClass="h-[300px] w-2/3">
            <div class="flex flex-col justify-between space-x-3 mb-3">
                <HeaderArrowNext title="Votre chiffre d'affaire" subtitle="Juin" :to="'/'"
                    :icon="PresentationChartLineIcon" />
                <div class="h-full flex flex-col space-y-5 mt-3">
                    <div class="flex flex-col space-y-3">
                        <div class="flex items-baseline space-x-3">
                            <p class="text-42 font-semibold text-slate-800">1 256€</p>
                            <p class="text-12 text-slate-600">votre objectif 2 500€</p>
                        </div>
                        <div class="w-full h-2 bg-slate-600 rounded-full">
                            <div class="w-[60%] h-full bg-c_green rounded-full" />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <div class="flex items-baseline space-x-3">
                            <p class="text-12 text-slate-600">Répartition par catégorie</p>
                        </div>
                        <div class="w-full h-2 flex space-x-1">
                            <div class="w-[60%] h-full bg-c_green rounded-full" />
                            <div class="w-[20%] h-full bg-c_purple rounded-full" />
                            <div class="w-[10%] h-full bg-c_light_bleu rounded-full" />
                            <div class="w-[10%] h-full bg-amber-500 rounded-full" />
                        </div>
                        <div class="w-full flex space-x-1">
                            <div class="w-[60%] min-w-[10%] h-full">
                                <div class="flex space-x-3 items-baseline">
                                    <div class="h-2 w-2 rounded-full bg-c_green" />
                                    <div class="flex flex-col">
                                        <p class="text-12 font-semibold text-slate-600">Catégorie 1</p>
                                        <p class="text-12 text-slate-700">234 € / 60%</p>
                                    </div>
                                </div>

                            </div>
                            <div class="w-[20%] min-w-[10%] h-full">
                                <div class="flex space-x-3 items-baseline">
                                    <div class="h-2 w-2 rounded-full bg-c_purple" />
                                    <div class="flex flex-col">
                                        <p class="text-12 font-semibold text-slate-600">Catégorie 1</p>
                                        <p class="text-12 text-slate-700">234 € / 60%</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[10%] min-w-[10%] h-full">
                                <div class="flex space-x-3 items-baseline">
                                    <div class="h-2 w-2 rounded-full bg-c_light_bleu" />
                                    <div class="flex flex-col">
                                        <p class="text-12 font-semibold text-slate-600">Catégorie 1</p>
                                        <p class="text-12 text-slate-700">234 € / 60%</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-[10%] min-w-[10%] h-full">
                                <div class="flex space-x-3 items-baseline">
                                    <div class="h-2 w-2 rounded-full bg-amber-500" />
                                    <div class="flex flex-col">
                                        <p class="text-12 font-semibold text-slate-600">Catégorie 1</p>
                                        <p class="text-12 text-slate-700">234 € / 60%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultBox>
        <div class="h-full w-1/3">
            <NumberCard title="Votre bénéfice moyen" subtitle="depuis Janvier 2024" value=68.4 unity="%" subvalue="650 €" subtitlevalue="en juin"
                changeType="increase" change="20" />
        </div>
    </div>
</template>

<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/20/solid'
import DefaultBox from '../../../../components/Layout/DefaultBox.vue'
import NumberCard from '../../../../components/Ui/NumberCard.vue'
import HeaderArrowNext from '../../../../components/Header/HeaderArrowNext.vue'
</script>