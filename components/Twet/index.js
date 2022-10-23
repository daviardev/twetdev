import Avatar from '../Avatar'

import styled from 'styled-components'

const Twet = ({ username, avatar, id, message }) => {
    return (
        <>
            <Article>
                <AvatarContent>
                    <Avatar alt={username} src={avatar} />
                </AvatarContent>
                <section>
                    <strong>{username}</strong>
                    <P>{message}</P>
                </section>
            </Article>
        </>
    )
}

const Article = styled.article `
    border-bottom: 2px solid #eaf7ff;
    display: flex;
    padding: 10px 15px;
`

const AvatarContent = styled.div `
    padding-right: 8px;
`

const P = styled.p `
    line-height: 1.3125;
    margin: 0;
`

export default Twet