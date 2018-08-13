<template>
  <div id="register">
    <div class="centered-form">
      <h1>Register</h1>
      <div v-if="error.length > 0" class="error-message" v-html="error"></div>
      <div class="input-wrapper">
        <input type="text" v-model="username" placeholder="Username" @keyup.enter="submit"/>
      </div>
      <div class="input-wrapper">
        <input type="password" v-model="password" placeholder="Password" @keyup.enter="submit"/>
      </div>
      <button type="button" @click="submit">Sign up</button>
      <div class="links">
        <a href="#" @click.prevent="changeVue('Login')">You already have an account ?</a>
      </div>
    </div>
  </div>
</template>

<script>
import registerAPI from '../common/api/register'

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
     * @todo Put the ajax request in a separated file
     */
    submit () {
      registerAPI(this.username, this.password, this)
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
