<script setup>
// components
import StartPageNavComponent from '@/components/StartPageNavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SponsorComponent from '@/components/SponsorComponent.vue'
import RouterUtil from '@/utils/RouterUtil.vue'
</script>

<template>
  <div class="w-full min-h-screen flex items-center justify-center flex-col bg-second relative">
    <!-- Background Video -->
    <video class="fixed top-0 left-0 w-full h-screen object-cover z-0" autoplay muted loop>
      <source src="@/assets/video/intro.mp4" type="video/mp4" />
    </video>

    <div
      class="z-10 p-5 sm:w-[90%] w-full shadow-lg min-h-screen flex flex-col items-center bg-second bg-opacity-80 backdrop-blur-sm rounded-lg"
    >
      <!-- Start Page Navigation Component -->
      <StartPageNavComponent class="z-20" />

      <div class="flex my-10 z-20 justify-center items-center">
        <div class="text-center">
          <h1
            class="text-3xl sm:text-4xl font-bold select-none underline decoration-primary text-primary mb-2"
          >
            Create Your Career Profile With
          </h1>
          <span class="font-extrabold text-4xl sm:text-5xl italic text-[#222222] underline">
            MADLYNK
          </span>
        </div>
      </div>

      <!-- Router Links -->
      <div class="p-5 z-20 flex justify-center gap-5">
        <RouterUtil
          class="px-6 py-2 text-lg font-semibold border-2 rounded-lg hover:bg-second hover:text-primary border-primary text-primary transition-all"
          get="/login"
          name="Login"
        />
        <RouterUtil
          class="px-6 py-2 text-lg font-semibold border-2 rounded-lg hover:bg-second hover:text-primary border-primary text-primary transition-all"
          get="/signup"
          name="Get Started"
        />
      </div>
      <!-- sponsors  -->
      <SponsorComponent />
      <div class="my-10">
        <h1 class="text-2xl text-primary">/ Why Madlyink ?</h1>
      </div>
      <!-- Cards Section -->
      <div class="z-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div
          class="w-[300px] h-[400px] cursor-pointer bg-home-card-bg bg-cover bg-center shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all"
        >
          <div class="flex justify-end items-center text-6xl p-4 text-primary">
            <ion-icon name="person"></ion-icon>
          </div>
          <h1 class="text-start px-4 text-2xl font-semibold text-primary">Network</h1>
          <p class="px-4 mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate
            repellendus illo temporibus, excepturi quaerat in facere quas eligendi velit iure
            deleniti reprehenderit consectetur error sunt magnam assumenda quod? Deserunt.
          </p>
          <RouterLink to="/" class="text-lg hover:underline font-bold text-primary px-4 mt-4 block"
            >Other</RouterLink
          >
        </div>

        <!-- Card 2 -->
        <div
          class="w-[300px] h-[400px] cursor-pointer bg-home-card-bg bg-cover bg-center shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all"
        >
          <div class="flex justify-end items-center text-6xl p-4 text-primary">
            <ion-icon name="book"></ion-icon>
          </div>
          <h1 class="text-start px-4 text-2xl font-semibold text-primary">Education</h1>
          <p class="px-4 mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate
            repellendus illo temporibus, excepturi quaerat in facere quas eligendi velit iure
            deleniti reprehenderit consectetur error sunt magnam assumenda quod? Deserunt.
          </p>
          <RouterLink to="/" class="text-lg hover:underline font-bold text-primary px-4 mt-4 block"
            >Other</RouterLink
          >
        </div>

        <!-- Card 3 -->
        <div
          class="w-[300px] h-[400px] bg-home-card-bg bg-cover bg-center shadow-xl cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-all"
        >
          <div class="flex justify-end items-center text-6xl p-4 text-primary">
            <ion-icon name="briefcase"></ion-icon>
          </div>
          <h1 class="text-start px-4 text-2xl font-semibold text-primary">Career</h1>
          <p class="px-4 mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate
            repellendus illo temporibus, excepturi quaerat in facere quas eligendi velit iure
            deleniti reprehenderit consectetur error sunt magnam assumenda quod? Deserunt.
          </p>
          <RouterLink to="/" class="text-lg hover:underline font-bold text-primary px-4 mt-4 block"
            >Other</RouterLink
          >
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
