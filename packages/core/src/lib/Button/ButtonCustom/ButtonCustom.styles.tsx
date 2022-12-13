import styled from 'styled-components';
import { getShade } from '@web3uikit/styles';
import ButtonBase from '../ButtonBase/ButtonBase';
import { ButtonProps } from '../types';

const ButtonCustomStyled = styled(ButtonBase)<ButtonProps>`
    background-color: ${(p) => p.customize?.backgroundColor};
    border-radius: ${(p) => p.customize?.borderRadius};
    border: ${(p) => p.customize?.border};
    font-size: ${(p) => p.customize?.fontSize};
    font-weight: ${(p) => p.customize?.fontWeight};
    padding: ${(p) => p.customize?.padding};
    margin: ${(p) => p.customize?.margin};

    span {
        color: ${(p) => p.customize?.color};
        font-size: ${(p) => p.customize?.fontSize};
    }

    svg {
        fill: ${(p) => p.customize?.color};
    }

    :after {
        background-color: transparent;
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

    :hover {
        background-color: ${(p) => p.customize?.backgroundColor};

        :after {
            background-color: ${(p) =>
                p.customize?.onHover === 'lighten'
                    ? getShade('light', 20)
                    : getShade('dark', 20)};
        }
    }

    :active {
        :after {
            background-color: ${(p) =>
                p.customize?.onHover === 'lighten'
                    ? getShade('light', 40)
                    : getShade('dark', 40)};
        }
    }
`;

export default {
    ButtonCustomStyled,
};
