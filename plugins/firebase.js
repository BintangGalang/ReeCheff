import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbPtOxcC3KRjSgk6bpqWhcJ0hkqHOIIIQ",
  authDomain: "http://project-ef619.firebaseapp.com",
  projectId: "project-ef619",
  storageBucket: "http://project-ef619.appspot.com",
  messagingSenderId: "1088765065398",
  appId: "1:1088765065398:web:4a21d06589f9610512ce17",
  measurementId: "G-B0J9L7BGVP"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

export { db }
