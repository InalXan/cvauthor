<script>
export default {
  props: ['get', 'name'],
  setup(props) {
    console.log(props.get, props.name)
  },
}
</script>

<template>
  <RouterLink
    :to="get"
    class="text-second bg-primary border border-second hover:ring-2 hover:ring-slate-50 px-4 py-2 transition-all"
    >{{ name }}</RouterLink
  >
</template>
