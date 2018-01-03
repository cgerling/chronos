<template>
  <div>
    <div class="icon" @click="choose()">
      <icon :name="icon" />
    </div>
    <modal title="Choose a icon" :show="showPicker" @close="close">
      <icon-explorer @select="select" />
    </modal>
  </div>
</template>
<script>
import IconExplorer from '@/components/IconExplorer'

import { icons } from '@/assets/font/icons'

export default {
  name: 'IconPicker',
  components: { IconExplorer },
  data () {
    return {
      selected: '',
      showPicker: false
    }
  },
  computed: {
    icon () {
      const index = Number.parseInt(Math.random() * icons.length)
      let icon = this.selected || icons[index]

      this.select(icon)

      return icon
    }
  },
  methods: {
    select (iconName) {
      if (this.selected === iconName) return

      this.close()

      this.selected = iconName
      this.$emit('select', iconName)
    },
    choose () {
      this.showPicker = true
    },
    close () {
      this.showPicker = false
    }
  }
}
</script>
<style scoped>
.icon {
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 5px auto;
  width: 50px;
}
</style>
