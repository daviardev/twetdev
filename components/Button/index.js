import styled from 'styled-components'

import { colors } from '../../styles/theme'

const Button = ({ children, onClick }) => {
    return (
        <>
            <BUTTON onClick={onClick}>
                { children }
            </BUTTON>
        </>
    )
}

const BUTTON = styled.button `
    align-items: center;
    background: ${colors.black};
    border-radius: 9999px;
    border: 0;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    font-size: 12px;
    font-weight: 800;
    padding: 8px 24px;
    transition: opacity .3s ease;

    &:hover {
        opacity: .7;
    }
`

export default Button