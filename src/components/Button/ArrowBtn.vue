<template>
    <RouterLink :to="to" class="rounded-full p-5 bg-c_light_gray hover:bg-c_gray">
        <ArrowUpRightIcon class="h-5 w-5 flex-shrink-0 self-center text-slate-900" aria-hidden="true" />
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
