<template>
  <div
    class="relative w-full min-h-[30vh] my-10 bg-primary flex items-center flex-col justify-center"
  >
    <div><img src="@/assets/images/logo/logo.png" class="w-16 m-3 rounded-lg" alt="" /></div>
    <ul class="flex">
      <li v-for="FooterItem in FooterItems" :key="FooterItem">
        <RouterLink :to="FooterItem.link" class="m-2 text-second">
          {{ FooterItem.name }}
        </RouterLink>
      </li>
    </ul>
    <div>
      <h1 class="flex items-center text-uiborder m-8">&copy all right reserved InalXan</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FooterItems: [
        { name: 'Home', link: '/' },
        { name: 'Mission', link: '/mission' },
        { name: 'Feedback', link: '/feedback' },
      ],
    }
  },
}
</script>
