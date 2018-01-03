<template>
  <main class="container">
    <category-card v-for="category in categories" :key="category.name" :name="category.name" :color="category.color" :icon="category.icon" />
  </main>
</template>
<script>
import CategoryCard from '@/components/CategoryCard'
import categoryService from '@/services/categoryService'

export default {
  name: 'Home',
  components: { CategoryCard },
  data () {
    return {
      categories: []
    }
  },
  created () {
    categoryService.getAll().then(categories => {
      this.categories = categories
    })
  }
}
</script>
<style scoped>
</style>
