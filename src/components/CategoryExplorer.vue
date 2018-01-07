<template>
  <ul class="categories">
    <li class="category" :class="{ selected: isSelected(option.name) }" v-for="option in categories" :key="option.name" @click="select(option)">
      <span class="name">{{option.name}}</span>
      <icon name="check" class="icon" v-if="isSelected(option.name)"/>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CategoryExplorer',
  props: {
    categories: {
      type: Array,
      required: true
    },
    selected: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      actual: {
        name: '',
        icon: ''
      }
    }
  },
  methods: {
    select (category) {
      this.actual = category

      this.$emit('select', this.actual)
    },
    isSelected (category) {
      return this.actual.name === category
    }
  },
  watch: {
    selected (val) {
      this.actual = val
    }
  },
  created () {
    this.actual = this.selected
  }
}
</script>
<style scoped>
.categories {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories > .category {
  align-items: center;
  border: 2px solid #a3a3a3;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: center;
  margin-top: -2px;
  padding: 10px;
  position: relative;
  text-align: center;
  text-transform: capitalize;
}

.categories > .category > .name {
  flex-grow: 1;
}

.categories > .category > .icon {
  position: absolute;
  right: 10px;
}

.categories > .category:first-child {
  border-top: none;
}

.categories > .category:last-child {
  border-bottom: none;
}

.categories > .category:only-child {
  border: 1px solid #a3a3a3;
  border-left: none;
  border-right: none;
  margin: 0;
}

.categories > .category.selected {
  border-color: #3a91fc;
  color: #3a91fc;
  font-weight: bold;
  z-index: 1;
}
</style>
