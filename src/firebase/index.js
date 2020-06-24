import firebase from 'firebase/app'
import { firebaseConfig } from './config'

const app = firebase.initializeApp(firebaseConfig)

// import 'firebase/firestore'
// export const db = app.firestore()

// import "firebase/remote-config"
// export const remoteConfig = firebase.remoteConfig()
// remoteConfig.settings = {
//     minimumFetchIntervalMillis: 3600000,
// }
    
import "firebase/auth"
export const auth = app.auth()