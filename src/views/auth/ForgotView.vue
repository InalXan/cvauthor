<script setup>
import InputUtil from '@/utils/InputUtil.vue'
import SubmitUtil from '@/utils/SubmitUtil.vue'
import HeaderUtil from '@/utils/HeaderUtil.vue'
import RouterIconUtil from '@/utils/RouterIconUtil.vue'
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="relative w-full flex items-center flex-col justify-center h-screen flex-wrap shadow-lg md:w-1/2 bg-second"
    >
      <div class="w-full absolute top-0 flex flex-start items-center">
        <RouterIconUtil
          class="m-2 text-primary hover:ring-primary border-2 hover:border-primary"
          get="/"
          icon="home"
        />
      </div>
      <HeaderUtil title="Forgot Password ?" class="text-primary text-3xl underline" />
      <form action="" class="flex flex-col">
        <InputUtil type="email" placeholder="Email" />
        <SubmitUtil
          value="Send"
          class="m-2 w:1/2 select none border ring hover:bg-primary hover:text-second border-primary ring-primary"
        />
        <ul class="flex justify-between items-center">
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/signup">Create account</RouterLink>
          </li>
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/login">Sign In</RouterLink>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
