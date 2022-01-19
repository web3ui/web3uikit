import styled from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

export const TitleStyled = styled.h3`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h3};
    margin-bottom: 8px;
`;

export const SubTitleStyled = styled.h4`
    ${resetCSS};
    ${fonts.heading};
    ${fonts.h4};
    margin-bottom: 12px;
    margin-top: 32px;
`;

export const FormStyled = styled.form`
    ${resetCSS};

    div + div {
        margin-top: 30px;
    }

    button {
        margin-top: 12px;
    }
`;
