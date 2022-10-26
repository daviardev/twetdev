import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import useUser from '../../../hooks/useUser'
import Button from '../../../components/Button'
import Avatar from '../../../components/Avatar'

import { addTwet, uploadImage } from '../../../firebase/client'

import styles from './styles.module.css'

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
}

const ComposeTwet = () => {
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)

    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgURL, setImgURL] = useState(null)

    const user = useUser()
    const router = useRouter()

    useEffect(() => {
        if (task) {
            const onProgress = () => { }
            const onError = () => { }
            const onComplete = () => {
                console.log('onComplete')
                task.snapshot.ref.getDownloadURL().then(setImgURL)
            }

            task.on('state_changed', onProgress, onError, onComplete)
        }
    }, [task])

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
            username: user.username,
            img: imgURL
        })
            .then(() => {
                router.push('/home')
            })
            .catch((err) => {
                console.error(err)
                setStatus(COMPOSE_STATES.ERROR)
            })
    }

    const handleDragEnter = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
    }

    const handleDrop = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
        const file = e.dataTransfer.files[0]
        console.log()

        const task = uploadImage(file)
        setTask(task)
    }

    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

    return <>
        <Head>
            <title>Crear un twet | twetdev</title>
            <link rel='icon' href='/logo-dev.png' />
        </Head>
        <section className={styles.form_container}>
            {user && (
                <section className={styles.avatar_container}>
                    <Avatar src={user.avatar} />
                </section>
            )}
            <form onSubmit={handleSubmit}>
                <textarea className={styles.writeText}
                    value={message}
                    onDrop={handleDrop}
                    onChange={handleChange}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    placeholder='¿Qué está pasando?'
                ></textarea>
                {imgURL && (
                    <section className={styles.remove_img}>
                        <button className={styles.button} onClick={() => setImgURL(null)}>x</button>
                        <img className={styles.image} src={imgURL} />
                    </section>
                )}
                <div className={styles.content}>
                    <Button disabled={isButtonDisabled}>Twittear</Button>
                </div>
            </form>
        </section>
        <style jsx>{`
            textarea {
                border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? '3px dashed #09f' : '3px solid transparent'};
            }
        `}</style>
    </>
}

export default ComposeTwet