import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC66mziN8NIuoxUD_W-_kS8FRukpmQ4bcA",
    authDomain: "twetdev.firebaseapp.com",
    projectId: "twetdev",
    storageBucket: "twetdev.appspot.com",
    messagingSenderId: "1052934596057",
    appId: "1:1052934596057:web:547679ffdb29314d7625c8",
    measurementId: "G-MCMVCZB9SJ"
  }

export const app = initializeApp(firebaseConfig)