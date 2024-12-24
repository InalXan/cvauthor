<script>
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  },
}
</script>
<template>
  <h1 class="text-2xl m-5 underline">{{ title }}</h1>
</template>
