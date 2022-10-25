import styles from './styles.module.css'

const Avatar = ({ alt, src, text }) => {
    return <>
        <div className={styles.content}>
            <img className={styles.avatar} alt={alt} src={src} title={alt} />
            {text && <strong>{text}</strong>}
        </div>
    </>
}

export default Avatar