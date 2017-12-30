<template>
  <div>
    <div class="icon" @click="choose()">
      <icon :name="selected" />
    </div>
    <modal title="Choose a icon" :show="showPicker" @close="close">
      <icon-explorer @select="select" />
    </modal>
  </div>
</template>
<script>
import Modal from '@/components/Modal'
import IconExplorer from '@/components/IconExplorer'

export default {
  name: 'IconPicker',
  components: { IconExplorer, Modal },
  data () {
    return {
      selected: 'add',
      showPicker: false
    }
  },
  methods: {
    select (iconName) {
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
  border: 2px solid #2c3e50;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 5px auto;
  width: 50px;
}
</style>
