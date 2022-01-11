import styled from "styled-components";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const ServerContainer = styled.div`
  padding: 16px;
`

export const WidgetRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const ServerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const ServerInfoWrapper = styled.div`
  ${resetCSS};
  ${fonts.text}; 
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
`

export const ServerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`

export const ServerName = styled.p`
  ${fonts.textBold700}
  color: ${colors.blueDark};
  font-size: 18px;
  margin: 0;
`

export const NetworkName = styled.p`
  ${fonts.textSmall};
  color: ${colors.blueDark};
  margin: 0;
`