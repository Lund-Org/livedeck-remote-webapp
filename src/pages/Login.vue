<template>
  <div id="login">
    <div class="centered-form">
      <div class="input-wrapper">
        <input type="text" v-model="username" placeholder="Username" @keyup.enter="submit"/>
      </div>
      <div class="input-wrapper">
        <input type="password" v-model="password" placeholder="Password" @keyup.enter="submit"/>
      </div>
      <button type="button" @click="submit">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://localhost:19500/login')
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            console.log(xhr.responseText); // 'This is the returned text.'
          } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
          }
        }
      }

      xhr.send(
        JSON.stringify({
          username: this.username,
          password: this.password
        })
      )
    }
  }
}
</script>

<style lang="scss">
  #login {
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    width: 90%;
    margin: auto;
  }

  .centered-form {
    height: 300px;
    flex: 1;
		flex-basis: 100%;
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    display:block;
    min-width: 300px;
    margin: 30px auto;
    border-left: 2px solid rgb(0, 153, 255);

    &:after {
      position: absolute;
      content: " ";
      bottom: -1px;
      height: 2px;
      width: 100%;
      left: -1px;
      background: linear-gradient(to right, rgb(0, 153, 255) , white);
    }

    input {
      display:block;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      width: 100%;
      outline: none;
      border: 0px;
    }
  }

  button {
    display: block;
    margin: auto;
    font-family: Arial;
    background: #6ab9fc;
    border: 0;
    outline: none;
    width: 165px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: white;
    font-weight: bold;
  }
</style>
