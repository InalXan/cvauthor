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
    class="m-2 w:1/2 md:bg-second bg-[rgba(255,255,255,0.6)] text-primary select-none border ring border-primary ring-primary p-2 rounded-lg hover:ring-2 transition-all hover:ring-second"
    :type="type"
    :placeholder="placeholder"
  />
</template>
