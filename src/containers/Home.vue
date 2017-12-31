<template>
  <main class="container">
    <category-card v-for="category in categories" :key="category.name" :name="category.name" :color="category.color" :icon="category.icon" />
  </main>
</template>
<script>
import CategoryCard from '@/components/CategoryCard'
import Database from '@/services/indexeddb'

export default {
  name: 'Home',
  components: { CategoryCard },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    getCategories () {
      return Database.connect('chronos')
        .then(db => Database.findAll(db, 'category'))
        .catch(console.error.bind(console))
    }
  },
  created () {
    this.getCategories().then(categories => {
      this.categories = categories
    })
  }
}
</script>
<style scoped>
</style>
