<template>
    <button @click="onClick"
        class="rounded-md px-3 py-2 text-sm font-semibold bg-c_light_gray hover:bg-c_gray border-slate-800 border text-slate-800">
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
