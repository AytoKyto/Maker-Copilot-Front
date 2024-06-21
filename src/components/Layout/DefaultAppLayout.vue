<template>
    <div class="w-screen min-h-screen flex justify-between bg-c_light_gray">
        <DefaultAppSideBarNew />
        <main class="min-h-screen h-full w-full ml-24 py-3">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import DefaultAppSideBarNew from '../Nav/DefaultAppSideBarNew.vue'
</script>