import styled from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

type alignStyles = "start" | "end" | "center" | "stretch";
interface IColDivProps{
    alignSelf?: alignStyles;
    justifySelf?: alignStyles;
    startCol ?: number;
    span?: number;
}
interface IGridDivProps{
    alignItems?: alignStyles | "baseline";
    justifyItems?: alignStyles;
    colGap?: number;
    rowGap?: number;
    xs?: number;
    s?: number;
    md?: number;
    lg?: number;
}

export const GridDiv = styled.div<IGridDivProps>`
    ${resetCSS}
    ${fonts.text}
    display: grid;
    align-items: ${props=> (props.alignItems ? props.alignItems : "start")};
    justify-items: ${props => (props.justifyItems ? props.justifyItems : "start")};
    row-gap: ${props => props.rowGap ? `${props.rowGap}px`: "15px"};
    column-gap: ${props => props.rowGap ? `${props.rowGap}px`: "15px"};

    // Query for extra small screens
    @media (max-width: 767px){
      grid-template-columns: repeat(${props=>(props.xs ? props.xs : 4)}, 1fr);
    }
  
    // Query for small screens
    @media (max-width: 991px) and (min-width: 768px){
      grid-template-columns: repeat(${props=>(props.s ? props.s : 6)}, 1fr);
    }

    // Query for medium screens
    @media (max-width: 1199px) and (min-width: 992px){
      grid-template-columns: repeat(${props=>(props.md ? props.md : 8)}, 1fr);
    }

    // Query for large screens
    @media (min-width: 1200px){
      grid-template-columns: repeat(${props=>(props.lg ? props.lg : 10)}, 1fr);
    }


`

export const ColDiv = styled.div<IColDivProps>`
    align-self: ${props => (props.alignSelf ? props.alignSelf : "stretch")};
    justify-self: ${props => (props.justifySelf ? props.justifySelf : "stretch")};
    grid-column-start: ${props => (props.startCol ? props.startCol : "auto")};
    grid-column-end: ${props => (props.startCol ? `span ${props.startCol}`: "auto")};
`