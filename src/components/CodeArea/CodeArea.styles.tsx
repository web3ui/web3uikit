import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { ICodeAreaProps } from './types';

const CodeAreaStyled = styled.div<Pick<ICodeAreaProps, 'width'>>`
    display: flex;
    flex-direction: column;
    /* padding: 16px 8px; */
    position: relative;
    width: ${(p) => p.width};
`;

const PreformattedStyled = styled.pre`
    ${resetCSS};
    display: flex;
    height: max-content;
    justify-content: space-between;
    overflow-x: auto;
    position: relative;
`;

const TextAreaStyled = styled.textarea`
    /* ${resetCSS};
    padding: 16px 8px;
    padding-left: 40px;

    min-height: relative;
    overflow-x: auto;
    position: relative;

    background: ${color.blueLight};

    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #041836; */

    background: url(http://i.imgur.com/2cOaJ.png);
    background-attachment: local;
    background-repeat: no-repeat;
    padding-left: 35px;
    padding-top: 10px;
    border-color: #ccc;
`;

const ToolsStyled = styled.div`
    align-self: flex-end;
    display: flex;
    font-size: 24px;
    margin-left: 8px;
`;

const DividerStyled = styled.div`
    position: relative;
    margin: 0 8px;
    &:before {
        border-left: 2px solid ${color.paleBlue2};
        content: '';
        height: 24px;
        position: absolute;
        width: 0;
    }
`;

const SideStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #e6edff;
    list-style: none;
    padding: 16px 8px 0px 23px;
    z-index: 20;
`;

const StyledUl = styled.ul`
    ${resetCSS};
    list-style: none;
`;

const WrapperStyled = styled.div`
    /* background: ${color.blueLight}; */
    display: flex;
    justify-content: flex-start;
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid ${color.paleBlue2};
    position: relative;
`;

const CodeAreaStyles = {
    WrapperStyled,
    CodeAreaStyled,
    DividerStyled,
    PreformattedStyled,
    ToolsStyled,
    SideStyled,
    StyledUl,
    TextAreaStyled,
};

export default CodeAreaStyles;
