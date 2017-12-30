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
.modal {
  background: #fff;
  bottom: 0;
  left: 0;
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
  padding: .5em;
}
</style>
