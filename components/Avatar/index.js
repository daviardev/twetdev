import styled from 'styled-components'

const Avatar = ({ alt, src, text }) => {
    return (
        <Content>
            <AVATAR alt={alt} src={src} title={alt} />
            { text && <Strong>{ text }</Strong> }   
        </Content>
    )
}

const Content = styled.div `
    align-items: center;
    display: flex;
`

const AVATAR = styled.img `
    border-radius: 9999px;
    width: 49px;
    height: 49px;
`

const Strong = styled.strong `
    margin-left: 8px;
`

export default Avatar