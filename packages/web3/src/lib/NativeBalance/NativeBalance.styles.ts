import styled from 'styled-components';
import { fonts } from '@test_kit_4/styles';

const BalanceStyled = styled.span`
    ${fonts.semiBold}
    white-space: nowrap;
    line-height: 25px;
`;

const NativeBalanceStyles = {
    BalanceStyled,
};

export default NativeBalanceStyles;
