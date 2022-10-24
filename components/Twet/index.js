import Avatar from '../Avatar'

import styles from './styles.module.css'

const Twet = ({ username, avatar, id, message }) => {
  return <>
      <article className={styles.article}>
        <div className={styles.avatar_content}>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p className={styles.paragraph}>{message}</p>
        </section>
      </article>
    </>
}

export default Twet