import styled, { css } from 'styled-components';
import { color, getShade } from '@web3uikit/styles';
import ButtonBase from '../ButtonBase/ButtonBase';
import { ButtonProps } from '../types';

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

const coloredRed = css`
    background-color: ${color.red};
    border-color: ${color.red};
    color: ${color.red};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.red};
    }

    ${coloredShades}
`;

const coloredGreen = css`
    background-color: ${color.green};
    border-color: ${color.green};
    color: ${color.green};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.green};
    }

    ${coloredShades}
`;

const coloredBlue = css`
    background-color: ${color.blue};
    border-color: ${color.blue};
    color: ${color.blue};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.blue};
    }

    ${coloredShades}
`;

const coloredYellow = css`
    background-color: ${color.yellow};
    border-color: ${color.yellow};
    color: ${color.yellow};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.paleCerulean};
    }

    svg {
        fill: ${color.yellow};
    }

    ${coloredShades}
`;

const getColored = (color: string) => {
    switch (color) {
        case 'red':
            return coloredRed;
        case 'green':
            return coloredGreen;
        case 'blue':
            return coloredBlue;
        case 'yellow':
            return coloredYellow;
        default:
            return;
    }
};

const ButtonColoredStyled = styled(ButtonBase)<ButtonProps>`
    :after {
        background-color: ${getShade('dark', 0)};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    ${({ color }) => color && getColored(color)}
`;

export default {
    ButtonColoredStyled,
};
