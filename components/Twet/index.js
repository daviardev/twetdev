import Avatar from '../Avatar'

import styles from './styles.module.css'

const Twet = ({ username, avatar, id, content, createdAt }) => {
  return <>
    <article className={styles.article}>
      <div className={styles.avatar_content}>
        <Avatar alt={username} src={avatar} />
      </div>
      <section>
        <header>
          <strong>{username}</strong>
          <span className={styles.dot}>.</span>
          <span className={styles.date}>{createdAt}</span>
        </header>
        <p className={styles.paragraph}>{content}</p>
      </section>
    </article>
  </>
}

export default Twet