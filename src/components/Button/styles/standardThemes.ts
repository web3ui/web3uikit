import { css } from 'styled-components';
import color, { getShade, gradientColors } from '../../../styles/colors';

export const secondary = css`
    background-color: ${color.blueLight};
    border-color: ${color.blueLight};
    color: ${color.blue};

    :active {
        border-color: ${color.blue};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
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
        outline: 0;
        box-shadow: none;
    }
    
    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blue};
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
        box-shadow: 0px 0px 0px 2px ${color.blueDark};
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.blueSky};
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
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
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
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.green};
    }
`;

export const translucent = css`
    background-color: ${getShade('dark', 20)};
    border-style: inset;
    color: ${color.white};

    :active {
        border: none;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.white};
    }
`;

export const status = css`
    background-color: ${color.yellowLight};
    border-width: 0px;
    color: ${color.yellow};

    :hover {
        :after {
            background-color: ${color.yellowHover};
        }
    }

    svg {
        fill: ${color.white};
    }
`;

export const ghost = css`
    background-color: ${color.blueDark}20;
    border-width: 0px;
    color: ${color.white};

    :hover {
        color: ${color.blueDark}20;
        background: ${color.white};
    }

    svg {
        fill: ${color.white};
    }
`;

export const link = css`
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${color.blue};
    padding: 0px;
    color: ${color.blue};

    :active {
        border-width: 0px;
        border-bottom: 1px solid ${color.blue};
    }

    :hover {
        color: ${color.blueSkyDark};
        border-bottom: 1px solid ${color.blueSkyDark};
    }

    svg {
        fill: ${color.blue};
    }
`;

export const text = css`
    background-color: transparent;
    border-width: 0px;
    color: ${color.blue};

    svg {
        fill: ${color.blue};
    }
`;
