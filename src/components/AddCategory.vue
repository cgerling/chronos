<template>
  <router-link to="/category/new" tag="div">
    <card class="add-category">
      <icon name="add" />
      Add category
    </card>
  </router-link>
</template>
<script>
import Card from '@/components/Card'

export default {
  name: 'AddCategory',
  components: { Card }
}
</script>
<style scoped>
.add-category {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: center;
  min-height: 200px;
}
</style>
