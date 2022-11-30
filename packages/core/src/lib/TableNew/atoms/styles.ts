import styled, { css } from 'styled-components';
import { color, resetCSS, fonts } from '@web3uikit/styles';
import { ITableNewProps } from '../types';

interface PaginationTag {
    active: boolean;
}
interface PaginationTextProps {
    isActive: boolean;
}

const TableStyled = styled.table.attrs((props: any) => ({
    tableBackgroundColor: props.tableBackgroundColor,
    alignCellItems: props.alignCellItems,
    headerBgColor: props.headerBgColor,
    headerTextColor: props.headerTextColor,
    hoverBackgroundColor: props.hoverBackgroundColor,
}))`
    ${resetCSS}
    ${fonts.text}
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    background-color: ${(props) => props.tableBackgroundColor ?? color.white};
    border-collapse: collapse;
    width: 100%;
    td,
    th {
        border-bottom: 1px #cee4f3 solid;
        vertical-align: ${(props) => props.alignCellItems};
    }
    th {
        background-color: ${(props) =>
            props.headerBgColor ?? color.white} !important;
        color: ${(props) => props.headerTextColor ?? color.white};
    }
    .hover:hover {
        background-color: ${(props) => props.hoverBackgroundColor};
    }
`;

const DivTableCell = styled.div<
    Pick<ITableNewProps, 'justifyCellItems' | 'cellPadding'>
>`
    justify-content: ${(props) => props.justifyCellItems};
    display: flex;
    padding: ${(props) => (props.cellPadding ? props.cellPadding : '16px 8px')};
`;

const TableContainer = styled.div<{
    isScrollableOnOverflow?: boolean;
    customTableBorder?: string;
}>`
    background: ${color.white};
    border: 1px #cee4f3 solid;
    border-radius: 20px;
    padding: 1px;
    ${(props) =>
        props.isScrollableOnOverflow &&
        css`
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        `};
    ${(props) =>
        props.customTableBorder && `border:${props.customTableBorder}`};
`;
const PaginationStyled = styled.div`
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

const DivSpinnerLoaderParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > h3 {
        margin-top: 29px;
    }
`;

const NoDataStyle = styled.div`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    min-height: fit-content;
    align-items: flex-start;
    justify-content: center;
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
`;

export default {
    PaginationStyled,
    PaginationTag,
    PaginationText,
    TableStyled,
    DivSpinnerLoaderParent,
    NoDataStyle,
    TableContainer,
    DivTableCell,
};
