import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IInputProps, TInputStates } from './types';

type TInputProps = Pick<
    IInputProps,
    'disabled' | 'setLabelMargin' | 'size' | 'state' | 'width'
>;

const inputDisabled = css`
    filter: grayscale(1);
    opacity: 0.7;
    pointer-events: none;
`;

const getColorByState = (state: TInputStates, defaultColor: string) => {
    switch (state) {
        case 'error':
            return color.red40;
        case 'confirmed':
            return color.mint40;
        case 'disabled':
            return color.gray30;
        default:
            return defaultColor;
    }
};

const DivStyled = styled.div<TInputProps>`
    ${resetCSS};
    ${fonts.text}
    background-color: ${color.white};
    border-radius: 16px;
    border: 1px solid
        ${(p) => p.state && getColorByState(p.state, color.gray30)};
    display: block;
    max-width: ${(p) => p.width || '100%'};
    position: relative;
    width: 100%;

    label {
        background-color: white;
        height: 24px;
        left: ${(p) => p.setLabelMargin?.left || '18px'};
        overflow: hidden;
        position: absolute;
        text-overflow: ellipsis;
        top: calc(50% - (24px / 2));
        transition: all 0.1s ease-out;
        white-space: nowrap;
        right: ${(p) => p.setLabelMargin?.right || '18px'};
        z-index: 1;
    }

    input {
        ${(p) => p.size === 'regular' && 'padding: 8px 18px'};
    }

    input + input {
        display: none;
    }

    &.focus label,
    &.filled label {
        background-color: transparent;
        border-radius: 4px;
        left: 14px;
        top: -14px;

        span {
            color: ${(p) => p.state && getColorByState(p.state, color.navy40)};
            font-size: 12px;
            font-weight: 550;
            overflow: hidden;
            padding: 2px 4px;
            position: relative;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: calc(100% - (18px * 2));
            z-index: 1;

            &::before {
                background-color: ${color.white};
                content: '';
                display: block;
                height: 100%;
                left: 0%;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: -1;
            }
        }
    }

    &.focus {
        box-shadow: 0px 0px 0px 3px ${color.navy30};
    }

    &:hover {
        border-color: ${color.navy30};
    }

    ${(p) => p.disabled && inputDisabled};
`;

const DivStyledInner = styled.div`
    ${resetCSS};
    align-items: stretch;
    border-radius: 16px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;

    .slot {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        margin: 0;
        padding: 10px;
        position: relative;
    }

    .slot + .slot:before {
        background-color: ${color.navy20};
        content: '';
        display: block;
        height: 60%;
        left: 0px;
        position: absolute;
        top: 20%;
        width: 1px;
    }
`;

const StrongStyledDescription = styled.strong`
    ${resetCSS}
    ${fonts.text}
    color: ${color.blueGray50};
    font-size: 12px;
    padding: 0 16px;
`;

const StrongStyledFeedback = styled.strong`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.red40};
    border-radius: 8px;
    color: ${color.white};
    font-size: 12px;
    left: 0;
    padding: 4px 6px;
    position: absolute;
    top: calc(100% + 6px);
    width: 100%;
    z-index: 3;

    &::after {
        background-color: ${color.red40};
        content: '';
        display: block;
        height: 12px;
        left: 20px;
        position: absolute;
        top: -2px;
        transform: rotate(45deg);
        width: 12px;
    }
`;

export default {
    DivStyled,
    DivStyledInner,
    StrongStyledDescription,
    StrongStyledFeedback,
};
