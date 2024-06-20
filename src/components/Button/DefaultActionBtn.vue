<template>
    <button @click="onClick"
        class="rounded-md px-3 py-2 text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-c_smoke_white">
        {{ title }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    to: String,
    onClick: Function
});
</script>
