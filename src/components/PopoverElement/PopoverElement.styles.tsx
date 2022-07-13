import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import DropdownElementProps from './types';

const DivContainerStyled = styled.div<DropdownElementProps>`
    background: ${(p) => (p.backgroundColor ? p.backgroundColor : '')};
    cursor: pointer;
    display: inline-block;
`;

const DivStyled = styled.div<
    Pick<DropdownElementProps, 'width' | 'height' | 'onClick'>
>`
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    height: ${(p) => (p.height ? `${p.height}px` : 'auto')};
    width: ${(p) => (p.width ? `${p.width}px` : 'auto')};
`;

const DivImageStyled = styled.div`
    padding-right: 8px;
`;

const TextStyled = styled.p<
    Pick<DropdownElementProps, 'textColor' | 'textSize'>
>`
    ${fonts.openSans};
    ${fonts.textBold};
    color: ${(p) => (p.textColor ? p.textColor : colors.white)};
    font-size: ${(p) => (p.textSize ? `${p.textSize}px` : '')};
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default {
    DivContainerStyled,
    DivImageStyled,
    DivStyled,
    TextStyled,
};
