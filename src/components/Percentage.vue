<template>
  <div class="percentage">
    {{percentage}}
  </div>
</template>
<script>
import { percentageOf } from '@/services/percentService'

export default {
  name: 'Percentage',
  props: {
    total: {
      type: Number,
      required: true
    },
    fraction: {
      type: Number,
      required: true
    }
  },
  computed: {
    percentage () {
      return `${percentageOf(this.fraction, this.total)} %`
    }
  }
}
</script>
<style scoped>

</style>
