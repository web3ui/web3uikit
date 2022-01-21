// importing styled to make components and css to make themes
import styled, { css } from 'styled-components';

// importing centralized styles
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

// import our types to conditionally render CSS
import type { NewCompProps } from './types';

// pick the props that you will use for conditional CSS
type TStyleProps = Pick<NewCompProps, 'state' | 'hasUnderline'>;

////////////////////
// Theme CSS
// CSS Props should be sorted alphabetically
////////////////////
export const greenColor = css`
    color: ${color.green};
`;
export const redColor = css`
    color: ${color.red};
`;

////////////////////
// Styled Components
// CSS Props should be sorted alphabetically
////////////////////
export const SectionStyled = styled.section`
    background-color: ${color.white};
    border-bottom: 5px solid ${color.green};
    border-top: 5px solid ${color.yellow};
    padding: 12px 24px;
`;

export const SpanStyled = styled.span`
    display: flex;
    align-items: center;

    svg {
        margin-right: 8px;
    }
`;

export const TitleStyled = styled.h1<TStyleProps>`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h1};
    margin-bottom: 12px;
`;

export const HeadingStyled = styled.h2<TStyleProps>`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h2};
    margin-bottom: 12px;
    ${(p) => (p.state === 'greenLight' ? greenColor : redColor)};
`;

export const TextStyled = styled.p<TStyleProps>`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.text};
    margin-top: 12px;
    text-decoration: ${(p) => (p.hasUnderline ? 'underline' : 'none')}; ;
`;

// CSS ORDERING
// 1 - Imported styles (font, colors, etc)
// 2 - Normal styles (margin, padding, etc)
// 3 - Child elements (span, svg, etc)
// 4 - Pseudo elements (before & after)
// 5 - Modifier styles (hover, active etc)
// 6 - State changed styles ${(p) => (p.prop ? green : red)};
// each should be sorted alphabetically as best as possible
