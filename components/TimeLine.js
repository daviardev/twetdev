import Link from "next/link"
import AppLayout from "./AppLayout"

const Timeline = ({ userName, love, isOver }) => {
    return (
        <>
        <AppLayout>
            <Title>Hi is me { userName }, i love figth, { love }, { isOver }</Title>

                <Link href="/">
                    <a>Ir al inicio</a>
                </Link>

                <style jsx>{`
                    h1 {
                        font-size: 36px;
                        color: red;
                    }
                    
                `}</style>
        </AppLayout>
        </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}

export default Timeline