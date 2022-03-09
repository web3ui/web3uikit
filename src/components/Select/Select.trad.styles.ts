import styled from 'styled-components';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import { SelectProps } from './types';

export const DivStyled = styled.div<Pick<SelectProps, 'state'>>`
    ${resetCSS}
    border-radius: 16px;
    display: flex;
    max-width: 100%;
    min-width: fit-content;
    outline: 1px solid;
    position: relative;
    transition: all 0.1s linear;

    outline-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red;
            case 'confirmed':
                return color.green;
            case 'disabled':
                return color.greyDisabled;
            default:
                return color.greyLight;
        }
    }};

    & > * > * > * {
        ${(p) => p.state === 'disabled' && ` fill: ${color.greyDisabled};`};
    }

    &:hover {
        outline-color: ${(p) => p.state !== 'disabled' && color.blue};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: pre-wrap;
        }
    }
`;

export const LabelStyled = styled.label`
    position: relative;
    display: block;
`;

export const SelectStyled = styled.select`
    position: relative;
    display: block;
`;
