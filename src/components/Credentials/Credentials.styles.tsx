import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { ICredentialsProps, TDivWrapper } from './types';

const CredentialsStyled = styled.div<Pick<ICredentialsProps, 'width'>>`
    background: ${color.blueLight};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    position: relative;
    width: ${(p) => p.width};

    @media (max-width: 600px) {
        padding: 16px 8px;
    }
`;

const PreformattedStyled = styled.pre`
    ${resetCSS};
    display: flex;
    height: max-content;
    justify-content: space-between;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
    }
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

const DivWrapperStyled = styled.div<TDivWrapper>`
    ${resetCSS};
    overflow-x: ${(p) => (p.isHidden ? 'hidden' : p.isMultiline && 'auto')};
    width: 90%;

    @media (max-width: 600px) {
        width: 80%;
    }
`;

export default {
    CredentialsStyled,
    DivWrapperStyled,
    DividerStyled,
    PreformattedStyled,
    ToolsStyled,
};
