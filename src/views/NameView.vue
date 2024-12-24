<script setup>
import InputUtil from '@/utils/InputUtil.vue'
import HeaderUtil from '../utils/HeaderUtil.vue'
import RouterIconUtil from '@/utils/RouterIconUtil.vue'
</script>
<template>
  <div class="flex flex-col justify-center">
    <HeaderUtil title="Write Your Full Name." class="select-none" />
    <form action="">
      <InputUtil placeholder="First Name" type="text" class="m-3" />
      <InputUtil placeholder="Last Name" type="text" class="m-3" />
      <RouterIconUtil get="/profile" icon="arrow-forward-outline" />
    </form>
  </div>
</template>
