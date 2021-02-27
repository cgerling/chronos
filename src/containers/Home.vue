<template>
  <main class="container">
    <flickity :options="sliderOptions">
      <div class="carousel-cell" v-for="category in categories" :key="category.name">
        <category-card :category="category" />
      </div>
      <div class="carousel-cell">
        <add-category />
      </div>
    </flickity>
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
      categories: [],
      sliderOptions: {
        pageDots: false,
        resize: true,
        prevNextButtons: false,
        wrapAround: true
      }
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
