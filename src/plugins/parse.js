import Parse from 'parse'

export default ({ Vue }) => {
  Parse.initialize('appSPH')
  if (window.location.hostname === 'localhost') {
    let port = '1337'
    Parse.serverURL = `${window.location.protocol}//${window.location.hostname}:${port}/parse`
  } else {
    Parse.serverURL = `${window.location.protocol}//${window.location.hostname}/parse`
  }
  Vue.prototype.$parse = Parse
}
