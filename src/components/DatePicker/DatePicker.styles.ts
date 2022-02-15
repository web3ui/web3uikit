import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';

export const SpanStyled = styled.span`
    ${resetCSS};
    align-items: center;
    background-color: ${color.white};
    border-radius: 50%;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 5px;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 0;
`;
