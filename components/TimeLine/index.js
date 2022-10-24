import Link from "next/link"

const Timeline = ({ userName, love, isOver }) => {
    return <>
            <h1>Hi is me { userName }, i love figth, { love }, { isOver }</h1>

                <Link href="/">
                    <a>Ir al inicio</a>
                </Link>
        </>
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}

export default Timeline