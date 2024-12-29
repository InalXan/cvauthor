<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col bg-second relative">
    <div
      class="z-10 p-5 sm:w-[90%] w-full shadow-lg min-h-screen flex flex-col items-center bg-second bg-opacity-80 backdrop-blur-sm rounded-lg"
    >
      <StartPageNavComponent />

      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import StartPageNavComponent from '@/components/StartPageNavComponent.vue'
</script>
