import styled from 'styled-components';
import { resetCSS } from '@web3uikit/styles';

const TableParent = styled.div`
    display: flex;
    flex-direction: column;
`;

const PaginationStyled = styled.div`
    ${resetCSS}
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0px;
`;

export default {
    TableParent,
    PaginationStyled,
};
