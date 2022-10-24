import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '../../../components/Button'
import useUser from '../../../hooks/useUser'

import { addTwet } from '../../../firebase/client'

import styles from './styles.module.css'

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
}

const ComposeTwet = () => {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

    const user = useUser()
    const router = useRouter()

    const handleChange = (event) => {
        const { value } = event.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addTwet({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            username: user.username
        })
            .then(() => {
                router.push('/home')
            })
            .catch((err) => {
                console.error(err)
                setStatus(COMPOSE_STATES.ERROR)
            })
    }
    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING


    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea className={styles.writeText} onChange={handleChange} value={message} placeholder='¿Qué está pasando?'></textarea>
                <div className={styles.content}>
                    <Button disabled={isButtonDisabled}>Twittear</Button>
                </div>
            </form>
        </>

    )
}

export default ComposeTwet