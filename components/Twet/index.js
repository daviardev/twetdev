import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

import Avatar from 'components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import useDateTimeFormat from 'hooks/useDateTimeFormat'


import styles from './styles.module.css'

const Twet = ({
  id,
  img,
  avatar,
  content,
  username,
  createdAt
}) => {
  const router = useRouter()
  const timeago = useTimeAgo(createdAt)
  const createdAtFormat = useDateTimeFormat(createdAt)

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return <>
    <article className={styles.article} onClick={handleClick}>
      <div className={styles.avatar_content}>
        <Avatar alt={username} src={avatar} />
      </div>
      <section>
        <header>
          <strong>{username}</strong>
          <span className={styles.dot}> · </span>
          <Link href={`/status/${id}`}>
            <time title={createdAtFormat} className={styles.date}>{timeago}</time>
          </Link>

        </header>
        <p className={styles.paragraph}>{content}</p>
        {img && <img className={styles.image} src={img} />}
      </section>
    </article>
  </>
}

export default Twet