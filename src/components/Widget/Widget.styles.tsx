import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
    ${resetCSS};
    background-color: ${colors.white};
    border: 1px solid ${colors.paleBlue2};
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
