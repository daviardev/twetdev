import styles from './styles.module.css'

import Avatar from '../Avatar'

// 2:03:59

const Twet = ({ username, avatar, id, message }) => {
    return (
        <>
            <article className={styles.article}>
                <div className={styles.content_data_user}>
                    <Avatar alt={username} src={avatar} />
                </div>
                <section>
                    <strong>{username}</strong>
                    <p className={styles.text_message}>{message}</p>
                </section>
            </article>
        </>
    )
}

export default Twet