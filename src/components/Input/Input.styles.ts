import styled, { css } from 'styled-components';
import resetCSS, { resetButtonCSS } from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import { InputProps, LabelProps } from './types';

export const DivWrapperStyled = styled.div<Pick<InputProps, 'state'>>`
    ${resetCSS}
    border-radius: 16px;
    border: 1px solid;
    display: flex;
    height: 56px;
    max-width: 100%;
    padding: 14px 16px;
    position: relative;
    transition: all 0.2s linear;

    border-color: ${({ state }) => {
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
        border-color: ${(p) => p.state !== 'disabled' && color.blue};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: wrap;
        }
    }

    &:hover > .input_prefixIcon > svg {
        fill: ${(p) => !p?.state && color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
            color: ${color.blue};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        label {
            ${(p) => !p?.state && `color: ${color.blue};`}
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
`;

export const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 24px;
    left: ${({ hasPrefix }) => (hasPrefix ? '48px' : '16px')};
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
    transition: all 0.1s ease-out;
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

export const ButtonStyled = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    margin-left: 24px;

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
