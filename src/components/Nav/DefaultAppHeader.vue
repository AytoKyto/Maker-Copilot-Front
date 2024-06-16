<template>
    <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoSection @toggleMobileMenu="toggleMobileMenu"/>
        <NavigationBar :items="navigation" />
        <UserControls />
      </div>
    </header>
  </template>
  
  <script>
  import LogoSection from '../Ui/LogoSection.vue';
  import NavigationBar from './NavigationBar.vue';
  import UserControls from './UserControls.vue';
  
  export default {
    components: {
      LogoSection,
      NavigationBar,
      UserControls
    },
    props: {
      navigation: Array,
    },
    methods: {
      toggleMobileMenu() {
        this.$emit('toggleMobileMenu');
      }
    }
  }
  </script>
  