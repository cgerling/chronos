<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
body {
  height: 100vh;
  margin: 0;
  width: 100vw;
}

#app {
  color: #2c3e50;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

  box-sizing: border-box;
}
</style>
