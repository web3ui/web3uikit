import styled, { css } from 'styled-components';
import {color, fonts, resetCSS} from '@web3uikit/styles';



const sliderDiv = styled.div`
    
    ${resetCSS};
    position : block;

    `

const sliderLabel = styled.label`

    ${resetCSS};
    font-size: 1.2rem;
    display: block;


`


const sliderP = styled.p`

    font-size: 0.8rem;
    margin: 4px 0;

`


const sliderInput = styled.input`

    display: block;
    width: 100%;
`


export default {
    sliderDiv,
    sliderInput,
    sliderLabel,
    sliderP
};
