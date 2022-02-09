<template>
  <div id="app">
    <Updatetask />
  </div>
</template>

<script>
import Updatetask from './components/Updatetask.vue'

export default {
  name: 'App',
  components: {
    Updatetask
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
