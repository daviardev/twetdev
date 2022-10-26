import Avatar from '../Avatar'
import useTimeAgo from '../../hooks/useTimeAgo'

import styles from './styles.module.css'

const Twet = ({
  id,
  img,
  avatar,
  content,
  username,
  createdAt
}) => {
  const timeago = useTimeAgo(createdAt)

  return <>
    <article className={styles.article}>
      <div className={styles.avatar_content}>
        <Avatar alt={username} src={avatar} />
      </div>
      <section>
        <header>
          <strong>{username}</strong>
          <span className={styles.dot}>·</span>
          <span className={styles.date}>{timeago}</span>
        </header>
        <p className={styles.paragraph}>{content}</p>
        {img && <img className={styles.image} src={img} />}
      </section>
    </article>
  </>
}

export default Twet