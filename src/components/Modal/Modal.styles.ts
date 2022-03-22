import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ModalProps } from './types';

type TStyleProps = Pick<
    ModalProps,
    'isVisible' | 'hasCancel' | 'width' | 'canOverflow' | 'fixedMode'
>;

const overflow = (): string => {
    return `
            overflow: auto;
            ::-webkit-scrollbar {
                display: none;
            }
            scrollbar-width: none;
            -ms-overflow-style: none;
        `;
};
export const DivStyledWrap = styled.div<TStyleProps>`
    ${fonts.text};
    background-color: ${colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    left: 50%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(p) => p.width};
    ${(p) => !p.canOverflow && overflow()}
`;

export const HeaderStyled = styled.header<{
    title: any;
    fixedMode: boolean;
    headerHasBottomBorder: boolean;
}>`
    ${(p) => p.fixedMode && 'position: sticky;top: 0;background-color: white;'}
    align-items: center;
    display: flex;
    padding: 28px 32px 24px;
    justify-content: ${(p) => (p.title ? 'space-between' : 'flex-end')};
    border-bottom: ${(p) => (p.headerHasBottomBorder ? `1px solid ${colors.paleBlue2}` : undefined)};
    
    div {
        border-color: ${colors.blue};
        border-radius: 15px;
    }

    h3 {
        color: ${colors.blue};
        padding-right: 8px;
        margin-block-start: 0;
        margin-block-end: 0;
    }

    button {
        min-width: 30px;
    }
`;

export const DivStyledContent = styled.div`
    padding: 5px 32px 15px;
`;

export const FooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode && 'position: sticky;bottom: 0;background-color: white;'}
    border-top: 1px solid ${colors.paleBlue2};
    display: flex;
    padding: 15px 32px 20px;
    justify-content: ${(p) => (p.hasCancel ? 'space-between' : 'flex-end')};
`;

export const DivStyled = styled.div<TStyleProps>`
    ${(p) => (p.isVisible ? 'display: grid;' : 'display: none;')};
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
`;

export const CustomFooterStyled = styled.footer<TStyleProps>`
    ${(p) =>
        p.fixedMode && 'position: sticky;bottom: 0;background-color: white;'}
    border-top: 1px solid ${colors.paleBlue2};
    display: flex;
    padding: 15px 32px 20px;
`;

export const CustomButtonStyle = styled.div`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;
