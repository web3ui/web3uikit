import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { ModalProps } from './types';

type TStyleProps = Pick<ModalProps, 'isVisible' | 'hasCancel'>;

export const ModalStyled = styled.div`
    ${fonts.text};
    background-color: ${colors.white};
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px 10px;

    div {
        border-color: ${colors.blue};
        border-radius: 15px;
    }

    h3 {
        color: ${colors.blue};
    }
`;

export const ModalContent = styled.div`
    padding: 5px 32px 15px;
`;

export const ModalFooter = styled.div<TStyleProps>`
    border-top: 1px solid ${colors.paleBlue2};
    display: flex;
    padding: 15px 32px 20px;
    justify-content: ${(p) => (p.hasCancel ? 'space-between' : 'flex-end')};
`;

export const ModalWrapperStyled = styled.div<TStyleProps>`
    ${(p) => (p.isVisible ? 'display: grid;' : 'display: none;')};
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
`;
