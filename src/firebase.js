import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxSesEIRrZpgTO0SAX_KxUbc_KA8ZgJDI",
    authDomain: "clone-94948.firebaseapp.com",
    projectId: "clone-94948",
    storageBucket: "clone-94948.appspot.com",
    messagingSenderId: "555263979230",
    appId: "1:555263979230:web:f4b3649425c6d90aac5c4f",
    measurementId: "G-QCZCCNF2FP"
  });
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };