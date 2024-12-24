<script>
export default {
  props: ['value'],
  setup(props) {
    console.log(props.value)
  },
}
</script>
<template>
  <input
    type="submit"
    :value="value"
    class="p-2 bg-second rounded-lg border-2 hover:ring-2 border-purple-400 cursor-pointer text-primary font-bold"
  />
</template>
