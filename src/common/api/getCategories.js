import request from '../request'
import state from '../state'

export default function (vueComponent) {
  request.get('/categories', { 'Authorization': state.token }).then((response) => {
    let parsedResponse = JSON.parse(response)
    vueComponent.categories = parsedResponse
  }).catch(() => {
    alert('An error occured, please try again later')
  })
}
