import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import Twet from '../../components/Twet'
import HOME from '../../components/Icons/Home'
import Search from '../../components/Icons/Search'
import Create from '../../components/Icons/Create'
import useUser from '../../hooks/useUser'

import { fetchLatestTwits } from '../../firebase/client'

import styles from './styles.module.css'

const Home = () => {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestTwits().then(setTimeline)
    }, [user])

    return <>
        <Head>
            <title>Inicio | twetdev</title>
            <link rel='icon' href='/logo-dev.png' />
        </Head>
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>Inicio</h2>
            </header>
            <section className={styles.section}>
                {timeline.map(({ id, username, avatar, content, userId, createdAt }) => (
                    <Twet
                        id={id}
                        key={id}
                        avatar={avatar}
                        userId={userId}
                        content={content}
                        username={username}
                        createdAt={createdAt}
                    />
                ))}
            </section>
            <nav className={styles.navbar}>
                <Link href="/home">
                    <a>
                        <HOME width={32} height={32} stroke="#000000" />
                    </a>
                </Link>
                <Link href="/search">
                    <a>
                        <Search width={32} height={32} stroke="#000000" />
                    </a>
                </Link>
                <Link href="/compose/twet">
                    <a>
                        <Create width={32} height={32} stroke="#000000" />
                    </a>
                </Link>
            </nav>
        </div>
    </>
}

export default Home