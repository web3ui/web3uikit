import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { ICodeAreaProps } from './types';

const TextAreaStyled = styled.textarea`
  ${resetCSS};
  ${fonts.ibmMono};
  ${fonts.textSmall}
  background: ${color.blueLight};
  overflow-x: auto;
  padding: 16px 8px;
  position: relative;
  width: 100vw;

  color: ${color.blueDark};
  font-style: italic;
  overflow-y: hidden;
  white-space: pre;
  resize: none;
`;

const ContentStyled = styled.div`
  display: flex;
`;

const DivStyledButtonWrap = styled.div`
  margin: 19px;
  position: absolute;
  right: 0;
`;

const SideStyled = styled.div`
  background: ${color.blueLight2};
  overflow: hidden;
  padding: 16px 8px 0px 23px;
`;

const StyledUl = styled.ul`
  ${resetCSS};
  list-style: none;
  text-align: right;
`;

const WrapperStyled = styled.div`
  border-radius: 16px;
  border: 2px solid ${color.paleBlue2};
  display: flex;
  max-height: 100%;
  max-width: fit-content;
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

const notExpanded = css`
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 0px 8px 5px -2px ${color.blueSky};
  overflow: hidden;
`;

const WidthWrapperStyled = styled.div<Pick<ICodeAreaProps, 'maxHeight' | 'maxWidth' | 'isMaximized'>>`
  border-bottom: 2px solid ${color.paleBlue2};
  max-height: ${(p) => p.maxHeight};
  max-width: ${(p) => p.maxWidth};

  ${(p) => p.maxHeight && !p.isMaximized && notExpanded};
`;

const HeaderStyled = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid ${color.paleBlue2};
`;

const CodeAreaStyles = {
  WidthWrapperStyled,
  SideStyled,
  StyledUl,
  TextAreaStyled,
  WrapperStyled,
  ContentStyled,
  HeaderStyled,
  DivStyledButtonWrap
};

export default CodeAreaStyles;
