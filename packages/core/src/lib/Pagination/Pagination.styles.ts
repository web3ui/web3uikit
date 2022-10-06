import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IPaginationStyleProps } from './types';

const DivStyledPagination = styled.div`
    ${resetCSS}
    ${fonts.text}
    display: flex;
    align-items: center;
    color: ${color.blueDark3};
    font-weight: 550;
    font-size: 14px;
    line-height: 24px;
    :first-child {
        margin-left: 0px;
    }
`;

const DivStyledPaginationText = styled.div<IPaginationStyleProps>`
    ${resetCSS}
    font-size: 16px;
    margin: 0px 8px;
    cursor: ${(props) => (props.isActive ? 'pointer' : 'cursor')};
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const DivStyledPaginationTag = styled.div<IPaginationStyleProps>`
    ${resetCSS}
    align-items: center;
    background-color: ${(props) => !props.isActive && color.blueLight6};
    border-radius: 12px;
    border: 2px solid
        ${(props) => (props.isActive ? color.paleCerulean : 'transparent')};
    cursor: ${(props) => !props.isActive && !props.isDot && 'pointer'};
    display: flex;

    margin: 0px 8px;
    min-height: 32px;
    min-width: 32px;
    max-width: 32px;
    ${(props) =>
        !props.isDot &&
        css`
            :hover {
                background-color: ${color.blueLight7};
            }
        `};
    div {
        margin: auto;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default {
    DivStyledPagination,
    DivStyledPaginationText,
    DivStyledPaginationTag,
};
