import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';

const DivStyled = styled.div`
    ${resetCSS};
    ${fonts.text};
    ${fonts.textBold};
    background-color: ${color.white};
    border-radius: 16px;
    border: 2px solid ${color.blue05};
    display: grid;
    grid-gap: 5px;
    margin: 0;
    padding: 16px;
    width: 100%;
`;

const PStyledTopic = styled.p`
    color: ${color.navy40};
    margin: 0;
`;

const PStyledInfo = styled.p`
    color: ${color.blue70};
    font-size: 24px;
    margin: 0;
`;

export default { DivStyled, PStyledTopic, PStyledInfo };
