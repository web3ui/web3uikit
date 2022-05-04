import styled from 'styled-components';
import { TableProps } from '.';
import color from '../../styles/colors';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

export const TableParent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NoData = styled.div`
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

export const Divider = styled.div`
    padding-top: 1px;
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    grid-column: 1 / -1;
`;

export const Pagination = styled.div`
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
export const PaginationText = styled.div<PaginationTextProps>`
    cursor: ${(props) => (props.isActive ? 'pointer' : 'cursor')};
    color: ${(props) => (props.isActive ? colors.blue : colors.greyLight)};
`;

export const DivTableCell = styled.div<
    Pick<TableProps, 'alignCellItems' | 'justifyCellItems'>
>`
    align-items: ${(props) => props.alignCellItems};
    justify-content: ${(props) => props.justifyCellItems};
    display: flex;
    padding: 16px 0;
`;

export const TableGrid = styled.div.attrs((props: any) => ({
    columns: props.columns,
}))`
    ${resetCSS}
    ${fonts.text}
    padding-bottom: 11px;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    background-color: white;
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    // row-gap: 22px;
    column-gap: 11px;
    overflow: hidden;
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

export const TableGridContainer = styled.div`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    border-radius: 20px;
    padding: 1px;
    position: relative;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

interface PaginationTag {
    active: boolean;
}
export const PaginationTag = styled.div<PaginationTag>`
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

export const DivSpinnerLoaderParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / -1;
    & > h3 {
        margin-top: 29px;
    }
`;
