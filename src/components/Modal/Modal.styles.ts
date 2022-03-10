import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ModalProps } from './types';

type TStyleProps = Pick<ModalProps, 'isVisible' | 'hasCancel' | 'width'>;

export const DivStyledWrap = styled.div<TStyleProps>`
    ${fonts.text};
    background-color: ${colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    left: 50%;
    max-height: 100%;
    overflow: auto;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(p) => p.width};
`;

export const HeaderStyled = styled.header<{
    title: any;
}>`
    display: flex;
    align-items: center;
    justify-content: ${(p) => (p.title ? 'space-between' : 'flex-end')};
    padding: 24px 32px 10px;

    div {
        border-color: ${colors.blue};
        border-radius: 15px;
    }

    h3 {
        color: ${colors.blue};
        padding-right: 8px;
    }

    button {
        min-width: 30px;
    }
`;

export const DivStyledContent = styled.div`
    padding: 5px 32px 15px;
`;

export const FooterStyled = styled.footer<TStyleProps>`
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

export const CustomFooterStyled = styled.footer`
    border-top: 1px solid ${colors.paleBlue2};
    display: flex;
    padding: 15px 32px 20px;
`;

export const CustomButtonStyle = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;
