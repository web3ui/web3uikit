import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

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
        border-top-color: red;
        border: solid ${arrowSizeTooltip} transparent;
        content: '';
        height: 0;
        left: 50%;
        margin-left: calc(${arrowSizeTooltip} * -1);
        position: absolute;
        width: 0;
    }
`;

export const tooltipStyles = {
  initialStyles,
  container,
  marginTooltip,
  arrowSizeTooltip,
};
