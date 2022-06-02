import styled from 'styled-components';
import color from './colors';
import fonts from './fonts';
import resetCSS from './reset';

export const H1Styled = styled.h1`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h1}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`;

export const H2Styled = styled.h2`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h2}
    margin-bottom: 12px;

    &:empty {
        display: none;
    }
`;

export const PStyled = styled.p`
    ${resetCSS};
    ${fonts.text};

    span {
        ${fonts.textBold};
        color: ${color.blue};
    }

    &:last-of-type {
        margin: 8px 0 16px;
    }
`;
