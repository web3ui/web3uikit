import styled, {css} from "styled-components";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";
import colors, {colorPercentage} from "../../styles/colors";
import {CreditCardProps} from "./types";

export const CreditCardStyled = styled.div<Pick<CreditCardProps, "isExpired" | "pressed">>`
  ${resetCSS};
  ${fonts.text}
  background: linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%);
  border: 2px solid ${colorPercentage(colors.white, 40)};
  border-radius: 16px;
  display: grid;
  gap: 20%;
  padding: 16px;
  height: 154px;
  width: 277px;
  ${(p) => p.isExpired ? expiredStyles : p.pressed ? pressedStyles : ""}
  :hover {
    cursor: pointer;
  }
`

export const RemoveIcon = styled.div`
  display: grid;
  place-items: center;
  :hover{
    cursor: pointer;
  }
`

export const LastDigitsStyled = styled.p`
  ${fonts.semiBold};
  color: ${colors.white};
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`

export  const TextStyled = styled.p`
  ${fonts.semiBold}
  color: ${colors.white};;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`

const expiredStyles = css`
  border-color: ${colors.red};
`

const pressedStyles = css`
  border-color: ${colors.green};
`