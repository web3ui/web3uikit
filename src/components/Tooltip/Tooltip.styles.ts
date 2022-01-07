import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
`;

const marginTooltip = '40px';
const arrowSizeTooltip = '6px';

const container = `
    ${resetCSS}
    align-items: center;
    border-radius: 4px;
    color: white;
    display: flex;  
    justify-content: center;
    left: 50%;
    padding: 8px;
    pointer-events: none;
    position: absolute;
    transform: translateX(-50%);
    white-space: nowrap;

    &:before {
        border: solid ${arrowSizeTooltip} transparent;
        content: '';
        height: 0;
        left: 50%;
        margin-left: calc(${arrowSizeTooltip} * -1);
        position: absolute;
        width: 0;
    }
`;

const defaultContainer = `
    bottom: calc(100% + 5px);
    background-color: ${color.blueDark2};
`;

const top = `
    background-color: ${color.blueDark2};
    top: calc(${marginTooltip} * -1);
    
    &:before {
      border-top-color: ${color.blueDark2};
      top: 100%;
    }
`;

const bottom = `
    background-color: ${color.blueDark2};
    bottom: calc(${marginTooltip} * -1);

    &:before {
      bottom: 100%;
      border-bottom-color: ${color.blueDark2};
    }
`;

const left = `
    background-color: ${color.blueDark2};
    left: auto;
    right: ${marginTooltip};
    top: 50%;
    transform: translateX(0) translateY(-50%);
    
    &:before {
      border-left-color: ${color.blueDark2};
      left: auto;
      right: calc(${arrowSizeTooltip} * -2);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }

`;

const right = `
    background-color: ${color.blueDark2};
    left: ${marginTooltip};
    top: 50%;
    transform: translateX(0) translateY(-50%);

    &:before {
      border-right-color: ${color.blueDark2};
      left: calc(${arrowSizeTooltip} * -1);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
`;

export const tooltipStyles = {
    initialStyles,
    container,
    defaultContainer,
    marginTooltip,
    arrowSizeTooltip,
    top,
    bottom,
    left,
    right,
};
