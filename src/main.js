import Vue from 'vue'
import App from './App.vue'
import state from './common/state'

require('./assets/global.scss')

Vue.config.productionTip = false

function initApplication (id) {
  new Vue({
    el: id,
    render: h => h(App),
    beforeCreate: function () {
      let tag = document.querySelector(id)

      if (tag) {
        state.config.serverUrl = tag.dataset.serverUrl
        state.config.wsServerUrl = tag.dataset.wsServerUrl
      }
    }
  })
}

document.addEventListener('livedeckStartApp', (e) => {
  initApplication(e.data.id)
})
