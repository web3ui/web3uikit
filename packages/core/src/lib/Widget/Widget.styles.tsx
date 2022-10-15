import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';

const DivStyled = styled.div`
    ${resetCSS};
    background-color: ${color.white};
    border: 1px solid ${color.navy20};
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding: 32px;
    width: 100%;
    :first-child {
        :first-child {
            ${fonts.openSans};
            font-weight: 400;
        }
        :nth-child(1) {
            ${fonts.openSans};
            font-weight: 600;
        }
    }
`;

export default {
    DivStyled,
};
