import styled, { css } from 'styled-components';
import { color, resetCSS, fonts } from '@web3uikit/styles';
import type { ITableNewProps } from './types';

const TableParent = styled.div`
    display: flex;
    flex-direction: column;
`;

interface PaginationTag {
    active: boolean;
}
interface PaginationTextProps {
    isActive: boolean;
}
const Pagination = styled.div`
    ${resetCSS}
    ${fonts.text}
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 12px 0px;
    > div {
        display: flex;
        flex-direction: row;
        min-width: 50px;
        justify-content: space-evenly;
        align-items: center;
    }
`;
const PaginationText = styled.div<PaginationTextProps>`
    cursor: ${(props) => (props.isActive ? 'pointer' : 'cursor')};
    color: ${(props) => (props.isActive ? color.navy40 : color.gray30)};
`;
const PaginationTag = styled.div<PaginationTag>`
    width: 32px;
    height: 32px;
    border: 2px solid transparent;
    border-radius: 12px;
    margin: 0px 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.active && color.navy40};
    background-color: ${(props) => !props.active && color.navy10};
    cursor: ${(props) => !props.active && 'pointer'};
`;

export default {
    Pagination,
    PaginationTag,
    PaginationText,
    TableParent,
};
