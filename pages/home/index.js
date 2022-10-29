import Head from 'next/head'
import React, { useState, useEffect } from 'react'

import Twet from 'components/Twet'
import useUser from 'hooks/useUser'

import { listenLatestTwits } from 'firebase/client'

import styles from './styles.module.css'

const Home = () => {
    const user = useUser()
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        let unSubscribe
        if (user) {
            unSubscribe = listenLatestTwits(setTimeline)
        }
        return () => unSubscribe && unSubscribe()
    }, [user])

    return <>
        <Head>
            <title>Inicio | twetdev</title>
            <link rel='icon' href='logo-dev.png' />
        </Head>
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>Inicio</h2>
            </header>
            <section className={styles.section}>
                {timeline.map(({ id, img, avatar, userId, content, username, createdAt }) => (
                    <Twet
                        id={id}
                        key={id}
                        img={img}
                        avatar={avatar}
                        userId={userId}
                        content={content}
                        username={username}
                        createdAt={createdAt}
                    />
                ))}
            </section>
        </div>
    </>
}

export default Home