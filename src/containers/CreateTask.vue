<template>
  <main>
    <navbar back>New task</navbar>
    <div class="container">
      <category-picker :category="category" />
      <new-info class="info" @update="update" />
      <priority-picker :priorities="priority.options" />
      <div class="options" style="display: none;">
        <set-reminder />
        <set-duration />
      </div>
    </div>
    <div @click="save()">
      <submit-button class="center" color="#0F81C7">Done</submit-button>
    </div>
  </main>
</template>
<script>
import CategoryPicker from '@/components/CategoryPicker'
import SubmitButton from '@/components/SubmitButton'
import NewInfo from '@/components/NewInfo'
import PriorityPicker from '@/components/PriorityPicker'
import SetReminder from '@/components/SetReminder'
import SetDuration from '@/components/SetDuration'
import categoryService from '@/services/categoryService'

export default {
  name: 'CreateTask',
  components: { CategoryPicker, SubmitButton, NewInfo, PriorityPicker, SetReminder, SetDuration },
  data () {
    return {
      category: '',
      name: '',
      description: '',
      priority: {
        options: [
          {
            color: '#4cd964',
            name: 'Do'
          },
          {
            color: '#007aff',
            name: 'Plan'
          },
          {
            color: '#ff9500',
            name: 'Delegate'
          },
          {
            color: '#ff3b30',
            name: 'Later'
          }
        ],
        selected: {
          color: '',
          name: ''
        }
      }
    }
  },
  methods: {
    update (info) {
      const { name, description } = info

      this.name = name
      this.description = description
    },
    save () {
      const category = {
        name: this.name,
        description: this.description,
        priority: this.priority.selected
      }

      categoryService.addTask(this.category, category)
    }
  },
  created () {
    this.category = this.$route.query.category
  }
}
</script>
<style scoped>
main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.container > * {
  margin: .5em 0;
}

.container > *:first-child {
  margin-top: 0;
}

.container > *:last-child {
  margin-bottom: 0;
}

.container .info {
  flex-grow: 1;
}

.options {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.options * {
  flex-grow: 1;
  margin-right: 15px;
}

.options *:last-child {
  margin-right: 0;
}
</style>
