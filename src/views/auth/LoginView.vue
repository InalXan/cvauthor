<script setup>
import InputUtil from '@/utils/InputUtil.vue'
import SubmitUtil from '@/utils/SubmitUtil.vue'
import HeaderUtil from '@/utils/HeaderUtil.vue'
import RouterIconUtil from '@/utils/RouterIconUtil.vue'
</script>

<template>
  <div
    class="w-full h-screen bg-login-bg bg-cover overflow-hidden flex flex-col justify-center items-center"
  >
    <div
      class="relative w-full flex items-center flex-col justify-center h-screen flex-wrap shadow-lg md:w-1/2 md:bg-second bg-[rgba(255,255,255,0.6)]"
    >
      <div class="w-full absolute top-0 flex flex-start items-center">
        <RouterIconUtil
          class="m-2 text-primary hover:ring-primary border-2 hover:border-primary"
          get="/"
          icon="home"
        />
      </div>
      <HeaderUtil title="Welcome to" class="text-primary text-3xl underline" />
      <img src="@/assets/images/logo/logo-transparent.png" class="w-28 h-28 rounded-lg" alt="" />
      <form action="" class="flex flex-col">
        <InputUtil
          class="m-2 w:1/2 border md:bg-second bg-[rgba(255,255,255,0.6)] text-primary ring select-none border-primary ring-primary"
          type="email"
          placeholder="example@mail.az"
        />
        <InputUtil
          class="m-2 w:1/2 md:bg-second bg-[rgba(255,255,255,0.6)] text-primary select-none border ring border-primary ring-primary"
          type="password"
          placeholder="********"
        />
        <SubmitUtil
          value="Login"
          class="m-2 w:1/2 select-none border md:bg-second bg-[rgba(255,255,255,0.6)] ring hover:bg-primary hover:text-second border-primary ring-primary"
        />
        <ul class="flex justify-between items-center">
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/signup">Create account</RouterLink>
          </li>
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/forgot-password">Forgot Password ?</RouterLink>
          </li>
        </ul>
        <ul class="flex justify-evenly">
          <li>
            <ion-icon
              class="p-2 text-primary shadow-md text-2xl cursor-pointer"
              name="logo-google"
            ></ion-icon>
          </li>
          <li>
            <ion-icon
              class="p-2 text-primary shadow-md text-2xl cursor-pointer"
              name="logo-facebook"
            ></ion-icon>
          </li>
          <li>
            <ion-icon
              class="p-2 text-primary shadow-md text-2xl cursor-pointer"
              name="logo-github"
            ></ion-icon>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
