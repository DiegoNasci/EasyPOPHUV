import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyClKRsC9GkL8VJwdTCmx2mHDJYFdHmLg8A',
  authDomain: 'ephuv-ae866.firebaseapp.com',
  databaseURL: 'https://ephuv-ae866.firebaseio.com',
  projectId: 'ephuv-ae866',
  storageBucket: '',
  messagingSenderId: '939651355743'
}

export const fire = firebase.initializeApp(config)
export const db = fire.database()
export const AUTH = fire.auth()
export const ref = db.ref('users')

export default ({ app, router, Vue }) => {
  Vue.prototype.$auth = AUTH
}
