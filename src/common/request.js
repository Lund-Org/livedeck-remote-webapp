// @todo : Use env var instead
const BASE_URL = 'http://localhost:19500'

export default {
  /**
   * Perform a post request (AJAX)
   * @param {String} uri The uri to request
   * @param {Object} data The data to send
   * @return {Promise}
   */
  put (uri, data, headers = {}) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('PUT', `${BASE_URL}${uri}`)
      xhr.setRequestHeader('Content-Type', 'application/json')
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            resolve(xhr.responseText)
          } else {
            reject(xhr)
          }
        }
      }

      xhr.send(JSON.stringify(data))
    })
  },
  /**
   * Perform a post request (AJAX)
   * @param {String} uri The uri to request
   * @param {Object} data The data to send
   * @return {Promise}
   */
  post (uri, data, headers = {}) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('POST', `${BASE_URL}${uri}`)
      xhr.setRequestHeader('Content-Type', 'application/json')
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            resolve(xhr.responseText)
          } else {
            reject(xhr)
          }
        }
      }

      xhr.send(JSON.stringify(data))
    })
  },
  /**
   * Perform a get request (AJAX)
   * @param {String} uri The uri to request
   * @return {Promise}
   */
  get (uri, headers = {}) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', `${BASE_URL}${uri}`)
      xhr.setRequestHeader('Content-Type', 'application/json')
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            resolve(xhr.responseText)
          } else {
            reject(xhr)
          }
        }
      }

      xhr.send(null)
    })
  }
}
