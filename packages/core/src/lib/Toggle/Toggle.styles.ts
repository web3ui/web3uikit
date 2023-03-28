import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IToggleProps } from './types';

type TLabelStyles = Pick<IToggleProps, 'customize' | 'disabled'>;

const LabelStyled = styled.label<TLabelStyles>`
    ${resetCSS};
    align-items: center;
    border: ${({ customize }) => customize?.border || 'none'};
    display: flex;
    gap: 8px;
    margin: ${({ customize }) => customize?.margin || 0};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    overflow: hidden;
    padding: ${({ customize }) => customize?.padding || 0};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    position: relative;
    width: fit-content;

    .toggle-label {
        ${fonts.text};
        color: ${({ customize }) => customize?.color || color.blueGray50};
        font-size: ${({ customize }) => customize?.fontSize || '18px'};
        font-weight: ${({ customize }) => customize?.fontSize || 'normal'};
    }

    .toggle {
        display: block;
        height: 100%;
        position: relative;
        width: 20px;

        &:before {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            content: '';
            display: block;
            height: 10px;
            left: 0;
            position: absolute;
            top: -5px;
            width: 100%;
        }

        &:after {
            background-color: ${({ customize }) =>
                customize?.backgroundColor || color.aero50};
            border-radius: 12px;
            content: '';
            display: block;
            height: 12px;
            left: 0;
            position: absolute;
            top: -6px;
            transition: all 0.1s ease-in-out;
            width: 12px;
        }
    }

    input {
        display: none;
    }

    input:checked + .toggle {
        &:after {
            left: calc(20px - 12px);
        }
    }
`;

const ToggleStyles = {
    LabelStyled,
};

export default ToggleStyles;
