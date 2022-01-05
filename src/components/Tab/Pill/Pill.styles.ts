import color from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import resetCSS from '../../../styles/reset';

const active = `
    background-color: ${color.green};
    color: white;
`;

const activeHover = `
    &:hover {
        background: ${color.greenDark};

        border: 1px solid ${color.greenLight};
        box-sizing: border-box;
    }
`;

const disabled = `
    background-color: ${color.blueLight}
`;

const inactive = `
    background-color: ${color.blueLight};
    color: ${color.blueDark};
`;

const inactiveHover = `
    &:hover {
        background: #EBEFF9;
    }
`;

const isBar = `
    &:first-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    
    &:last-child {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
`

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    border-radius: 10px;
    padding: 2px 16px;
    text-align: center;
    width: fit-content;
`;

const pressedActive = `
    background-color: ${color.greenDark};
    
    border: 4px solid ${color.greenLight};
    box-sizing: border-box;
`;

const pressedInactive = `
    background: radial-gradient(106.45% 108.64% at 32.33% -4.84%, #ECF5FC 0.52%, #CEE4F3 100%);
`;

export const pillStyles = {
    active,
    activeHover,
    disabled,
    inactive,
    inactiveHover,
    initialStyles,
    isBar,
    pressedActive,
    pressedInactive,
};
