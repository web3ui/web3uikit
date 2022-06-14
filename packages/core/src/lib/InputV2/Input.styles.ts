import styled, { css } from 'styled-components';
import { color, fonts, resetCSS, resetButtonCSS } from '@web3uikit/styles';
import { LabelProps, TInputProps, TInputState } from './types';
import {
    getLabelStyles,
    getStateStyles,
    getSizeStyles,
} from './helpers/helper.styles';

export type StyleProps = Pick<TInputProps, 'value' | 'size'> & {
    state?: TInputState;
    label?: string;
};

const DivWrapperStyled = styled.div<StyleProps>`
    ${resetCSS}
    border-radius: 16px;
    display: flex;
    max-width: 100%;
    min-width: fit-content;
    outline: 1px solid;
    position: relative;
    transition: all 0.1s linear;
    ${(p) => getStateStyles(p)};
    ${(p) => getSizeStyles(p)};
    ${(p) => getLabelStyles(p)};

    &:hover {
        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: pre-wrap;
        }
        svg,
        div > svg {
            color: ${color.blue};
        }
    }
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

const InputStyled = styled.input<Pick<TInputProps, 'label' | 'customInput'>>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    color: ${color.blueDark};
    width: 100%;
    ${(p) => p.customInput && 'width: 0px; height:0px;'}

    &:-webkit-autofill,
    :-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }
    //To hide arrows in number input
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }
`;

const DivStyledText = styled.div`
    ${fonts.text}
    width: 95%;
    margin: auto 0;
    color: ${color.blueDark};
    pointer-events: text;
`;

const ErrorStyledDiv = styled.div`
    background-color: ${color.red};
    border-radius: 4px;
    color: ${color.white};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 8px 12px;
    margin: 6px 0px;
    position: absolute;
    width: fit-content;
    &::after {
        content: ' ';
        position: absolute;
        left: 30px;
        top: -4px;
        border-top: none;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 4px solid ${color.red};
    }
`;

const StrongStyled = styled.strong`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.grey};
    font-size: 12px;
    font-weight: 400;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
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
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`;

const DivStyledIconWrapper = styled.div`
    ${inputIconStyle}
    position: relative;
    margin-right: 12px;
    &:hover > svg {
        fill: ${color.blue};
    }
`;

const ButtonStyledIcon = styled.button`
    ${resetButtonCSS};
    ${inputIconStyle};
    display: block;
    position: relative;
    margin-right: 12px;
    &:hover > svg {
        fill: ${color.blue};
    }
`;

const DivStyledGrid = styled.div`
    ${resetCSS};

    width: max-content;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 6px;
    div,
    button {
        ${inputIconStyle}
        width: 100%;
        height: 100%;
        margin: auto;
        svg {
            fill: ${color.grey} !important;
        }
    }
`;

export default {
    ButtonStyledIcon,
    DivStyledGrid,
    DivStyledIconWrapper,
    DivStyledText,
    DivWrapperStyled,
    ErrorStyledDiv,
    InputStyled,
    LabelStyled,
    StrongStyled,
};
