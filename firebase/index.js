import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from './client'

const githubProvider = new GithubAuthProvider()
const auth = getAuth(app)

export const GithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then((response) => {
        console.log(response.user)
    }).catch((error) => {
        console.error(error)
    })
}