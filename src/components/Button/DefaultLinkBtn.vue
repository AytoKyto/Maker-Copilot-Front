<template>
    <RouterLink :to="to"
        class="rounded-md px-3 py-2 text-sm font-semibold bg-c_light_gray hover:bg-c_gray border-slate-800 border text-slate-800">{{ title
        }}</RouterLink>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router';

defineProps({
    title: String,
    to: String,
});
</script>
