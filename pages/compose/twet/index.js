import Button from '../../../components/Button'

import styles from './styles.module.css'

// 32:09

const ComposeTwet = () => {
    return <>
        <form>
            <textarea className={styles.writeText} placeholder='¿Qué está pasando?'></textarea>
            <div className={styles.content}>
                <Button>Twittear</Button>
            </div>
        </form>
    </>
}

export default ComposeTwet