import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const BlockieStyled = styled.div`
    ${resetCSS}
    display: inline-flex;
    border-radius: 50%;
    overflow: hidden;
`;

export const BlockieStyles = {
    BlockieStyled,
};
