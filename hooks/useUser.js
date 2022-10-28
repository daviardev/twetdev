import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/client'
import { useState, useEffect } from 'react'

export const STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
}

const useUser = () => {
    const [user, setUser] = useState(STATES.NOT_KNOWN)

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(setUser)
    }, [])

    useEffect(() => {
        user === STATES.NOT_LOGGED && router.push('/')
    }, [user])

    return user
}

export default useUser