import styled, { css } from 'styled-components';
import resetCSS, { resetButtonCSS } from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import { InputProps, LabelProps } from './types';

export const DivWrapperStyled = styled.div<Pick<InputProps, 'state' | 'size'>>`
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

    &:hover > .input_prefixIcon > svg {
        fill: ${(p) => !p?.state && color.blue};
    }

    input {
        & + label {
            color: ${({ state }) => {
                switch (state) {
                    case 'error':
                        return color.red;
                    case 'confirmed':
                        return color.green;
                    case 'disabled':
                        return color.greyDisabled;
                    default:
                        return color.grey;
                }
            }};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `outline-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `outline-color: ${color.green};`}

        label {
            ${(p) => !p?.state && `color: ${color.blue};`}
        }
    }

    &:focus-within {
        outline: 2px solid ${color.blue};

        label {
            font-weight: 600;
            ${(p) => !p?.state && `color: ${color.blue};`}
        }

        ${(p) => p.state === 'error' && `outline-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `outline-color: ${color.green};`}
    }

    ${({ size }) => {
        switch (size) {
            case 'large':
                return css`
                    height: 56px;
                    padding: 14px 16px;
                    & > label {
                        top: 15px;
                    }
                `;
            case 'regular':
            default:
                return css`
                    height: 40px;
                    padding: 8px 16px;
                    & > label {
                        top: 8px;
                    }
                `;
        }
    }}
`;

export const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${({ labelBgColor }) => labelBgColor || color.white};
    height: 24px;
    left: ${({ hasPrefix }) => (hasPrefix ? '48px' : '16px')};
    pointer-events: none;
    position: absolute;
    transition: all 0.1s ease-out;
    z-index: 1;
`;

export const InputStyled = styled.input`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;

    &:focus,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -13px;
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

    &:-webkit-autofill,
    :-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
`;

const inputIconStyle = css`
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

export const DivStyled = styled.div`
    ${inputIconStyle}
    margin-right: 12px;
`;

export const CopyContainerStyled = styled.div`
    height: 100%;
    justify-content: center;
    margin-left: 24px;
    max-width: 24px;
    position: relative;
    width: 100%;

    & :first-child {
        width: 100%;
        height: 100%;
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
    margin-left: 12px;

    &:hover > svg {
        fill: ${color.blue};
    }
`;

export const StrongStyled = styled.strong`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`;
