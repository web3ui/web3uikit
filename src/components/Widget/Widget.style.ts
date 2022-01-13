import styled from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import resetCSS from "../../styles/reset";

export const HintStyled = styled.div`
  position: absolute;
  top: 16px;
  right: 5px;
`

export const WidgetStyled =  styled.div`
  ${resetCSS}
  ${fonts.text};
  align-items: center;
  border: 1px solid ${colors.paleBlue2};
  border-radius: 12px;
  box-shadow: inset 0 0 10px rgba(46, 125, 175, 0.15);
  display: flex;
  gap: 5px;
  padding: 16px;
  position: relative;
  width: 100%;

`

export const WidgetInfoBox = styled.div`
  margin-right: 10px;
`

export const WidgetTitle = styled.div`
  color: ${colors.grey};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 0;
  
`

export const WidgetInfo = styled.div`
  color: ${colors.blueDark};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  position: relative;
`