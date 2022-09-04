import styled, { css } from 'styled-components';
import {color, fonts, resetCSS} from '@web3uikit/styles';

// //////////////////
// Styled Components
// CSS Props should be sorted alphabetically
// //////////////////


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



// CSS ORDERING
// 1 - Imported styles (font, colors, etc)
// 2 - Normal styles (margin, padding, etc)
// 3 - Child elements (span, svg, etc)
// 4 - Pseudo elements (before & after)
// 5 - Modifier styles (hover, active etc)
// 6 - State changed styles ${(p) => (p.prop ? green : red)};
// each should be sorted alphabetically as best as possible

export default {
    sliderDiv,
    sliderInput,
    sliderLabel,
    sliderP
};
