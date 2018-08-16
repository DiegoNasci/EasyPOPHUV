import firebase from 'firebase'
const config = {
  
}

export const fireApp = firebase.initializeApp(config)
export const db = fireApp.database()
export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
}
