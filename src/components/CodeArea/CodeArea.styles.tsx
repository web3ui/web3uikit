import styled from 'styled-components';
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
    white-space: nowrap;

    ::-webkit-resizer {
        visibility: hidden;
    }
`;

const ContentStyled = styled.div`
    display: flex;
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
    max-width: fit-content;
    overflow: hidden;
    position: relative;
    flex-direction: column;
`;

const WidthWrapperStyled = styled.div<Pick<ICodeAreaProps, 'maxWidth'>>`
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
};

export default CodeAreaStyles;
