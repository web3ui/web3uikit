import styled from 'styled-components';
import { color, fonts } from '@web3uikit/styles';
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
    align-items: center;
    display: flex;
    width: 24px;
    height: 24px;
    margin: auto 0;
    padding-right: 8px;
`;

const TextStyled = styled.p<
    Pick<DropdownElementProps, 'textColor' | 'textSize'>
>`
    ${fonts.openSans};
    ${fonts.textBold};
    color: ${(p) => (p.textColor ? p.textColor : color.white)};
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
