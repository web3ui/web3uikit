import { css } from 'styled-components';
import color, { getShade } from '../../../styles/colors';
import resetCSS from '../../../styles/reset';
import fonts from '../../../styles/fonts';

// the default styles for any button
export const initialStyles = css`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    border-radius: 12px;
    border: 2px solid transparent;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    overflow: hidden;
    position: relative;
    text-align: left;
    transition: all 0.2s ease;

    span {
        pointer-events: none;
        z-index: 1;
    }

    svg {
        height: 20px;
        pointer-events: none;
        width: 20px;
        z-index: 1;
    }

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

    :active {
        border-color: ${color.blue};
    }

    :disabled {
        opacity: 50%;
        pointer-events: none;
    }
`;

export const isLoadingMode = css`
    span {
        margin-left: 12px;
    }
`;

export const hoverEffect = css`
    :hover {
        :after {
            background-color: ${getShade('dark', 10)};
        }
    }
`;

export const transparent = css`
    background-color: transparent;
`;
