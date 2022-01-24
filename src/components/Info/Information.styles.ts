import styled from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const DivStyled = styled.div`
    ${resetCSS};
    ${fonts.text};
    ${fonts.textBold};
    background-color: ${colors.white};
    border-radius: 16px;
    border: 2px solid ${colors.blueSkyLight};
    display: grid;
    grid-gap: 5px;
    margin: 0;
    padding: 16px;
    width: 100%;
`;

export const PStyledTopic = styled.p`
    color: ${colors.blue};
    margin: 0;
`;

export const PStyledInfo = styled.p`
    color: ${colors.blueDark};
    font-size: 24px;
    margin: 0;
`;
