import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { InputIconProps, InputProps } from './types';

export const InputStyled = styled.input`
    ${resetCSS}
    ${fonts.text}
    border: 1px solid ${color.greyLight};
    border-radius: 16px;
    padding: 16px 52px;
    transition: all 0.1s linear;
    display: inline-block;
    height: 56px;
    background-color: transparent;

    &:hover {
        border-color: ${color.blue};
    }

    &:hover,
    .input_icon > svg {
        fill: ${color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
            color: ${color.blue};
        }
    }

    &:focus,
    .filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -10px;
            left: 12px;
            background-color: ${color.white};
        }
    }
`;

export const LabelStyled = styled.label`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    height: 24px;
    left: 48px;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: calc(50% - 12px);
    transition: all 0.1s ease-out;
`;

export const StyledWrapper = styled.div<Pick<InputProps, 'state'>>`
    position: relative;
    display: inline-block;

    input {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
    & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }

        &:hover {
            ${(p) => p.state === 'error' && `border-color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
            + label {
                color: ${color.blue};
            }
        }

        &:focus {
            ${(p) => p.state === 'error' && `border-color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
            & + label {
                ${(p) => p.state === 'error' && `color: ${color.red};`}
                ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
            }
        }
    }
`;

export const InputIcon = styled.div<InputIconProps>`
    ${resetCSS}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    position: absolute;
    width: 100%;
    ${({ type }) => (type === 'prefix' ? 'left: 16px;' : 'right: 16px;')}
    & :first-child {
        fill: ${color.grey};
        transition: fill 0.1s ease-out;
        width: 100%;
        height: 100%;
    }
`;

const InputStyles = {
    InputStyled,
    LabelStyled,
    StyledWrapper,
    InputIcon,
};

export default InputStyles;
