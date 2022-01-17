import styled from "styled-components";
import fonts from "../../styles/fonts"
import colors, { colorPercentage } from "../../styles/colors"

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colorPercentage(colors.blue, 20)};
`

export const NFTWrapper = styled.div`
  background: white;
  border-radius: 16px;
  min-width: 100px;
  min-height: 120px;
  max-width: 200px;
`

export const NFTFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 16px;
`

export const NFTInfo = styled.div`
  display: grid;
  alignItems: center;
  padding: 5px 15px;
`

export const NFTImage = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
`

export const NFTName = styled.text`
  ${fonts.text};
  ${fonts.semiBold};
  font-size: 14px;
  color: ${colors.blueDark2};
`

export const NFTType = styled.text`
  ${fonts.text};
  color: ${colors.grey};
  font-size: 12px;
`