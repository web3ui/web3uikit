import styled, { css } from 'styled-components';
import { color, resetCSS, fonts } from '@web3uikit/styles';
import { ITableNewProps } from '../types';

const TableStyled = styled.table.attrs((props: any) => ({
    tableBackgroundColor: props.tableBackgroundColor,
    alignCellItems: props.alignCellItems,
    headerBgColor: props.headerBgColor,
    headerTextColor: props.headerTextColor,
    hoverBackgroundColor: props.hoverBackgroundColor,
}))`
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

    thead > tr {
        background-color: ${(props) => props.headerBgColor ?? color.white};
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
    overflow: hidden;
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
    TableStyled,
    DivSpinnerLoaderParent,
    NoDataStyle,
    TableContainer,
    DivTableCell,
};
