import Twet from '../../components/Twet'

import { useState, useEffect } from 'react'

import styles from './styles.module.css'

const Home = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/homeTimeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])
    return (
        <>
            <div>
                <header className={styles.header}>
                    <h2 className={styles.title_page}>Inicio</h2>
                </header>
                <section className={styles.section}>
                    {timeline.map(({ id, username, avatar, message }) => (
                            <Twet
                                key={id}
                                username={username}
                                avatar={avatar}
                                message={message}
                                id={id}
                            />
                    ))}
                        </section>
                        <nav className={styles.nav}>

                </nav>
            </div>
            </>
            )
        }

export default Home