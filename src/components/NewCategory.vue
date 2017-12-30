<template>
  <card class="new-category">
    <icon-picker @select="selectIcon" />
    <input class="field name" type="text" placeholder="Name" v-model="name" @blur="update()">
    <textarea class="field description" placeholder="Description (optional)" v-model="description" @blur="update()" />
  </card>
</template>
<script>
import IconPicker from '@/components/IconPicker'

export default {
  name: 'NewCategory',
  components: { IconPicker },
  data () {
    return {
      icon: '',
      name: '',
      description: ''
    }
  },
  methods: {
    update () {
      this.$emit('update', {
        icon: this.icon,
        name: this.name,
        description: this.description
      })
    },
    selectIcon (iconName) {
      this.icon = iconName

      this.update()
    }
  }
}
</script>
<style scoped>
.new-category {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
}

.field {
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1em;
  margin: 5px 0;
  outline: none;
  text-indent: .5em;
}

.description {
  flex: 1;
  padding: 0;
}

textarea {
  resize: none;
}
</style>
