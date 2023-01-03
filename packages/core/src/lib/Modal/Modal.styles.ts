import { ModalProps } from './types';
import styled, { css } from 'styled-components';
import { color, fonts, HexToRgb } from '@web3uikit/styles';

type TStyleProps = Pick<
    ModalProps,
    | 'canOverflow'
    | 'customize'
    | 'fixedMode'
    | 'hasCancel'
    | 'isCentered'
    | 'isVisible'
    | 'width'
    | 'zIndex'
>;
``;

const overflow = (): string => {
    return `
            overflow: auto;
            scrollbar-width: none;
            ::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
        `;
};

const DivStyledWrap = styled.div<TStyleProps>`
    ${(p) => !p.canOverflow && overflow()}
    ${fonts.text};
    background-color: ${(p) => p.customize?.backgroundColor ?? color.white};
    border: ${(p) => p.customize?.border ?? 'none'};
    border-radius: ${(p) => p.customize?.borderRadius ?? '20px'};
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    margin: ${(p) => p.customize?.margin ?? '80px auto'};
    max-width: ${(p) => p.width};
    width: 96%;
`;

type THeaderStyles = Pick<
    ModalProps,
    'fixedMode' | 'headerHasBottomBorder' | 'customize'
> & { title: any };

const HeaderStyled = styled.header<THeaderStyles>`
    ${(p) =>
        p.fixedMode &&
        css`
            position: sticky;
            top: 0;
            background-color: white;
        `};
    ${(p) =>
        typeof p.title === 'string' &&
        css`
            h3 {
                color: ${p.customize?.color ?? color.navy40};
                font-size: ${p.customize?.fontSize};
                font-weight: ${p.customize?.fontWeight};
                margin-block-end: 0;
                margin-block-start: 0;
                padding-right: 8px;
            }
        `};
    align-items: center;
    display: flex;
    padding: 24px 32px 20px;
    justify-content: ${(p) => (p.title ? 'space-between' : 'flex-end')};
    border-bottom: ${(p) =>
        p.headerHasBottomBorder ? `1px solid ${color.navy20}` : undefined};

    div {
        border-color: ${color.navy40};
        border-radius: 15px;
    }

    button {
        min-width: 30px;
    }

    #modal-close-button {
        border: 3px solid ${color.navy20};
        background-color: white;
    }
`;

const DivStyledContent = styled.div<Pick<TStyleProps, 'customize'>>`
    padding: ${(p) => p.customize?.padding ?? '0px 32px 0px'};
`;

const FooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode &&
        css`
            position: sticky;
            bottom: 0;
            background-color: white;
        `};
    border-top: 1px solid ${color.navy20};
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px 32px;
    justify-content: ${(p) => (p.hasCancel ? 'space-between' : 'flex-end')};

    button {
        margin: 3px 0;
    }

    #modal-cancel-button {
        color: ${color.blueGray50};
        :hover {
            color: ${color.blue70};
        }
    }
`;

const DivStyled = styled.div<TStyleProps>`
    align-items: ${({ isCentered }) => (isCentered ? ' center' : 'flex-start')};
    background: rgba(${HexToRgb(color.blue70)}, 0.7);
    bottom: 0;
    display: ${({ isVisible }) => (isVisible ? ' flex' : 'none')};
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${({ zIndex }) => zIndex};
`;

const CustomFooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode &&
        css`
            position: sticky;
            bottom: 0;
            background-color: white;
        `}
    border-top: 1px solid ${color.navy20};
    display: flex;
    padding: 0px 32px 32px;
`;

const CustomButtonStyle = styled.div`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;

export default {
    CustomButtonStyle,
    CustomFooterStyled,
    DivStyled,
    DivStyledContent,
    DivStyledWrap,
    FooterStyled,
    HeaderStyled,
};
