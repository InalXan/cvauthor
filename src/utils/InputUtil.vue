<script>
export default {
  props: ['placeholder', 'type'],
  setup(props) {
    console.log(props.placeholder)
    console.log(props.type)
  },
}
</script>
<template>
  <input
    class="p-2 rounded-lg hover:ring-2 transition-all hover:ring-second"
    :type="type"
    :placeholder="placeholder"
  />
</template>
