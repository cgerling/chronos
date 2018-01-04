<template>
  <card class="category-card">
    <progress-bar :color="color" />
    <div class="content">
      <icon :name="icon" />
      <p class="title">{{name}}</p>
      <slot />
    </div>
    <router-link class="new-task" tag="div" :to="`/task/new?category=${name}`">
      <icon name="add" />
      Add task
    </router-link>
  </card>
</template>
<script>
import ProgressBar from '@/components/ProgressBar'

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
    },
    icon: {
      type: String,
      required: true
    }
  },
  components: { ProgressBar }
}
</script>
<style scoped>
.category-card {
  display: grid;
  grid-template-rows: 10px 1fr 50px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.content {
  align-items: center;
  box-shadow: 0 2px 10px rgba(100, 100, 100, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
