import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC66mziN8NIuoxUD_W-_kS8FRukpmQ4bcA",
  authDomain: "twetdev.firebaseapp.com",
  projectId: "twetdev",
  storageBucket: "twetdev.appspot.com",
  messagingSenderId: "1052934596057",
  appId: "1:1052934596057:web:547679ffdb29314d7625c8",
  measurementId: "G-MCMVCZB9SJ"
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuth = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = user ?
    mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuth)
}