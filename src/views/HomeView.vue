<script setup>
import RouterUtil from '@/utils/RouterUtil.vue'
</script>

<template>
  <div class="w-full h-full flex items-center justify-center flex-col">
    <div class="p-5 sm:w-1/2 w-full h-screen flex flex-col justify-center items-center bg-second">
      <div class="flex justify-center items-center">
        <h1 class="text-2xl font-bold m-2 select-none underline decoration-primary text-primary">
          Create Your Work Profile.
        </h1>
      </div>
      <div class="p-5 flex justify-around items-center">
        <RouterUtil
          class="m-2 select-none border ring hover:bg-second hover:text-primary border-primary ring-primary text-[rgba(0,0,0,0.3)]"
          get="/login"
          name="Login"
        />
        <RouterUtil
          class="m-2 select-none border ring hover:bg-second hover:text-primary border-primary ring-primary text-[rgba(0,0,0,0.3)]"
          get="/signup"
          name="Get Started"
        />
      </div>
    </div>
  </div>
</template>
