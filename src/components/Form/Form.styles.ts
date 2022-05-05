import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const H3Styled = styled.h3`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h3};
    margin-bottom: 18px;
`;

const H4Styled = styled.h4`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h4};
    margin-bottom: 12px;
    margin-top: 32px;
`;

const FormStyled = styled.form`
    ${resetCSS};
    background-color: ${color.white};
    border-radius: 16px;
    padding: 16px;

    .form-item + .form-item {
        margin-top: 30px;
    }

    > button[type='submit'],
    .customFooter {
        margin-top: 32px;
    }
`;

export default {
    FormStyled,
    H4Styled,
    H3Styled,
};
