import request from '../request'
import state from '../state'

export default function (username, password, vueComponent) {
  request.post('/login', {
    username: username,
    password: password
  }).then((result) => {
    let response = JSON.parse(result)
    state.token = response.token
    // @todo Connection to the websocket
    vueComponent.$emit('change-vue', {
      vueToLoad: 'Application'
    })
  }).catch((result) => {
    console.log(result)
    if (result.status === 404) {
      vueComponent.error = 'The authencation failed. Are your credentials right ?'
    } else {
      vueComponent.error = 'An error occured, please try again later'
    }
  })
}
