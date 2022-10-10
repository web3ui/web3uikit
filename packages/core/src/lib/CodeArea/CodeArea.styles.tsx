import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { ICodeAreaProps } from './types';

const TextAreaStyled = styled.textarea`
  ${resetCSS};
  ${fonts.robotoMono};
  ${fonts.textSmall}
  background: ${color.white};
  color: ${color.blueDark};
  font-style: italic;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 8px;
  position: relative;
  resize: none;
  white-space: pre;
  width: 100%;
`;

const ContentStyled = styled.div<
    Pick<ICodeAreaProps, 'maxHeight' | 'maxWidth' | 'isMaximized'>
>`
    ${(p) => p.maxHeight && !p.isMaximized && `max-height:${p.maxHeight}`};
    display: flex;
    overflow: auto;
`;

const DivStyledButtonWrap = styled.div`
    margin: 10px 19px 0px 0px;
    position: absolute;
    right: 0;
`;

const StyledUl = styled.ul`
    ${resetCSS};
    background-color: ${color.blueLight5};
    list-style: none;
    padding: 16px 8px 16px 16px;
    text-align: right;
`;

const WrapperStyled = styled.div`
    border-radius: 16px;
    border: 2px solid ${color.paleBlue2};
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow: auto;
    position: relative;
`;

const WidthWrapperStyled = styled.div<
    Pick<ICodeAreaProps, 'maxHeight' | 'maxWidth' | 'isMaximized'>
>`
    ${(p) => p.maxHeight && !p.isMaximized && `max-height:${p.maxHeight}`};
    max-width: ${(p) => p.maxWidth};
`;

const HeaderStyled = styled.div`
    border-bottom: 1px solid ${color.paleBlue2};
    padding: 8px 16px;
`;

const DivStyledSideNumber = styled.div`
    background-color: ${color.blueLight5};
`;

const CodeAreaStyles = {
    ContentStyled,
    DivStyledButtonWrap,
    DivStyledSideNumber,
    HeaderStyled,
    StyledUl,
    TextAreaStyled,
    WidthWrapperStyled,
    WrapperStyled,
};

export default CodeAreaStyles;
