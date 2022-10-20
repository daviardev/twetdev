import Link from "next/link"

const Timeline = ({ userName }) => {
    return (
        <>
            <h1>Esto es la ruta de Timeline { userName }</h1>
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

Timeline.getInitialProps = async () => {
    return { userName: 'devsilva' }
}

export default Timeline