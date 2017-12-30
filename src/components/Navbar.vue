<template>
  <nav class="navbar">
    <div class="icon left" @click="back()">
      <icon name="arrow_back" />
    </div>
    <p class="title">
      <slot />
    </p>
    <div class="icon right" @click="cancel()">
      <icon name="close" />
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    back () {
      this.$router.go(-1)
    },
    cancel () {
      this.$router.replace('/')
    }
  }
}
</script>
<style scoped>
.navbar {
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
}

.icon {
  padding: 16px;
  pointer-events: none;
  user-select: none;
  visibility: hidden;
}

.title {
  margin: 0;
}

nav[back] .left,
nav[close] .right {
  pointer-events: auto;
  visibility: visible;
}
</style>
