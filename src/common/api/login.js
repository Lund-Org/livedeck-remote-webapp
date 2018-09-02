import jwt from 'jsonwebtoken'
import request from '../request'
import state from '../state'
import { saveToken } from '../state'

export default function (username, password, vueComponent) {
  request.post('/login', {
    username: username,
    password: password
  }).then((result) => {
    let response = JSON.parse(result)
    let jwtDecoded = jwt.decode(response.token)
    if (jwtDecoded && typeof jwtDecoded.authorization !== 'undefined') {
      state.token = jwtDecoded.authorization
      saveToken(response.token, state.token)
    }
    vueComponent.$emit('change-vue', {
      vueToLoad: 'Application'
    })
  }).catch((result) => {
    if (result.status === 404) {
      vueComponent.error = 'The authencation failed. Are your credentials right ?'
    } else {
      vueComponent.error = 'An error occured, please try again later'
    }
  })
}
