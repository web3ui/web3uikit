import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';

const InputStyled = styled.input`
    ${resetCSS};
    ${fonts.text}
    background-color: ${color.white};
    display: block;
    padding: 18px;
    pointer-events: ${(p) => (p.disabled ? 'none' : 'all')};
    width: 100%;

    &::placeholder {
        color: ${color.gray40};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
    }
`;

const LabelStyled = styled.label`
    box-sizing: border-box;
    display: block;
    padding: 0;
`;

export default {
    InputStyled,
    LabelStyled,
};
