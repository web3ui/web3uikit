import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import baseStyles from './atoms/styles';

const { inputFocusedOrFilled } = baseStyles;

const inputDisabled = css`
    filter: grayscale(1);
    opacity: 0.7;
    pointer-events: none;
`;

const DivStyled = styled.div<{ disabled?: boolean }>`
    display: block;
    margin-top: 12px;
    position: relative;

    &.filled label {
        ${(filled) => filled && inputFocusedOrFilled};
    }

    ${({ disabled }) => disabled && inputDisabled};
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
    top: calc(100% + 6px);
    color: ${color.white};
    font-size: 12px;
    padding: 4px 6px;
    left: 0;
    position: absolute;

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
    StrongStyledDescription,
    StrongStyledFeedback,
};
