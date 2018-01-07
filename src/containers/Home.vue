<template>
  <main class="container">
    <category-card v-for="category in categories" :key="category.name" :name="category.name" :color="category.color" :icon="category.icon" />
    <add-category />
  </main>
</template>
<script>
import CategoryCard from '@/components/CategoryCard'
import AddCategory from '@/components/AddCategory'
import categoryService from '@/services/categoryService'

export default {
  name: 'Home',
  components: { CategoryCard, AddCategory },
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
