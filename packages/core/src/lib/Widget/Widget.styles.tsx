import styled from 'styled-components';
import { color, fonts, resetCSS } from '@test_kit_4/styles';

const DivStyled = styled.div`
    ${resetCSS};
    background-color: ${color.white};
    border: 1px solid ${color.paleBlue2};
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
