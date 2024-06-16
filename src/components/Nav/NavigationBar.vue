<template>
    <nav class="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
      <a v-for="(item, itemIdx) in items" :key="itemIdx" :href="item.href">{{ item.name }}</a>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      items: Array
    }
  }
  </script>
  