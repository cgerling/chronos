<template>
  <div class="category-card">
    <progress-bar :color="color" />
    <div class="content">
      <p class="title">{{name}}</p>
      <slot />
    </div>
    <div class="new-task">
      <icon name="add" />
      Add task
    </div>
  </div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar'
import Icon from '@/components/Icon'

export default {
  name: 'CategoryCard',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  components: { ProgressBar, Icon }
}
</script>
<style scoped>
.category-card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(100, 100, 100, .5);
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 10px 1fr 50px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.content {
  box-shadow: 0 2px 10px rgba(100, 100, 100, .5);
}

.title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  text-align: center;
}

.new-task {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
