<template>
  <div class="task-counter">
    <h2>{{total}}</h2>
    <p class="text">tasks</p>
  </div>
</template>
<script>
export default {
  name: 'TaskCounter',
  props: {
    total: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped>
.task-counter {
  align-items: baseline;
  display: flex;
  justify-content: center;
}

.task-counter > .text {
  margin-left: 5px;
}
</style>
