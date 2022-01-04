import color from "../../styles/colors";
import fonts from "../../styles/fonts";
import resetCSS from "../../styles/reset";

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    background: #112F5C;
    border-radius: 20px;
    color: white;
    min-width: 270px;
    max-width: 25%;
    height: 84px;
    padding: 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
`

const box = `
    display: grid;
    width: 100%;
    margin-left: 0.5rem;
`

const message = `
color: ${color.grey};
font-weight: 400;
font-family: IBM Plex Mono;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
`

const title = `
    margin: 0;
    font-weight: 700;
`

const flex = `
    display: flex;
    justify-content: space-between;
`

export const notificationStyles = {
    initialStyles,
    box,
    flex,
    message,
    title,
}