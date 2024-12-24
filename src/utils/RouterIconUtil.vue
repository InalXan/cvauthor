<script>
export default {
  props: ['get', 'icon'],
  setup(props) {
    console.log(props.get, props.icon)
  },
}
</script>

<template>
  <RouterLink :to="get" class="bg-primart border hover:ring-2 px-4 py-2 transition-all"
    ><ion-icon :name="icon"></ion-icon
  ></RouterLink>
</template>
