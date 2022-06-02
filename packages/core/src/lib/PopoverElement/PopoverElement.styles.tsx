import styled from 'styled-components';
import { color, fonts } from '@web3uikit/styles';
import DropdownElementProps from './types';

const DivContainerStyled = styled.div<DropdownElementProps>`
  background: ${(p) => (p.backgroundColor ? p.backgroundColor : '')};
  cursor: pointer;
  display: inline-block;
`;

const DivStyled = styled.div<Pick<DropdownElementProps, 'width' | 'height' | 'onClick'>>`
  display: flex;
  flex-direction: row;
  height: ${(p) => (p.height ? `${p.height}px` : 'auto')};
  padding-left: 16px;
  padding-right: 16px;
  width: ${(p) => (p.width ? `${p.width}px` : 'auto')};
`;

const DivImageStyled = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
`;

const TextStyled = styled.p<Pick<DropdownElementProps, 'textColor' | 'textSize'>>`
  align-items: center;
  color: ${(p) => (p.textColor ? p.textColor : color.white)};
  display: flex;
  font-size: ${(p) => (p.textSize ? `${p.textSize}px` : '')};
  ${fonts.openSans};
  ${fonts.textBold};
`;

export default {
  DivContainerStyled,
  DivImageStyled,
  DivStyled,
  TextStyled
};
