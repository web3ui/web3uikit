import { css } from 'styled-components';
import color, { getShade, gradientColors } from '../../../styles/colors';

// theme = primary | outline | secondary | translucent

export const secondary = css`
    background-color: ${color.blueLight};
    border-color: ${color.blueLight};
    color: ${color.blue};

    :active {
        border-color: ${color.blue};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blueDark};
    }

    svg {
        fill: ${color.blue};
    }
`;

export const primary = css`
    background-color: ${color.green};
    border-color: ${color.greenLight};
    color: ${color.white};

    :hover {
        background: radial-gradient(
                71.63% 130.21% at 50% 0%,
                #aadcd6 0%,
                rgba(33, 191, 150, 0) 100%
            ),
            #21bf96;
    }

    :active {
        border-color: ${color.greenLight};
        background: linear-gradient(
                83.64deg,
                #aadcd6 -9.46%,
                rgba(33, 191, 150, 0) 45.97%,
                #aadcd6 103.7%
            ),
            #21bf96;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.greenDark};
    }

    svg {
        fill: ${color.white};
    }
`;

export const outlineLarge = css`
    background-color: ${color.white};
    border-color: ${color.paleBlue2};
    color: ${color.grey};

    :hover {
        background-color: ${color.blueDark};
        border-color: ${color.grey};
        color: ${color.white};

        svg {
            fill: ${color.white};
        }
    }

    :active {
        border-width: 2px;
        padding: 6px 22px;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.grey};
    }

    svg {
        fill: ${color.grey};
    }
`;

export const outlineRegular = css`
    background-color: ${color.white};

    border-color: ${color.beauBlue};
    color: ${color.blue};

    :hover {
        background-image: ${gradientColors.beauBlue};
        border-color: transparent;
    }

    :active {
        border-color: ${color.paleCerulean};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.beauBlue};
    }

    svg {
        fill: ${color.blue};
    }
`;

export const outlineSmall = css`
    background-color: ${color.white};

    border-color: ${color.green};
    color: ${color.green};

    :hover {
        background-color: ${color.green};
        color: ${color.white};

        svg {
            fill: ${color.white};
        }
    }

    :active {
        border-color: ${color.greenDark};
        background-color: ${color.greenDark};
        color: ${color.white};

        svg {
            fill: ${color.white};
        }
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.greenDark};
    }

    svg {
        fill: ${color.green};
    }
`;

export const translucent = css`
    background-color: ${getShade('dark', 20)};
    border-style: inset;
    color: ${color.white};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blueDark};
    }

    svg {
        fill: ${color.white};
    }
`;
