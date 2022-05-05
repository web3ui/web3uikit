import { ModalProps } from './types';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import styled from 'styled-components';

type TStyleProps = Pick<
    ModalProps,
    | 'canOverflow'
    | 'fixedMode'
    | 'hasCancel'
    | 'isCentered'
    | 'isVisible'
    | 'width'
>;

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
    background-color: ${colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    margin: 80px auto;
    max-width: ${(p) => p.width};
    width: 96%;
`;

const HeaderStyled = styled.header<{
    title: any;
    fixedMode: boolean;
    headerHasBottomBorder: boolean;
}>`
    ${(p) => p.fixedMode && 'position: sticky;top: 0;background-color: white;'}
    ${(p) =>
        typeof p.title === 'string' &&
        `h3 {
        color: ${colors.blue};
        padding-right: 8px;
        margin-block-start: 0;
        margin-block-end: 0;
    }`}
    align-items: center;
    display: flex;
    padding: 32px 32px 24px;
    justify-content: ${(p) => (p.title ? 'space-between' : 'flex-end')};
    border-bottom: ${(p) =>
        p.headerHasBottomBorder ? `1px solid ${colors.paleBlue2}` : undefined};

    div {
        border-color: ${colors.blue};
        border-radius: 15px;
    }

    button {
        min-width: 30px;
    }

    #modal-close-button {
        border: 3px solid ${colors.paleBlue2};
        background-color: white;
    }
`;

const DivStyledContent = styled.div`
    padding: 0px 32px 0px;
`;

const FooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode && 'position: sticky;bottom: 0;background-color: white;'}
    border-top: 1px solid ${colors.paleBlue2};
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px 32px;
    justify-content: ${(p) => (p.hasCancel ? 'space-between' : 'flex-end')};

    button {
        margin: 3px 0;
    }

    #modal-cancel-button {
        color: ${colors.grey};
        :hover {
            color: ${colors.black};
        }
    }
`;

const DivStyled = styled.div<TStyleProps>`
    align-items: ${({ isCentered }) => (isCentered ? ' center' : 'flex-start')};
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: ${({ isVisible }) => (isVisible ? ' flex' : 'none')};
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
`;

const CustomFooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode && 'position: sticky;bottom: 0;background-color: white;'}
    border-top: 1px solid ${colors.paleBlue2};
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
