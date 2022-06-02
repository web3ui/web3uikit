import styled from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';

const DivStyled = styled.div`
  ${resetCSS};
  ${fonts.text};
  ${fonts.textBold};
  background-color: ${color.white};
  border-radius: 16px;
  border: 2px solid ${color.blueSkyLight};
  display: grid;
  grid-gap: 5px;
  margin: 0;
  padding: 16px;
  width: 100%;
`;

const PStyledTopic = styled.p`
  color: ${color.blue};
  margin: 0;
`;

const PStyledInfo = styled.p`
  color: ${color.blueDark};
  font-size: 24px;
  margin: 0;
`;

export default { DivStyled, PStyledTopic, PStyledInfo };
