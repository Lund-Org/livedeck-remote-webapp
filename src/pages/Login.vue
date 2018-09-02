<template>
  <div id="login">
    <div class="centered-form">
      <h1>Login</h1>
      <div v-if="error.length > 0" class="error-message">{{ error }}</div>
      <div class="input-wrapper">
        <input type="text" v-model="username" placeholder="Username" @keyup.enter="submit"/>
      </div>
      <div class="input-wrapper">
        <input type="password" v-model="password" placeholder="Password" @keyup.enter="submit"/>
      </div>
      <button type="button" @click="submit">Login</button>
      <div class="links">
        <a href="#" @click.prevent="changeVue('Register')">No account ?</a>
        <span> - </span>
        <a href="#" @click.prevent="changeVue('Password')">Password forgotten ?</a>
      </div>
    </div>
  </div>
</template>

<script>
import loginAPI from '../common/api/login'

export default {
  name: 'login',
  data: () => {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    /**
     * Submit trigger to send the form
     */
    submit () {
      loginAPI(this.username, this.password, this)
    },
    /**
     * Callback when a link is clicked to change the page
     * @param {String} vueToLoad The name of the component to load
     */
    changeVue (vueToLoad) {
      this.$emit('change-vue', {
        vueToLoad
      })
    }
  }
}
</script>

<style lang="scss">
</style>
