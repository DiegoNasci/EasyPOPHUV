import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyClKRsC9GkL8VJwdTCmx2mHDJYFdHmLg8A',
  authDomain: 'ephuv-ae866.firebaseapp.com',
  databaseURL: 'https://ephuv-ae866.firebaseio.com',
  projectId: 'ephuv-ae866',
  storageBucket: '',
  messagingSenderId: '939651355743'
}

export const fireApp = firebase.initializeApp(config)
export const db = fireApp.database()
export const AUTH = fireApp.auth()

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
}
