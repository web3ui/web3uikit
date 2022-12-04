import styled, { css } from 'styled-components';
import { color, resetCSS, fonts } from '@web3uikit/styles';
import { ITableNewProps } from '../types';

const borderRadius = '20px';

const TableStyled = styled.table.attrs((props: any) => ({
    tableBackgroundColor: props.tableBackgroundColor,
    alignCellItems: props.alignCellItems,
    headerBgColor: props.headerBgColor,
    headerTextColor: props.headerTextColor,
    hoverBackgroundColor: props.hoverBackgroundColor,
    rowsLineStyle: props.rowsLineStyle,
}))`
    ${resetCSS};
    ${fonts.text}
    border-collapse: collapse;
    width: 100%;
    thead {
        background-color: ${(props) => props.headerBgColor ?? color.white};
        color: ${(props) => props.headerTextColor ?? color.white};
        th {
            background-color: ${(props) => props.headerBgColor ?? color.white};
        }
        tr > th:first-child {
            border-top-left-radius: ${borderRadius};
        }
        tr > th:last-child {
            border-top-right-radius: ${borderRadius};
        }
    }
    tbody {
        td {
            background-color: ${(props) =>
                props.tableBackgroundColor ?? color.white};
        }
        tr:hover {
            background-color: ${(props) => props.hoverBackgroundColor};
        }
        // Adds border radius to the last two cells of the table
        tr:last-child,
        tr:last-child:hover {
            td:first-child {
                border-bottom-left-radius: ${borderRadius};
            }
            td:last-child {
                border-bottom-right-radius: ${borderRadius};
            }
        }
    }
`;

type TStyleProps = Partial<ITableNewProps> & {
    isLastRowCell?: boolean;
};

const DivTableCell = styled.div<TStyleProps>`
    justify-content: ${(props) => props.justifyCellItems};
    align-items: ${(props) => props.alignCellItems};
    display: flex;
    padding: ${(props) => (props.cellPadding ? props.cellPadding : '16px 8px')};
`;

const TableDataOrHeadStyled = styled.div<TStyleProps>`
    ${(props) =>
        !props.isLastRowCell &&
        css`
            border-bottom: ${props.rowsLineStyle ??
                `1px solid ${color.navy20}`};
        `}
    vertical-align: ${(props) => props.alignCellItems};
`;

const TableContainer = styled.div<{
    isScrollableOnOverflow?: boolean;
    customTableBorder?: string;
    tableBackgroundColor?: string;
}>`
    border-radius: ${borderRadius};
    width: 100%;
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
        props.customTableBorder && `border: ${props.customTableBorder}`};
`;

const DivSpinnerLoaderParent = styled.div`
    background-color: ${color.white};
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
    background-color: ${color.white};
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
    TableDataOrHeadStyled,
};
