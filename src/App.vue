<template>
  <component v-bind:is="currentPage" v-on:is-loaded="changePage" v-on:change-vue="changePage" />
</template>

<script>
import Start from './pages/Start.vue'
import Login from './pages/Login.vue'
import Password from './pages/Password.vue'
import Application from './pages/Application.vue'
import Register from './pages/Register.vue'
import State from './common/state'

export default {
  name: 'app',
  components: {
    Start,
    Login,
    Register,
    Password,
    Application
  },
  data: () => {
    return {
      currentPage: 'Start'
    }
  },
  methods: {
    /**
     * Page manager to load the right component
     * @param {Object} e The event triggered by a child component. Can be undefined.
     */
    changePage (e) {
      if (typeof e !== 'undefined' && typeof e.vueToLoad !== 'undefined') {
        this.currentPage = e.vueToLoad
      } else if (State.token) {
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
