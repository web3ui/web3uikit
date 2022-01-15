import styled from 'styled-components';
import color from '../../styles/colors';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

export const TableParent = styled.div`
    padding: 22px;
    border-radius: 10px;
    border: 2px solid transparent;
    border-radius: 20px;
    overflow-x: auto;
    overflow-y: auto;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    display: flex;
    flex-direction: column;
`;

export const NoData = styled.div`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    height: 150px;
    align-items: center;
    justify-content: center;
    grid-column: 1 / -1;
`;

export const Divider = styled.div`
    border-bottom: 0px solid transparent;
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
    padding: 11px 0px;
    > div {
        display: flex;
        flex-direction: row;
        min-width: 50px;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const PaginationText = styled.div.attrs((props) => ({
    active: props.isActive,
}))`
    cursor: ${(props) => (props.active ? 'pointer' : 'cursor')};
    color: ${(props) => (props.active ? colors.blue : colors.greyLight)};
`;

export const TableGrid = styled.div.attrs((props) => ({
    columns: props.columns,
}))`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    row-gap: 22px;
    overflow-x: auto;
`;

export const PaginationTag = styled.div.attrs((props) => ({
    active: props.pageNumber == props.currentPageNumber ? true : false,
}))`
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
