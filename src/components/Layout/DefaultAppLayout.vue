<template>
    <div class="w-screen min-h-screen flex justify-between items-center ">
        <DefaultAppSideBar />
        <main class="sm:px-6 lg:px-8">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import DefaultAppSideBar from '../Nav/DefaultAppSideBar.vue'
</script>