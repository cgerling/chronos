<template>
  <card class="category-card">
    <progress-bar :color="category.color" :fraction="tasksDone.length" :total="category.tasks.length" />
    <router-link class="content" :to="`/category/${category.name}`" tag="div">
      <div class="info">
        <icon :name="category.icon" />
        <percentage :fraction="tasksDone.length" :total="category.tasks.length" />
      </div>
      <task-counter class="task-counter" :total="category.tasks.length" />
      <p class="title">{{category.name}}</p>
    </router-link>
    <router-link class="new-task" tag="div" :to="`/task/new?category=${category.name}`">
      <icon name="add" />
      Add task
    </router-link>
  </card>
</template>
<script>
import ProgressBar from '@/components/ProgressBar'
import Percentage from '@/components/Percentage'
import TaskCounter from '@/components/TaskCounter'

export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      required: true,
      validator (value) {
        const { color, icon, name, tasks } = value

        return color && icon && name && tasks
      }
    }
  },
  components: { ProgressBar, Percentage, TaskCounter },
  computed: {
    tasksDone () {
      return this.category.tasks.filter(category => category.completed)
    }
  }
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
  align-items: flex-start;
  box-shadow: 0 2px 10px rgba(100, 100, 100, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 .5em .5em;
}

.content > .info {
  align-items: center;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  padding: 5px;
  text-align: center;
  text-transform: capitalize;
}

.new-task {
  align-items: center;
  display: flex;
  justify-content: center;
}

.task-counter {
  align-self: center;
}
</style>
