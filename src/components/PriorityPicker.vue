<template>
  <card class="priority-picker">
    <div class="priority" v-for="prio in priorities" :key="prio.name" @click="select(prio)" :style="{ background: prio.color }">
      {{prio.name}}
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
      selected: ''
    }
  },
  methods: {
    select (priority) {
      this.selected = priority

      this.$emit('select', priority)
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
  width: 100%;
}

.priority:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.priority:last-of-type {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
