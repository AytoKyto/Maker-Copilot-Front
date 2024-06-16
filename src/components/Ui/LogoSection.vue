<template>
    <div class="flex flex-1 items-center gap-x-6">
      <button type="button" class="-m-3 p-3 md:hidden" @click="toggleMobileMenu">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="h-5 w-5 text-gray-900" aria-hidden="true" />
      </button>
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
  </template>
  
  <script>
  import { Bars3Icon } from '@heroicons/vue/20/solid'
  
  export default {
    components: {
      Bars3Icon
    },
    methods: {
      toggleMobileMenu() {
        this.$emit('toggleMobileMenu');
      }
    }
  }
  </script>
  