import styled from 'styled-components';
import { AbsoluteIconStyledProps, CardProps } from './types';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const DivStyled = styled.div<
    Pick<CardProps, 'selected' | 'isDisabled' | 'cursorType'>
>`
    ${resetCSS};
    ${fonts.text};
    outline: 2px solid transparent;
    background: ${colors.blueLight};
    border-radius: 20px;
    display: grid;
    min-height: fit-content;
    padding: 15px;
    position: relative;
    transition: all 0.2s ease;
    width: 100%;
    ${(p) =>
        p.isDisabled
            ? 'opacity:70%;'
            : `&:hover {
        background: radial-gradient(
            102.8% 102.8% at 3.14% -9.06%,
            #e9fffc 0%,
            #e8fefb 4.74%,
            #e4f4f7 50.11%,
            #e1eef4 83.07%,
            #e0ecf3 100%
        );
    }`}
    ${(p) => p.cursorType === 'pointer' && 'cursor: pointer;'}
    ${(p) => p.selected && `outline-color: ${colors.green};`}
`;

export const AbsoluteIconStyled = styled.div<AbsoluteIconStyledProps>`
    position: absolute;
    top: -2px;
    ${(p) => (p.position === 'topL' ? 'left: -2px;' : 'right: -2px;')}
`;

export const HeaderStyled = styled.header`
    padding: 11px;
    position: relative;
`;

export const FooterStyled = styled.footer`
    color: ${colors.blue};
    display: grid;
    text-align: center;
    & > p {
        ${fonts.textBold}
        margin: 0;
    }
    & > span {
        color: #68738d;
        font-size: 12px;
        ${fonts.text}
    }
`;

const CardStyles = {
    AbsoluteIconStyled,
    DivStyled,
    FooterStyled,
    HeaderStyled,
};

export default CardStyles;
