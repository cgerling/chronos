<template>
  <card class="priority-picker">
    <div class="priority" v-for="prio in priorities" :key="prio.name" @click="select(prio)" :class="{ selected: isSelected(prio) }" :style="{ background: prio.color }">
      <p class="name">
        {{prio.name}}
      </p>
    </div>
  </card>
</template>
<script>
export default {
  name: 'PriorityPicker',
  props: {
    priorities: {
      type: Array,
      required: true,
      validator (values) {
        return values.filter(value => value.color && value.name).length === values.length
      }
    }
  },
  data () {
    return {
      selected: {
        name: '',
        color: ''
      }
    }
  },
  methods: {
    select (priority) {
      this.selected = priority

      this.$emit('select', priority)
    },
    isSelected (priority) {
      return this.selected === priority
    }
  }
}
</script>
<style scoped>
.priority-picker {
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
}

.priority {
  align-items: center;
  color: inherit;
  display: inline-flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.priority::after {
  background: rgba(0, 0, 0, .4);
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
}

.priority:first-of-type,
.priority:first-of-type::after {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.priority:last-of-type,
.priority:last-of-type::after {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.priority.selected::after {
  visibility: visible;
}

.priority > .name {
  position: relative;
  z-index: 10;
}
</style>
