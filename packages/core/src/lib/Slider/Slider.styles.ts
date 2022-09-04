import styled, { css } from 'styled-components';
import {color, fonts, resetCSS} from '@web3uikit/styles';



const DivStyled = styled.div`
    
    ${resetCSS};
    position : block;

    `

const LabelStyled = styled.label`

    ${resetCSS};
    font-size: 1.2rem;
    display: block;


`


const PStyled = styled.p`

    font-size: 0.8rem;
    margin: 4px 0;

`


const InputStyled = styled.input`

    display: block;
    width: 100%;
`


export default {
    DivStyled,
    LabelStyled,
    PStyled,
    InputStyled
};
