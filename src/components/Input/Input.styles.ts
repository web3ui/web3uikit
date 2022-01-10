import resetCSS, { resetButtonCSS } from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled from 'styled-components';
import { InputIconProps, InputProps } from './types';

export const InputWrapper = styled.div<Pick<InputProps, 'state'>>`
    ${resetCSS}
    border-radius: 16px;
    border: 1px solid ${color.greyLight};
    display: flex;
    height: 56px;
    padding: 0 16px;
    position: relative;
    transition: all 0.2s linear;
    width: 320px;

    &:hover {
        border-color: ${(p) =>
            p.state === 'disabled' ? color.greyLight : color.blue};
    }

    &:hover > .input_prefix > svg {
        fill: ${color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
            color: ${color.blue};
        }
    }

    ${(p) => p.state === 'error' && `border-color: ${color.red};`}
    ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        label {
            ${(p) =>
                p.state !== 'error' &&
                p.state !== 'confirmed' &&
                p.state !== 'disabled' &&
                `color: ${color.blue};`}
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

    input {
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }
    }
`;

export const LabelStyled = styled.label`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 24px;
    left: 48px;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: 15px;
    transition: all 0.1s ease-out;
`;

export const InputStyled = styled.input`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    margin: 12px;
    width: 100%;

    &:focus,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -12px;
            left: 12px;
        }
    }

    &:focus {
        &::placeholder {
            display: none;
            visibility: visible;
            color: ${color.grey};
        }
    }
`;

const inputIconStyle = `
    ${resetCSS}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 100%;
    & :first-child {
        fill: ${color.grey};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`;

export const InputIcon = styled.div<InputIconProps>`
    ${inputIconStyle}
`;

export const CopyInputIcon = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    &:hover > svg {
        fill: ${color.blue};
    }
    &:before {
        border-left: 1px solid ${color.paleBlue2};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`;

export const VisibilityIcon = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    &:hover > svg {
        fill: ${color.blue};
    }
    &:before {
        border-left: 1px solid ${color.paleBlue2};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`;

const InputStyles = {
    CopyInputIcon,
    InputIcon,
    InputStyled,
    InputWrapper,
    LabelStyled,
    VisibilityIcon,
};

export default InputStyles;
