import Twet from '../../components/Twet'
import useUser from '../../hooks/useUser'

import { useState, useEffect } from 'react'

import { fetchLatestTwits } from '../../firebase/client'

import styles from './styles.module.css'

const Home = () => {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestTwits().then(setTimeline)
    }, [user])
    return (
        <>
            <div>
                <header className={styles.header}>
                    <h2 className={styles.title}>Inicio</h2>
                </header>
                <section>
                    {timeline.map(({ id, username, avatar, content, userId, createdAt }) => (
                        <Twet
                            id={id}
                            key={id}
                            userId={userId}
                            avatar={avatar}
                            content={content}
                            username={username}
                            createdAt={createdAt}
                        />
                    ))}
                </section>
                <nav className={styles.navbar}>

                </nav>
            </div>
        </>
    )
}

export default Home