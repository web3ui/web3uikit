import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
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
    margin-right: 10px;
`;

const ContentStyled = styled.div`
    display: flex;
    background: ${color.blueLight};
`;

const DivStyledButtonWrap = styled.div`
    margin: 8px;
    position: absolute;
    right: 0;
    background-color: ${color.blueLight};
    border-radius: 20px;
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
    outline: 2px solid ${color.paleBlue2};
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

const WidthWrapperStyled = styled.div<
    Pick<ICodeAreaProps, 'maxWidth' | 'isMaximized'>
>`
    max-width: ${(p) => p.maxWidth};
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
    DivStyledButtonWrap,
};

export default CodeAreaStyles;
