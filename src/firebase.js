import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAArED4TMojNCgeKGjcfx2V9HwUj879zL8",
    authDomain: "cotrack-19.firebaseapp.com",
    projectId: "cotrack-19",
    storageBucket: "cotrack-19.appspot.com",
    messagingSenderId: "102666963135",
    appId: "1:102666963135:web:ebf7053a97b21dd3095e0a",
    measurementId: "G-W76GG6MBK4"
})

const db = firebaseApp.firestore()

export default db