import styled, { css } from 'styled-components';
import { AbsoluteIconStyledProps, CardProps } from './types';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const selected = css`
    border: 2px solid ${colors.green};
`;

const hoverNotSelected = css`
    &:hover {
        border: 2px solid ${colors.blueSky};
    }
`;

export const DivStyled = styled.div<
    Pick<CardProps, 'selected' | 'isDisabled' | 'cursorType'>
>`
    ${resetCSS};
    ${fonts.text};
    border: 2px solid transparent;
    background-color: ${colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    display: grid;
    min-height: fit-content;
    padding: 15px;
    position: relative;
    transition: all 0.2s ease;
    width: 100%;
    ${(p) => p.isDisabled && 'opacity:70%;'}
    ${(p) => p.cursorType === 'pointer' && 'cursor: pointer;'}
    ${(p) => (p.selected ? selected : !p.isDisabled && hoverNotSelected)}
`;

export const AbsoluteIconStyled = styled.div<AbsoluteIconStyledProps>`
    position: absolute;
    top: 0;
    ${(p) => (p.position === 'topL' ? 'left: 0;' : 'right: 0;')}
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
