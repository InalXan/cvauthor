<script setup>
import InputUtil from '@/utils/InputUtil.vue'
import HeaderUtil from '../utils/HeaderUtil.vue'
</script>
<template>
  <div>
    <HeaderUtil title="Upload Your Profile Photo" />
    <InputUtil type="file" />
    <RouterLink to="/" class="p-2 m-2 text-primary bg-second"> asd</RouterLink>
    <RouterLink to="/profile" class="p-2 m-2 text-primary bg-second"> dsa </RouterLink>
  </div>
</template>
