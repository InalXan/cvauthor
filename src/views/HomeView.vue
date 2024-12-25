<script setup>
import RouterUtil from '@/utils/RouterUtil.vue'
</script>

<template>
  <div
    class="w-full h-screen bg-home-bg bg-cover flex items-center overflow-hidden justify-center flex-col"
  >
    <div
      class="p-5 sm:w-[90%] w-full shadow-lg h-screen flex flex-col justify-center items-center bg-[rgba(255,255,255,0.6)]"
    >
      <div class="flex justify-center items-center">
        <div class="text-left">
          <h1
            class="text-2xl sm:text-3xl font-bold select-none underline decoration-primary text-second"
          >
            Create Your Career Profile With
          </h1>
          <span class="font-extrabold text-3xl sm:text-4xl italic text-primary underline"
            >MADLYNK</span
          >
        </div>
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
