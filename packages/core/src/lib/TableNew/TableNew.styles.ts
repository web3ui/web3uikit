import styled, { css } from 'styled-components';
import { color, resetCSS, fonts } from '@web3uikit/styles';
import type { ITableNewProps } from './types';

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
