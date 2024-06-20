<template>
    <DefaultBox customClass="h-full w-1/2 h-[300px] flex flex-col justify-between">
        <HeaderArrowNext :title="title" :subtitle="subtitle" to="/" :icon="ChartBarIcon" />
        <div class="flex items-baseline space-x-3">
            <p class="text-36 font-semibold">{{ value }} {{ unity }}</p>
            <div
                :class="[changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm w-16 h-7 font-medium md:mt-2 lg:mt-0']">
                <ArrowUpIcon v-if="changeType === 'increase'"
                    class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                <ArrowDownIcon v-else class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true" />
                <span class="sr-only"> {{ changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                {{ change }} %
            </div>
        </div>
    </DefaultBox>
</template>

<script setup>
import DefaultBox from '../Layout/DefaultBox.vue'
import HeaderArrowNext from '../Header/HeaderArrowNext.vue'
import { ArrowDownIcon, ArrowUpIcon, ChartBarIcon } from '@heroicons/vue/20/solid'

import { defineProps } from 'vue'

defineProps({
    title: String,
    subtitle: String,
    value: [String, Number], // This prop can be either a string or a number, depending on usage.
    unity: String,
    changeType: String,
    change: String
});
</script>
