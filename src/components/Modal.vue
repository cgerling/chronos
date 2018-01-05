<template>
  <div v-if="show" class="modal">
    <div class="head">
      <p class="title">
        {{title}}
      </p>
      <div @click="close()">
        <icon name="close" />
      </div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
@keyframes grow {
  from {
    transform: scale(0);
    border-radius: 50%;
  }

  to {
    transform: scale(1)
  }
}

.modal {
  animation: grow 400ms;
  background: #fff;
  bottom: 0;
  display: grid;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
}

.modal .head {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: .25em .5em;
}

.modal .title {
  margin: 0;
}

.modal .body {
  overflow-y: auto;
  padding: .5em;
}
</style>
