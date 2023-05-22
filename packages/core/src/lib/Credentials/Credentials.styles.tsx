import styled from 'styled-components';
import { color, resetCSS } from '@web3uikit/styles';
import { ICredentialsProps, TDivWrapper } from './types';

type TStyleProps = Pick<ICredentialsProps, 'customize' | 'width'>;

const CredentialsStyled = styled.div<TStyleProps>`
    background: ${(p) =>
        p.customize?.backgroundColor
            ? p.customize?.backgroundColor
            : color.aero10};
    border: ${(p) => p.customize?.border};
    border-radius: ${(p) =>
        p.customize?.borderRadius ? p.customize?.borderRadius : '16px'};
    display: flex;
    flex-direction: column;
    padding: ${(p) => (p.customize?.padding ? p.customize?.padding : '16px')};
    position: relative;
    width: ${(p) => p.width};
    ${(p) => p.customize?.margin && `margin:${p.customize.margin}`};

    @media (max-width: 600px) {
        padding: ${(p) =>
            p.customize?.padding ? p.customize?.padding : '16px 8px'};
    }
`;

const PreformattedStyled = styled.pre`
    ${resetCSS};
    align-items: center;
    display: flex;
    height: max-content;
    justify-content: space-between;
    position: relative;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const ToolsStyled = styled.div<Pick<ICredentialsProps, 'hasIconTooltip'>>`
    align-self: flex-end;
    display: flex;
    margin-left: 8px;
    ${(props) => !props.hasIconTooltip && `font-size: 24px`};
`;

const DividerStyled = styled.div`
    position: relative;
    margin: 8px 8px;
    &:before {
        border-left: 2px solid ${color.navy20};
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

const DivIconWrapperStyled = styled.div`
    max-height: 24px;
    max-width: 24px;
    padding: 8px;
`;

export default {
    CredentialsStyled,
    DivIconWrapperStyled,
    DivWrapperStyled,
    DividerStyled,
    PreformattedStyled,
    ToolsStyled,
};
