<template>
  <card class="new-category">
    <div class="main-info">
      <icon-picker @select="selectIcon" />
      <input class="field name" type="text" placeholder="Name" v-model="name" @blur="update()">
    </div>
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

.new-category .main-info {
  align-items: center;
  display: flex;
}

.new-category .main-info .name {
  text-indent: 0;
  padding-left: .5em;
}

.field {
  border: none;
  display: block;
  flex-grow: 1;
  font-family: inherit;
  font-size: 1em;
  margin: 5px 0;
  outline: none;
  text-indent: .5em;
}

.description {
  padding: 0;
}

textarea {
  resize: none;
}
</style>
