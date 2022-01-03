import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    background-color: #112F5C;
    border-radius: 4px;
    color: white;
    display: inline-block;
    font-family: sans-serif;
    font-size: 14px;
    left: 50%;
    line-height: 1;
    margin: 30px;
    padding: 6px;
    position: absolute;
    transform: translateX(-50%);
    white-space: nowrap;

    ::before {
        content: " ";
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 6px;
        margin-left: -6px;
    }
`;

const top = `
    top: -5px;

    ::before {
        top: 100%;
        border-top-color: #112F5C;
    }
`;

const bottom = `
    bottom: -5px;

    ::before {
        bottom: 100%;
        border-bottom-color: #112F5C;
    }
`

const left = `
    top: 50%;
    left: 0;
    transform: translateX(0) translateY(-50%);

    ::before {
        left: auto;
        right: calc(6px * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: #112F5C;
    }
`

const right = `
    top: 50%;
    left: 80%;
    transform: translateX(0) translateY(-50%);

    ::before {
        left: -6px;
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: #112F5C;
    }
`

export const tooltipStyles = {
    initialStyles,
    top,
    bottom,
    right,
    left
};
