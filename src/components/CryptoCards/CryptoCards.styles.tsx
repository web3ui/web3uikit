import fonts from '../../styles/fonts';
import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { getShade } from '../../styles/colors';

const CryptoCardStyled = styled.div`
    ${resetCSS};
    border: 1px solid ${getShade('light', 10)};
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    max-width: 256px;
    transition: all 0.3s ease;
    :hover {
        box-shadow: 0px 0px 400px 400px rgba(4, 24, 54, 0.2) inset;
    }
    background: ${(props) => props.color};
`;

const DivStyledImage = styled.div`
    flex: none;
    flex-grow: 0;
    height: 160px;
    left: 21px;
    order: 0;
    position: static;
    top: 0px;
    width: 120px;
`;

const DivStyledInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex: none;
    height: 224px;
    left: 51.5px;
    margin: 16px 0px;
    order: 0;
    padding: 0px;
    position: static;
    top: 28px;
    width: 162px;
`;

const DivStyledLogo = styled.div`
    border-radius: 0px;
    height: 136px;
    left: 19px;
    top: 12px;
    width: 82px;
`;

const DivStyledNetworkInfo = styled.div`
    bottom: 0%;
    color: ${color.white};
    flex-grow: 0;
    flex: none;
    height: 64px;
    left: calc(50% - 162px / 2);
    margin: 0px 0px;
    order: 1;
    overflow: hidden;
    position: static;
    text-align: center;
    top: 71.43%;
    width: 100%;
`;

const DivStyledButton = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex: none;
    height: 40px;
    justify-content: center;
    left: 39px;
    margin: 16px 0px;
    order: 1;
    position: static;
    top: 268px;
    width: 187px;
`;

const TextStyledChain = styled.p`
    ${fonts.montserrat};
    ${fonts.textBold500};
    font-size: 32px;
    height: 55%;
    margin: 0;
    overflow: hidden;
    word-break: break-all;
`;

const TestStyledNetwork = styled.p`
    ${fonts.openSans};
    ${fonts.textBold700};
    height: 36px;
    line-height: 36px;
    margin: 0;
    overflow: hidden;
    word-break: break-all;
`;

const CryptoCardStyles = {
    CryptoCardStyled,
    DivStyledButton,
    DivStyledImage,
    DivStyledInfo,
    DivStyledLogo,
    DivStyledNetworkInfo,
    TextStyledChain,
    TestStyledNetwork,
};

export default CryptoCardStyles;
