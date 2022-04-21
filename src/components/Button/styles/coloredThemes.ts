import { css } from 'styled-components';
import color, { getShade } from '../../../styles/colors';

// theme = colored common shades
const coloredShades = css`
    :after {
        background-color: ${getShade('light', 90)};
    }

    :hover {
        :after {
            background-color: ${getShade('light', 70)};
        }
    }

    :active {
        :after {
            background-color: ${getShade('light', 50)};
        }
    }
`;

// theme = colored
export const coloredRed = css`
    background-color: ${color.red};
    border-color: ${color.red};
    color: ${color.red};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.redDark};
    }

    svg {
        fill: ${color.red};
    }

    ${coloredShades}
`;
export const coloredGreen = css`
    background-color: ${color.green};
    border-color: ${color.green};
    color: ${color.green};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.greenDark};
    }

    svg {
        fill: ${color.green};
    }

    ${coloredShades}
`;
export const coloredBlue = css`
    background-color: ${color.blue};
    border-color: ${color.blue};
    color: ${color.blue};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blueDark};
    }

    svg {
        fill: ${color.blue};
    }

    ${coloredShades}
`;
export const coloredYellow = css`
    background-color: ${color.yellow};
    border-color: ${color.yellow};
    color: ${color.yellow};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.yellowDark};
    }

    svg {
        fill: ${color.yellow};
    }

    ${coloredShades}
`;
