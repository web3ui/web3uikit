import { css } from 'styled-components';
import color, { getShade } from '../../../styles/colors';

// theme = regular | primary | outline
export const regular = css`
    background-color: ${color.blueLight};
    border-color: ${color.blueLight};
    color: ${color.blue};

    :active {
        border-color: ${color.blue};
    }

    svg {
        fill: ${color.blue};
    }
`;

export const primary = css`
    background-color: ${color.green};
    border-color: ${color.greenLight};
    color: ${color.white};

    :active {
        border-color: ${color.greenLight};
    }

    svg {
        fill: ${color.white};
    }
`;

export const outline = css`
    background-color: ${color.white};
    border-color: ${color.blueLight};
    color: ${color.blue};

    :hover {
        background-color: ${color.blueDark};
        color: ${color.white};

        svg {
            fill: ${color.white};
        }
    }

    :active {
        border-color: ${color.blue};
    }

    svg {
        fill: ${color.blue};
    }
`;

export const translucent = css`
    background-color: ${getShade('dark', 20)};
    border-style: inset;
    color: ${color.white};
    svg {
        fill: ${color.white};
    }
`;
