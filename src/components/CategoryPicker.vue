<template>
  <card class="category">
    <icon name="copyright" />
    <p class="name">
      {{category}}
    </p>
  </card>
</template>
<script>
import Card from '@/components/Card'
import categoryService from '@/services/categoryService'

export default {
  name: 'CategoryPicker',
  components: { Card },
  props: {
    category: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: {
        icon: '',
        name: ''
      },
      categories: []
    }
  },
  created () {
    categoryService.getAll().then(categories => {
      this.categories = categories.map(category => ({
        icon: category.icon,
        name: category.name
      }))
    })
  }
}
</script>
<style scoped>
.category {
  align-items: center;
  display: flex;
  padding: .5em;
}

.category .name {
  flex-grow: 1;
  margin: 0;
  margin-left: .5em;
}
</style>
