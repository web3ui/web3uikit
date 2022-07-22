import styled from 'styled-components';
import { resetCSS } from '@test_kit_3/styles';

const DivStyled = styled.div`
    ${resetCSS}
    border-radius: 50%;
    display: inline-flex;
    overflow: hidden;
`;

export default {
    DivStyled,
};
