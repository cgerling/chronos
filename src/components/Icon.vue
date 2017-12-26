<template>
  <i class="material-icons">{{name}}</i>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      required: true,
      type: String
    }
  }
}
</script>
<style scoped>

</style>
