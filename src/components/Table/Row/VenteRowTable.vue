<template>
    <tr class="border-b border-gray-200">
        <td class="py-5 pl-4 pr-3 sm:pl-0">
            <div class="font-medium text-13 text-gray-900">{{ name }}</div>
            <div class="mt-1 truncate text-11 text-gray-500">{{ description }}</div>
        </td>
        <td class="hidden px-3 py-5 text-right text-13 text-gray-700 sm:table-cell">{{ client }}</td>
        <td class="hidden px-3 py-5 text-right text-13 text-gray-700 sm:table-cell">{{ ca }}</td>
        <td class="py-5 pl-3 pr-4 text-right text-13 text-gray-700 sm:pr-0">{{ benefice }}</td>
    </tr>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    name: String,
    description: String,
    client: String,
    ca: String,
    benefice: String,
});
</script>