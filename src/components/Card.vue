<template>
  <div class="card">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style scoped>
.card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(100, 100, 100, .5);
  box-sizing: border-box;
}
</style>
