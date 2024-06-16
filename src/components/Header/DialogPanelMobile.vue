<template>
    <Dialog @close="toggleMobileMenu" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
        <MobileMenuHeader @toggleMobileMenu="toggleMobileMenu" />
        <MobileMenuItems :items="navigation" />
      </DialogPanel>
    </Dialog>
  </template>
  
  <script>
  import { Dialog, DialogPanel } from '@headlessui/vue';
  import MobileMenuHeader from './MobileMenuHeader.vue';
  import MobileMenuItems from './MobileMenuItems.vue';
  
  export default {
    components: {
      Dialog,
      DialogPanel,
      MobileMenuHeader,
      MobileMenuItems
    },
    props: {
      mobileMenuOpen: Boolean,
      navigation: Array
    },
    methods: {
      toggleMobileMenu() {
        this.$emit('toggleMobileMenu');
      }
    }
  }
  </script>
  