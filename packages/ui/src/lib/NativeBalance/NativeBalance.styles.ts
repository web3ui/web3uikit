import styled from "styled-components";
import { fonts } from "@web3uikit/styles";

const BalanceStyled = styled.span`
  ${fonts.semiBold}
  white-space: nowrap;
  line-height: 25px;
`;

const NativeBalanceStyles = {
  BalanceStyled,
};

export default NativeBalanceStyles;
