import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

// types
import type { AccordionProps } from './types';

// styles
type TStyleProps = Pick<AccordionProps, 'theme'>;

export const getThemeColor = (theme: string) => {
    switch (theme) {
        case 'blue':
            return color.blue;
        case 'red':
            return color.red;
        case 'green':
            return color.green;
        case 'yellow':
            return color.yellow;
        default:
            return color.blue;
    }
};

export const SectionStyled = styled.section<TStyleProps>`
    background-color: ${color.white};
    border: 1px solid ${(p) => getThemeColor(p.theme)};
    border-radius: 20px;
    opacity: 0%;
    overflow: hidden;
    transition-delay: 0.3s;
    transition: opacity 0.3s ease-out;
`;

export const HeaderStyled = styled.header`
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 12px;

    &:hover {
        background-color: ${color.paleBlue2};
    }
`;

export const H4Styled = styled.h4`
    ${resetCSS}
    ${fonts.heading}
    ${fonts.h4}
    line-height: 1;
    padding: 8px 0;
`;

export const DivStyled = styled.div`
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

export const DivStyledContent = styled.div`
    overflow: hidden;
    transition: max-height 0.3s ease-out;
`;
