import Link from "next/link"
// 1:21:29
const Timeline = ({ userName, love, isOver }) => {
    return (
        <>
            <h1>Hi is me { userName }, i love figth, { love }, { isOver }</h1>
            <Link href="/">
                <a>Ir al inicio</a>
            </Link>

            <style jsx>{`
                h1 {
                    color: gray;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            const { userName, love, isOver } = response
            return { userName, love, isOver }
        })
}

export default Timeline