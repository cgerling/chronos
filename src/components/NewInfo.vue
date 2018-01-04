<template>
  <card class="new-info">
    <div class="main">
      <icon-picker @select="selectIcon" v-if="withIcon" />
      <input class="field name" type="text" placeholder="Name" v-model="name" @blur="update()">
    </div>
    <textarea class="field description" placeholder="Description (optional)" v-model="description" @blur="update()" />
  </card>
</template>
<script>
import IconPicker from '@/components/IconPicker'

export default {
  name: 'NewInfo',
  components: { IconPicker },
  props: {
    withIcon: {
      type: Boolean
    }
  },
  data () {
    return {
      icon: '',
      name: '',
      description: ''
    }
  },
  methods: {
    update () {
      const info = {
        name: this.name,
        description: this.description
      }

      if (this.withIcon) info.icon = this.icon

      this.$emit('update', info)
    },
    selectIcon (iconName) {
      this.icon = iconName

      this.update()
    }
  }
}
</script>
<style scoped>
.new-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
}

.new-info .main {
  align-items: center;
  display: flex;
}

.new-info .main .name {
  text-indent: 0;
  padding-left: .5em;
  width: 100%;
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
