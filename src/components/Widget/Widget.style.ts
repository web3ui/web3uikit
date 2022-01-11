import styled, {css} from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import resetCSS from "../../styles/reset";
import {WidgetProps} from "./types";

export const HintStyled = styled.div<Pick<WidgetProps, "iconLayout">>`
  ${(p) => p.iconLayout === "trailing" ? hintWithTrailingIcon : "top: 16px;"}
  position: absolute;
  right: 5px;
`

const hintWithTrailingIcon = css`
  top: 5px;
`

export const WidgetStyled =  styled.div<Pick<WidgetProps, "iconLayout">>`
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
  width: fit-content;
  
  ${(p) => p.iconLayout === "leading" ? "" : ""};
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
  margin: 0;
  position: relative;
`