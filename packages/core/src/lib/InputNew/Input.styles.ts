import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import InputBase from './atoms/InputBase';
import LabelBase from './atoms/LabelBase';

const inputFocusedOrFilled = css`
    border-radius: 4px;
    color: ${color.navy40};
    left: 14px;
    top: -12px;

    span {
        font-size: 12px;
        font-weight: 550;
        padding: 0 4px;
    }
`;

const InputStyled = styled(InputBase)`
    ${resetCSS};
    ${fonts.text}
    background-color: ${color.white};
    border-radius: 16px;
    border: 1px solid ${color.gray30};
    display: block;
    padding: 18px;
    width: 100%;

    &:focus + label {
        ${inputFocusedOrFilled}
    }
`;

const LabelStyled = styled(LabelBase)`
    background-color: ${color.white};
    box-sizing: border-box;
    color: ${color.blueGray50};
    display: block;
    height: 24px;
    left: 18px;
    position: absolute;
    top: calc(50% - (24px / 2));
    transition: all 0.1s ease-out;
    z-index: 1;
`;

const DivStyled = styled.div`
    display: block;
    position: relative;

    &.filled label {
        ${(filled) => filled && inputFocusedOrFilled};
    }
`;

export default {
    DivStyled,
    InputStyled,
    LabelStyled,
};
