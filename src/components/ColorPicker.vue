<template>
  <card class="color-picker">
    <div class="color" @click="select(color)" v-for="color in colors" :key="color" :style="{ background: color }">
      <icon name="check_circle" v-if="color == selected" />
    </div>
  </card>
</template>
<script>
export default {
  name: 'ColorPicker',
  props: {
    colors: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    select (color) {
      this.selected = color

      this.$emit('selected', color)
    }
  }
}
</script>
<style scoped>
.color-picker {
  border-radius: 5px;
  display: flex;
  height: 50px;
  margin: 1em 0;
  width: 100%;
}

.color {
  align-items: center;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  width: inherit;
}

.color:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.color:last-of-type {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
