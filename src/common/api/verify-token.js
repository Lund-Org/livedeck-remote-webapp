import request from '../request'

export default function (token) {
  return request.post('/valid-token', {
    jwtToken: token
  })
}
