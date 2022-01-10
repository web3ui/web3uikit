import styled from "styled-components";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const CardStyled = styled.div`
  ${resetCSS}
  ${fonts.text}
  ${fonts.textBold}
  border: 2px solid #E6EDFF;
  border-radius: 16px;
  display: grid;
  grid-gap: 5px;
  margin: 0;
  padding: 16px;
  
`

export const TitleStyled = styled.p`
  color: ${colors.blue};
  margin: 0;
`

export const InformationStyled = styled.p`
  color: ${colors.blueDark};
  font-size: 24px;
  margin: 0;
`