import styles from './styles.module.css'

const Avatar = ({ alt, src, text }) => {
    return (
        <div className={styles.content}>
            <img className={styles.image} alt={alt} src={src} title={alt} />
            { text && <strong className={styles.sub_text_strong}>{ text }</strong> }   
        </div>
    )
}

export default Avatar