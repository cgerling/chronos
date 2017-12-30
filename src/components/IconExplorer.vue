<template>
  <div class="icon-explorer">
    <div class="icon-wrapper" v-for="icon in available" :key="icon" @click="select(icon)">
      <icon class="icon" :name="icon" />
    </div>
  </div>
</template>
<script>
import { icons } from '@/assets/font/icons.json'

export default {
  name: 'IconExplorer',
  data () {
    return {
      selected: '',
      available: icons
    }
  },
  methods: {
    select (selected) {
      this.selected = selected

      this.$emit('select', selected)
    }
  }
}
</script>
<style scoped>
.icon-explorer {
  display: grid;
  grid-template-columns: repeat(4, auto);
}

.icon-explorer > .icon-wrapper {
  text-align: center;
}

.icon-explorer > .icon-wrapper > .icon {
  font-size: 4em;
}
</style>
