<template>
    <RouterLink :to="to" class="rounded-full p-4 bg-c_light_gray hover:bg-c_gray">
        <ArrowUpRightIcon class="h-4 w-4 flex-shrink-0 self-center text-slate-900" aria-hidden="true" />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ArrowUpRightIcon } from '@heroicons/vue/20/solid'

import { defineProps } from 'vue'

defineProps({
    to: String,
});
</script>
