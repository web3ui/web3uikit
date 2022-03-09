import fonts from '../../styles/fonts';
import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { getShade } from '../../styles/colors';

export const DivStyledCryptoCard = styled.div`
    ${resetCSS};
    align-items: center;
    background: ${(props) => props.color};
    border-radius: 16px;
    border: 1px solid ${getShade('light', 10)};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    left: 20px;
    max-width: 256px;
    overflow: hidden;
    padding: 24px, 40px, 24px, 40px;
    position: relative;
    top: 20px;
    width: 100%;

    :after {
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    :hover {
        box-shadow: 0px 0px 400px 400px rgba(4, 24, 54, 0.2) inset;
    }
    background: ${(props) => props.color};
`;

export const DivStyledImage = styled.div`
    flex-grow: 0;
    flex: none;
    height: 160px;
    left: 21px;
    order: 0;
    position: static;
    top: 0px;
    width: 120px;
`;

export const DivStyledInfo = styled.div`
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

export const DivStyledLogo = styled.div`
    border-radius: 0px;
    height: 136px;
`;

export const DivStyledNetworkInfo = styled.div`
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

export const DivStyledButton = styled.div`
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

export const PStyledChainName = styled.p`
    ${fonts.montserrat};
    ${fonts.textBold500};
    font-size: 32px;
    height: 55%;
    margin: 0;
    overflow: hidden;
    word-break: break-all;
`;

export const PStyledNetwork = styled.p`
    ${fonts.openSans};
    ${fonts.textBold700};
    font-size: 20px;
    height: 36px;
    line-height: 36px;
    margin: 0;
    overflow: hidden;
    word-break: break-all;
`;
