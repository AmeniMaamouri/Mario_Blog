
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCUnihvINnb3T0zzuctUKlqVnLQKbcwMu8",
  authDomain: "marioplan-38609.firebaseapp.com",
  databaseURL: "https://marioplan-38609.firebaseio.com",
  projectId: "marioplan-38609",
  storageBucket: "marioplan-38609.appspot.com",
  messagingSenderId: "540030953526",
  appId: "1:540030953526:web:e51b5727c496e4728f9097"
  };

  firebase.initializeApp(config)
  firebase.firestore()


  export default firebase