import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';

// types
import type { AccordionProps } from './types';

// styles
type TStyleProps = Pick<AccordionProps, 'theme'>;

const getThemeColor = (theme: string) => {
    switch (theme) {
        case 'blue':
            return color.navy40;
        case 'red':
            return color.red40;
        case 'green':
            return color.mint40;
        case 'yellow':
            return color.yellow50;
        default:
            return color.navy40;
    }
};

const SectionStyled = styled.section<TStyleProps>`
    background-color: ${color.white};
    border: 1px solid ${(p) => getThemeColor(p.theme)};
    border-radius: 20px;
    overflow: hidden;
`;

const HeaderStyled = styled.header`
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 12px;

    &:hover {
        background-color: ${color.navy10};
    }
`;

const H4Styled = styled.h4`
    ${resetCSS}
    ${fonts.heading}
    ${fonts.h4}
    line-height: 1;
    padding: 8px 0;
`;

const DivStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p {
        ${resetCSS}
        ${fonts.text}
        margin: 0 6px;
        min-width: 100px;
        text-align: right;
    }

    svg {
        margin: 0 6px;
        min-width: 18px;
    }

    div {
        margin: 0 6px;
    }

    &:last-of-type {
        margin-left: auto;
    }
`;

const DivStyledContent = styled.div`
    overflow: hidden;
`;

export default {
    DivStyled,
    DivStyledContent,
    H4Styled,
    HeaderStyled,
    SectionStyled,
    getThemeColor,
};
