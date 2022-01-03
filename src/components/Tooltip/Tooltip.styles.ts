import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    background-color: #112F5C;
`;

const children = `
    border: none;
    background: transparent;
    padding: 5px;
    margin: -1px;
    font-size: inherit;
    color: inherit;
    cursor: inherit;
    display: flex;
`

const container = `
    position: absolute;
    width: 200px;
    margin-left: -100px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    left: 50%;
    bottom: calc(100% + 5px);
    pointer-events: none;
`

const box = `
    position: relative;
    color: #112F5C;
    text-align: center;
    border-radius: 5px;
    padding: 10px 8px;
    font-size: 14px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const tooltipStyles = {
    initialStyles,
    box,
    children,
    container,
};
