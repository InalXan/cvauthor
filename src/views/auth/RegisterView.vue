<script setup>
import InputUtil from '@/utils/InputUtil.vue'
import SubmitUtil from '@/utils/SubmitUtil.vue'
import HeaderUtil from '@/utils/HeaderUtil.vue'
import RouterIconUtil from '@/utils/RouterIconUtil.vue'
</script>

<template>
  <div
    class="w-full h-screen bg-logo-bg bg-cover bg-center overflow-hidden flex justify-center items-center"
  >
    <div
      class="relative w-full flex items-center flex-col justify-center h-screen flex-wrap shadow-lg md:w-1/2 bg-[rgba(255,255,255,0.6)]"
    >
      <div class="w-full absolute top-0 flex flex-start items-center">
        <RouterIconUtil
          class="m-2 text-primary hover:ring-primary border-2 hover:border-primary"
          get="/"
          icon="home"
        />
      </div>
      <HeaderUtil title="Welcome Client" class="text-primary text-3xl underline" />
      <form action="" class="flex flex-col">
        <InputUtil type="text" placeholder="First Name" />
        <InputUtil type="text" placeholder="Last Name" />
        <InputUtil type="email" placeholder="example@mail.az" />
        <InputUtil type="number" placeholder="+ ( *** ) ** **" />
        <InputUtil type="password" placeholder="********" />
        <SubmitUtil
          value="Register"
          class="m-2 w:1/2 font-bold select none border ring hover:bg-primary hover:text-second border-primary ring-primary"
        />
        <ul class="flex justify-between items-center">
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/login">Have your account ?</RouterLink>
          </li>
          <li class="underline text-primary text-sm m-2">
            <RouterLink to="/forgot-password">Forgot Password ?</RouterLink>
          </li>
        </ul>
        <ul class="flex justify-evenly">
          <li>
            <ion-icon
              class="p-2 text-primary bg-second rounded-lg shadow-md text-2xl cursor-pointer"
              name="logo-google"
            ></ion-icon>
          </li>
          <li>
            <ion-icon
              class="p-2 text-primary bg-second rounded-lg shadow-md text-2xl cursor-pointer"
              name="logo-facebook"
            ></ion-icon>
          </li>
          <li>
            <ion-icon
              class="p-2 text-primary bg-second rounded-lg shadow-md text-2xl cursor-pointer"
              name="logo-github"
            ></ion-icon>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
