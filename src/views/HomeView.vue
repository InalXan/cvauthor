<script setup>
import RouterUtil from '@/utils/RouterUtil.vue'
</script>

<template>
  <div class="w-full h-full flex items-center justify-center flex-col">
    <h1 class="text-2xl font-bold underline decoration-second text-second">
      Create Your Work Profile.
    </h1>
    <div class="p-5 flex justify-around items-center">
      <RouterUtil class="m-2" get="/login" name="Login" />
      <RouterUtil class="m-2" get="/signup" name="Get Started" />
    </div>
  </div>
</template>
