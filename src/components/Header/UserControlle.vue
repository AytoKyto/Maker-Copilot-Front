<template>
    <div class="flex flex-1 items-center justify-end gap-x-8">
      <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
        <span class="sr-only">View notifications</span>
        <BellIcon class="h-6 w-6" aria-hidden="true" />
      </button>
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </a>
    </div>
  </template>
  
  <script>
  import { BellIcon } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      BellIcon
    }
  }
  </script>
  