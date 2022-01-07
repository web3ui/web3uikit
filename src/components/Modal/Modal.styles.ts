import styled from 'styled-components';
import { ModalProps } from './types';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const ModalStyled = styled.div<Pick<ModalProps, 'isVisible'>>`
    ${(p) => (p.isVisible ? 'display: grid;' : 'display: none;')};
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

const ModalHeader = styled.div`
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

const ModalContent = styled.div`
    padding: 5px 32px 15px;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.paleBlue2};
    padding: 15px 32px 20px;
`;

const ModalStyles = {
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalStyled,
};

export default ModalStyles;
