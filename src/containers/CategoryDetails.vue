<template>
  <div>
    <navbar class="navbar" back>{{category}}</navbar>

  </div>
</template>
<script>
export default {
  name: 'CategoryDetails',
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.navbar {
  text-transform: capitalize;
}
</style>
