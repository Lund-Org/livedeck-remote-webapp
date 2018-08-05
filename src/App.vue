<template>
  <component v-bind:is="currentPage" v-on:is-loaded="changePage" />
</template>

<script>
import Start from './pages/Start.vue'
import Login from './pages/Login.vue'
import Application from './pages/Application.vue'
import State from './common/state'

export default {
  name: 'app',
  components: {
    Start,
    Login,
    Application
  },
  data: () => {
    return {
      currentPage: 'Start'
    }
  },
  methods: {
    changePage () {
      if (State.token) {
        this.currentPage = 'Application'
      } else {
        this.currentPage = 'Login'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
