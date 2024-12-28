<template>
  <div class="w-full" id="header">
    <div id="logo" class="w-64 h-64">
      <h1>MADLYNK</h1>
    </div>
    <div>
      <ul>
        <li v-for="NavItem in NavItems" :key="NavItem">
          <RouterLink :to="NavItem.name"
            ><ion-icon :name="NavItem.icon"></ion-icon>{{ NavItem.name }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const NavItems = ref([
  { name: 'Profile', icon: 'person', link: '/' },
  { name: 'Profile', icon: 'person', link: '/' },
  { name: 'Profile', icon: 'person', link: '/' },
  { name: 'Profile', icon: 'person', link: '/' },
  { name: 'Profile', icon: 'person', link: '/' },
])
</script>
