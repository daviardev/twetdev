import Twet from '../../components/Twet'

import { useState, useEffect } from 'react'

import styled from 'styled-components'

const Home = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/homeTimeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])
    return (
        <>
            <div>
                <Header>
                    <Title>Inicio</Title>
                </Header>
                <Section>
                    {timeline.map(({ id, username, avatar, message }) => (
                        <Twet
                            key={id}
                            username={username}
                            avatar={avatar}
                            message={message}
                            id={id}
                        />
                    ))}
                </Section>
                <Nav>

                </Nav>
            </div>
        </>
    )
}

const Header = styled.header `
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 49px;
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
`

const Nav = styled.nav `
    bottom: 0%;
    position: sticky;
    border-top: 1px solid #ccc;
    height: 49px;
    width: 100%;
`

const Title = styled.h2 `
    font-size: 21px;
    font-weight: 800;
`

const Section = styled.section `
    padding-top: 49px;
`

export default Home