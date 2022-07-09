// importing styled to make components and css to make themes
import styled from 'styled-components';
// importing centralized styles

// import our types to conditionally render CSS
const DivStyled = styled.div``;

// pick the props that you will use for conditional CSS

// //////////////////
// Theme CSS
// CSS Props should be sorted alphabetically
// //////////////////

// //////////////////
// Styled Components
// CSS Props should be sorted alphabetically
// //////////////////

// CSS ORDERING
// 1 - Imported styles (font, colors, etc)
// 2 - Normal styles (margin, padding, etc)
// 3 - Child elements (span, svg, etc)
// 4 - Pseudo elements (before & after)
// 5 - Modifier styles (hover, active etc)
// 6 - State changed styles ${(p) => (p.prop ? green : red)};
// each should be sorted alphabetically as best as possible

export default {
    DivStyled,
};
