import Link from "next/link"
import AppLayout from "../AppLayout"

import styles from './styles.module.css'

const Timeline = ({ userName, love, isOver }) => {
    return (
        <>
        <AppLayout>
            <Title>Hi is me { userName }, i love figth, { love }, { isOver }</Title>

                <Link href="/">
                    <a className={styles.title}>Ir al inicio</a>
                </Link>
        </AppLayout>
        </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}

export default Timeline