<template>
  <main>
    <navbar back>New category</navbar>
    <div class="container">
      <new-info class="new-category" @update="updateInfo" with-icon />
      <color-picker :colors="color.options" @selected="selectColor" />
    </div>
    <div @click="save()">
      <submit-button class="button center" color="#0F81C7">Done</submit-button>
    </div>
  </main>
</template>
<script>
import ColorPicker from '@/components/ColorPicker'
import NewInfo from '@/components/NewInfo'
import SubmitButton from '@/components/SubmitButton'

import categoryService from '@/services/categoryService'

export default {
  name: 'CreateCategory',
  components: { ColorPicker, NewInfo, SubmitButton },
  data () {
    return {
      color: {
        selected: '',
        options: ['#ff3b30', '#ff9500', '#ffcc00', '#4cd964', '#5ac8fa', '#007aff', '#5856d6', '#ff2d55']
      },
      info: {
        icon: '',
        name: '',
        description: ''
      }
    }
  },
  methods: {
    selectColor (color) {
      this.color.selected = color
    },
    updateInfo (info) {
      this.info = info
    },
    save () {
      const category = {
        ...this.info,
        color: this.color.selected
      }

      categoryService.add(category)
        .then(() => {
          this.$router.replace('/')
        })
    }
  }
}
</script>
<style scoped>
main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.new-category {
  flex-grow: 1;
}

.button {
  font-size: .9em;
  font-weight: bold;
}
</style>
