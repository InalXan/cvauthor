<template>
  <div class="w-full min-h-screen flex justify-center items-center">
    <div class="w-full min-h-screen bg-second flex justify-between flex-col md:flex-row">
      <!-- profile bar start  -->
      <!-- left side  -->
      <div
        class="w-full md:w-1/3 h-1/3 md:min-h-screen bg-profile-left-bg bg-center bg-cover text-second shadow-2xl flex flex-col"
      >
        <div class="w-full bg-second text-primary border-b">
          <h1 class="text-center p-2 text-2xl">Madlynk profile /</h1>
        </div>
        <!-- profile image -->
        <div class="w-full my-5 flex items-center flex-shrink-1 justify-around">
          <div class="border m-4 rounded-lg">
            <img
              class="w-40 m-2 p-2 rounded-full shadow-md"
              src="https://www.orbitmedia.com/wp-content/uploads/2023/06/Andy-Profile-600.png"
              alt=""
            />
            <h1 class="m-5">
              Fullstack Developer || It Consultant || It manager || Digital Network Administrator
            </h1>
            <div class="border-l m-5">
              <h1 class="flex items-center">
                <ion-icon name="person-sharp" class="mx-2 text-uiborder"></ion-icon> Jonh Doe
              </h1>
              <h1 class="flex items-center">
                <ion-icon name="today" class="mx-2 text-uiborder"></ion-icon> 12.02.2002
              </h1>
            </div>
          </div>
        </div>
        <!-- contact information  -->
        <div class="flex flex-col">
          <div class="w-full p-1 bg-second">
            <h1 class="m-4 text-primary flex items-center">
              <ion-icon class="text-uiborder mx-2" name="globe-sharp"></ion-icon>Language /
            </h1>
          </div>
          <ul class="mx-6 my-4 border-r">
            <li>
              <a href="tel:9946903434" class="flex items-center"
                ><ion-icon name="call-sharp" class="text-uiborder mx-2"></ion-icon> +9946903434</a
              >
            </li>
            <li>
              <a class="flex items-center" href="mailto:info@example.com"
                ><ion-icon class="text-uiborder mx-2" name="mail-unread-sharp"></ion-icon>
                info@example.com</a
              >
            </li>
          </ul>
        </div>
        <!-- language  -->
        <div>
          <div class="w-full p-1 bg-second">
            <h1 class="m-4 text-primary flex items-center">
              <ion-icon class="text-uiborder mx-2" name="language-sharp"></ion-icon>Contact /
            </h1>
          </div>
          <ul class="mx-6 my-4 list-disc border-r">
            <li class="m-2">Azerbaijan</li>
            <li class="m-2">Turkish</li>
            <li class="m-2">Engilish</li>
            <li class="m-2">Russian</li>
          </ul>
        </div>
        <!-- experience information  -->
        <div class="flex flex-col">
          <div class="w-full p-1 bg-second">
            <h1 class="m-4 text-primary flex items-center">
              <ion-icon class="text-uiborder mx-2" name="extension-puzzle-sharp"></ion-icon>
              Expertise /
            </h1>
          </div>
          <ul class="mx-6 my-4 border-r">
            <li>/ Vue3.js, nuxt, vite</li>
            <li>/ Express.js</li>
            <li>/ Devops (Docker)</li>
          </ul>
        </div>
      </div>
      <!-- right side  -->
      <div class="w-full md:w-2/3 min-h-screen border-b">
        <div id="logout" class="w-full flex justify-between">
          <div class="p-2">
            <img src="@/assets/images/logo/logo.png" class="w-16 rounded-lg" alt="" />
          </div>
          <div>
            <RouterLink
              to="/login"
              class="p-2 m-2 text-primary transition-all bg-second hover:text-second hover:bg-primary grid place-items-center rounded-lg shadow-md"
            >
              Logout
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- profile bar end  -->
    </div>
  </div>
</template>
