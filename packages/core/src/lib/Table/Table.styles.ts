import styled, { css } from 'styled-components';
import { ITableProps } from '.';
import { color, fonts, resetCSS } from '@web3uikit/styles';

const TableParent = styled.div`
    display: flex;
    flex-direction: column;
`;

const NoData = styled.div`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    min-height: fit-content;
    align-items: flex-start;
    justify-content: center;
    grid-column: 1 / -1;
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
`;

const Divider = styled.div`
    padding-top: 1px;
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    grid-column: 1 / -1;
`;

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
interface PaginationTextProps {
    isActive: boolean;
}
const PaginationText = styled.div<PaginationTextProps>`
    cursor: ${(props) => (props.isActive ? 'pointer' : 'cursor')};
    color: ${(props) => (props.isActive ? color.blue : color.greyLight)};
`;

const DivTableCell = styled.div<
    Pick<ITableProps, 'alignCellItems' | 'justifyCellItems'>
>`
    align-items: ${(props) => props.alignCellItems};
    justify-content: ${(props) => props.justifyCellItems};
    display: flex;
    padding: 16px 0;
`;

const TableGrid = styled.div.attrs((props: any) => ({
    columns: props.columns,
    columnGapSize: props.columnGapSize,
    tableBackgroundColor: props.tableBackgroundColor,
}))`
    ${resetCSS}
    ${fonts.text}
    padding-bottom: 11px;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    background-color: ${(props) => props.tableBackgroundColor ?? 'white'};
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    // row-gap: 22px;
    column-gap: ${(props) => props.columnGapSize + 'px' ?? '11px'};
    min-height: fit-content;
    min-width: fit-content;
    & > .firstCol {
        padding-left: 22px;
    }
    & > .lastCol {
        padding-right: 22px;
    }
    & > div.table_header {
        font-weight: 600;
        padding: 12px 0;

        &:first-of-type {
            padding-left: 22px;
        }
    }
`;

const TableGridContainer = styled.div<{
    isScrollableOnOverflow: boolean;
}>`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    border-radius: 20px;
    padding: 1px;
    /* position: relative; */
    ${(props) =>
        props.isScrollableOnOverflow &&
        css`
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        `}
`;

interface PaginationTag {
    active: boolean;
}
const PaginationTag = styled.div<PaginationTag>`
    width: 32px;
    height: 32px;
    border: 2px solid transparent;
    border-radius: 12px;
    margin: 0px 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.active && color.blue};
    background-color: ${(props) => !props.active && '#EBEFF9'};
    cursor: ${(props) => !props.active && 'pointer'};
`;

const DivSpinnerLoaderParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / -1;
    & > h3 {
        margin-top: 29px;
    }
`;

const DivStyledCustomData = styled.div`
    grid-column: 1/-1;
    max-width: 100%;
    overflow: hidden;
`;

export default {
    DivSpinnerLoaderParent,
    DivStyledCustomData,
    DivTableCell,
    Divider,
    NoData,
    Pagination,
    PaginationTag,
    PaginationText,
    TableGrid,
    TableGridContainer,
    TableParent,
};
