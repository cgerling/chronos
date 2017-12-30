<template>
  <button :style="{ background: color }">
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
export default {
  name: 'SubmitButton',
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
button {
  border: 0;
  color: #fff;
  height: 56px;
  padding: 0;
  position: relative;
  width: 100%;
}

button::before {
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, .5));
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

button .content {
  color: inherit;
  position: relative;
  z-index: 10;
}
</style>
