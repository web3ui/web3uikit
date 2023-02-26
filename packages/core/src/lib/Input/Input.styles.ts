import styled, { css } from 'styled-components';
import { color, fonts, resetCSS, resetButtonCSS } from '@web3uikit/styles';
import { InputProps, LabelProps } from './types';

const DivWrapperStyled = styled.div<Pick<InputProps, 'state' | 'size'>>`
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
                return color.red40;
            case 'confirmed':
                return color.mint40;
            case 'disabled':
                return color.gray30;
            default:
                return color.gray30;
        }
    }};

    & > * > * > * {
        ${(p) => p.state === 'disabled' && ` fill: ${color.gray30};`};
    }

    &:hover {
        outline-color: ${(p) => p.state !== 'disabled' && color.navy40};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: pre-wrap;
        }
    }

    &:hover > .input_prefixIcon > svg {
        fill: ${(p) => !p?.state && color.navy40};
    }

    input {
        & + label {
            color: ${({ state }) => {
                switch (state) {
                    case 'error':
                        return color.red40;
                    case 'confirmed':
                        return color.mint40;
                    case 'disabled':
                        return color.gray30;
                    default:
                        return color.blueGray50;
                }
            }};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `outline-color: ${color.red40};`}
        ${(p) => p.state === 'confirmed' && `outline-color: ${color.mint40};`}

        label {
            ${(p) => !p?.state && `color: ${color.navy40};`}
        }
    }

    &:focus-within,
    &.input_filled {
        outline: 2px solid ${color.navy40};

        label {
            font-weight: 600;
            ${(p) => !p?.state && `color: ${color.navy40};`}
        }

        ${(p) => p.state === 'error' && `outline-color: ${color.red40};`}
        ${(p) => p.state === 'confirmed' && `outline-color: ${color.mint40};`}
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

const LabelStyled = styled.label<LabelProps>`
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

const InputStyled = styled.input<Pick<InputProps, 'customInput'>>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;
    ${(p) => p.customInput && 'width: 0px; height:0px;'}

    &:focus,
    &:placeholder-shown,
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
            color: ${color.blueGray50};
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
        fill: ${color.blueGray50};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`;

const DivStyled = styled.div`
    ${inputIconStyle}
    margin-right: 12px;
`;

const CopyContainerStyled = styled.div`
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
        border-left: 1px solid ${color.navy20};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`;

const VisibilityIcon = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    margin-left: 12px;

    &:hover > svg {
        fill: ${color.navy40};
    }
`;

interface IStrongStyledProps {
    isError: boolean;
}

const StrongStyled = styled.strong<IStrongStyledProps>`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${(props) => (props.isError ? color.red40 : color.blueGray50)};
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

export default {
    CopyContainerStyled,
    DivStyled,
    DivWrapperStyled,
    InputStyled,
    LabelStyled,
    StrongStyled,
    VisibilityIcon,
};
