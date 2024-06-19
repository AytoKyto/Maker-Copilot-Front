<template>
    <div class="flex justify-between">
        <div class="flex justify-start items-start space-x-2">
            <div class="rounded-full p-5 bg-slate-900">
                <component :is="icon" class="h-4 w-4 flex-shrink-0 self-center text-slate-50" aria-hidden="true" />
            </div>
            <div class="flex flex-col">
                <p class="text-18 font-semibold">{{ title }}</p>
                <p v-if="subtitle" class="text-13 text-slate-600">{{ subtitle }}</p>
            </div>
        </div>
        <ArrowBtn :to="to" />
    </div>
</template>

<script setup>
import ArrowBtn from '../Button/ArrowBtn.vue'
import { defineProps } from 'vue'

defineProps({
    title: String,
    subtitle: String,
    to: String,
    icon: Function
});
</script>
