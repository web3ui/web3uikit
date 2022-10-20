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
    background-color: ${color.red40};
    border-color: ${color.red40};
    color: ${color.red40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.red40};
    }

    ${coloredShades}
`;

const coloredGreen = css`
    background-color: ${color.mint40};
    border-color: ${color.mint40};
    color: ${color.mint40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.mint40};
    }

    ${coloredShades}
`;

const coloredBlue = css`
    background-color: ${color.navy40};
    border-color: ${color.navy40};
    color: ${color.navy40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.navy40};
    }

    ${coloredShades}
`;

const coloredYellow = css`
    background-color: ${color.yellow50};
    border-color: ${color.yellow50};
    color: ${color.yellow50};

    :focus {
        box-shadow: 0px 0px 0px 2px ${color.navy30};
    }

    svg {
        fill: ${color.yellow50};
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
        border-radius: 10px;
    }

    ${({ color }) => color && getColored(color)}
`;

export default {
    ButtonColoredStyled,
};
