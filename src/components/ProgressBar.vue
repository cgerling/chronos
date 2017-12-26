<template>
  <div class="progress-bar" :style="{ background: color }">
    <div class="mask" :style="{ width: width }"></div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    asPercent (number) {
      return `${number}%`
    }
  },
  computed: {
    width () {
      const widthPercent = 100 - this.percentage
      return this.asPercent(widthPercent)
    }
  }
}
</script>
<style scoped>
.progress-bar {
  border-radius: 5px 5px 0 0;
  height: 100%;
  position: relative;
  width: 100%;
}

.progress-bar::before {
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, .5));
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.progress-bar::after {
  background: #fff;
  bottom: 0;
  border-radius: 5px 5px 0 0;
  content: '';
  display: block;
  height: 50%;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.mask {
  background: rgba(255, 255, 255, .75);
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 2;
}
</style>
