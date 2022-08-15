import { color, fonts, resetCSS } from '@web3uikit/styles';
import styled from 'styled-components';

const SelectStyled = styled.select`
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
`;

const DivStyledDescription = styled.div`
    ${resetCSS};
    ${fonts.text};
    bottom: -23px;
    color: ${color.grey};
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
    DivStyledDescription,
    SelectStyled,
};
