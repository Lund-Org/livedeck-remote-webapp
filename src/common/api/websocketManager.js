import io from 'socket.io-client'
import state from '../state'

let socket = null
let isWSConnected = false

/**
 * Method when the websocket is connected
 */
function triggerTheConnection () {
  return io(state.config.wsServerUrl)
}

/**
 * Method when the websocket is connected
 */
function connectIO (/* appInstance */) {
  isWSConnected = true
  socket.emit('authentify', {
    token: state.token,
    device: 'front'
  })
}

/**
 * Method when the websocket receives a message
 */
function addCategory (appInstance, message) {
  appInstance.categories.push(message)
}

/**
 * Method when the websocket receives a message
 */
function updateCategory (appInstance, message) {
  console.log('updateCategory', message)
}

/**
 * Method when the websocket receives a message
 */
function removeCategory (appInstance, message) {
  console.log('removeCategory', message)
}

/**
 * Method when the websocket receives a message
 */
function addBind (appInstance, message) {
  console.log('addBind', message)
}

/**
 * Method when the websocket receives a message
 */
function updateBind (appInstance, message) {
  console.log('updateBind', message)
}

/**
 * Method when the websocket receives a message
 */
function removeBind (appInstance, message) {
  console.log('removeBind', message)
}

/**
 * Method when the websocket receives a message
 */
function forceDisconnection (appInstance, message) {
  console.log('forceDisconnection', message)
}

/**
 * Method when the websocket is disconnected
 */
function disconnectIO (/* appInstance */) {
  console.log('Lol t\'es déconnecté')
  isWSConnected = false
}

export default {
  isWSConnected,
  start (appInstance, connectCallback = () => {}, disconnectCallback = () => {}) {
    socket = triggerTheConnection()

    socket.on('connect', () => {
      connectIO(appInstance)
      connectCallback()
    })
    socket.on('new category', (message) => {
      addCategory(appInstance, message)
    })
    socket.on('update category', (message) => {
      updateCategory(appInstance, message)
    })
    socket.on('delete category', (message) => {
      removeCategory(appInstance, message)
    })
    socket.on('new bind', (message) => {
      addBind(appInstance, message)
    })
    socket.on('update bind', (message) => {
      updateBind(appInstance, message)
    })
    socket.on('delete bind', (message) => {
      removeBind(appInstance, message)
    })
    socket.on('force disconnect', (message) => {
      forceDisconnection(appInstance, message)
    })
    socket.on('disconnect', () => {
      disconnectIO(appInstance)
      disconnectCallback()
    })
  }
}
