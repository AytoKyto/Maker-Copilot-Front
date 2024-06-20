<template>
    <div class="w-screen min-h-screen flex justify-between bg-c_light_gray">
        <DefaultAppSideBarNew />
        <main class="min-h-screen w-full ml-24">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import DefaultAppSideBarNew from '../Nav/DefaultAppSideBarNew.vue'
</script>