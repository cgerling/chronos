<template>
  <div>
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Slider',
  data () {
    return {
      actual: 0
    }
  }
}
</script>
<style scoped>

</style>
