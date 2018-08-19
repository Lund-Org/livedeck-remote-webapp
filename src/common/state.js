import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import verifyToken from './api/verify-token'

let globalState = {
  token: null
}

async function initialize () {
  let jwtToken = Cookie.get('user-jwt-token')

  return new Promise((resolve) => {
    if (typeof jwtToken !== 'undefined') {
      verifyToken(jwtToken).then(() => {
        let jwtDecoded = jwt.decode(jwtToken)
        if (jwtDecoded && typeof jwtDecoded.authorization !== 'undefined') {
          globalState.token = jwtDecoded.authorization
        }
        resolve(true)
      }).catch((err) => {
        console.log(err)
        resolve(false)
      })
    } else {
      resolve(false)
    }
  })
}

function saveToken (jwtToken, token) {
  globalState.token = token
  Cookie.set('user-jwt-token', jwtToken)
}

function removeToken () {
  globalState.token = null
  Cookie.remove('user-jwt-token')
}

export default globalState
export { initialize, saveToken, removeToken }
