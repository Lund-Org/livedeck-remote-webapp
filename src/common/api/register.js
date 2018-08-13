import request from '../request'
import loginAPI from './login'

export default function (username, password, vueComponent) {
  vueComponent.error = ''
  if (!username.length < 4) {
    vueComponent.error = 'The username needs to be at least 4 characters long'
  }
  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
    vueComponent.error = '<p>The password must follow these rules :</p>'
    vueComponent.error += '<ul><li>At least 8 characters</li>'
    vueComponent.error += '<li>At least one character in lowercase</li>'
    vueComponent.error += '<li>At least one character in uppercase</li>'
    vueComponent.error += '<li>At least one number</li></ul>'
  }
  if (vueComponent.error.length !== 0) {
    return
  }
  request.post('/register', {
    username: username,
    password: password
  }).then(() => {
    loginAPI(username, password, vueComponent)
  }).catch((result) => {
    let response = JSON.parse(result.responseText)
    if (typeof response.code !== 'undefined') {
      // @todo Check the backend to return a better exception without the sql detail
      if (response.code === 'ER_DUP_ENTRY') {
        vueComponent.error = 'The user already exists'
      }
    } else {
      vueComponent.error = 'An error occured, please try again later'
    }
  })
}
