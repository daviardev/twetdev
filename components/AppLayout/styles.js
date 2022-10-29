import css from 'styled-jsx/css'

import { addOpacityToColor } from 'styles/utils'
import { fonts, colors, breakpoint } from 'styles/theme'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: ${fonts.base};
    background-size: 50px 50px;
    background-position: 0 0, 25px 25px;
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px), radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
  }

  * {
    box-sizing: border-box;
  }

  textarea, input {
    font-family: ${fonts.base};
  }
`;

export default css`
    div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow-y: auto;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    flex-direction: column;
  }
  @media (min-width: ${breakpoint.mobile}) {
    main {
      width: ${breakpoint.mobile};
      height: 90vh;
    }
  }
`;
