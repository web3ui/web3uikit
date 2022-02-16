import styled from 'styled-components';
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

export const TableGrid = styled.div.attrs((props: any) => ({
    columns: props.columns,
}))`
    ${resetCSS}
    ${fonts.text}
    padding-bottom: 11px;
    border-radius: 10px;
    border: 2px solid transparent;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    background-color: white;
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    row-gap: 22px;
    column-gap: 11px;
    overflow: none;
    min-height: fit-content;
    min-width: fit-content;
    & > .firstCol {
        /* border: 2px dashed red; */
        padding-left: 22px;
    }
    & > .lastCol {
        /* border: 2px dashed red; */
        padding-right: 22px;
    }
    & > div.table_header {
        margin-bottom: -11px;
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
