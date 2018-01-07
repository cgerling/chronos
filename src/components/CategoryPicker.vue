<template>
  <div>
    <div @click="toggleModal()">
      <card class="category">
        <icon :name="selected.icon" />
        <p class="name">
          {{selected.name}}
        </p>
      </card>
    </div>
    <modal title="Categories" :show="showModal" @close="toggleModal()" @select="select">
      <category-explorer :selected="actual" :categories="options" />
    </modal>
  </div>
</template>
<script>
import Card from '@/components/Card'
import CategoryExplorer from '@/components/CategoryExplorer'

export default {
  name: 'CategoryPicker',
  components: { Card, CategoryExplorer },
  props: {
    actual: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: {
        icon: '',
        name: ''
      },
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },
    select (category) {
      this.selected = category

      this.toggleModal()
    }
  },
  watch: {
    actual (val) {
      this.selected = val
    }
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
  text-transform: capitalize;
}
</style>
