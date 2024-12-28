<template>
  <div class="w-full h-24 flex justify-center items-center">
    <ul
      class="flex-wrap w-full md:w-1/2 absolute z-30 md:top-0 rounded-lg m-2 p-2 bg-second flex items-center justify-around"
    >
      <li class="flex" v-for="NavItem in NavItems" :key="NavItem">
        <RouterLink
          class="shadow-2xl p-2 hover:shadow-md hover:text-primary transition-all"
          :to="NavItem.link"
          >{{ NavItem.name }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      NavItems: [
        { name: 'Home', link: '/' },
        { name: 'Mission', link: '/mission' },
        { name: 'Feedback', link: '/feedback' },
      ],
    }
  },
}
</script>
