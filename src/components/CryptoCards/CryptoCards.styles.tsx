import fonts from '../../styles/fonts';
import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { getShade } from '../../styles/colors';

const getChainLogo = (chain: string) => {
    switch (chain) {
        case 'ethereum':
            return require('./chains/ethereum.svg');
        case 'binance':
            return require('./chains/binance.svg');
        case 'polygon':
            return require('./chains/polygon.svg');
        case 'avalanche':
            return require('./chains/avalanche.svg');
        case 'fantom':
            return require('./chains/fantom.svg');
        case 'arbitrum':
            return require('./chains/arbitrum.svg');
        default:
            return;
    }
};

const CryptoCardStyled = styled.div`
    align-items: center;
    background: ${(props) => props.color};
    border: 1px solid ${getShade('light', 10)};
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 20px;
    overflow: hidden;
    padding: 24px, 40px, 24px, 40px;
    position: absolute;
    ${resetCSS}
    top: 20px;
    width: 100%;
    max-width: 256px;
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
        :after {
            background: rgba(4, 24, 54, 0.2);
        }
    }
`;

const DivImageStyled = styled.div`
    flex: none;
    flex-grow: 0;
    height: 160px;
    left: 21px;
    order: 0;
    position: static;
    top: 0px;
    width: 120px;
`;

const DivInfoStyled = styled.div`
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-grow: 0;
    height: 224px;
    left: 51.5px;
    margin: 16px 0px;
    order: 0;
    padding: 0px;
    position: static;
    top: 28px;
    width: 162px;
`;

const DivLogoStyled = styled.div`
    border-radius: 0px;
    height: 136px;
    left: 19px;
    top: 12px;
    width: 82px;
`;

const DivNetworkInfoStyled = styled.div`
    bottom: 0%;
    color: ${color.white};
    flex: none;
    flex-grow: 0;
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

const DivButtonStyled = styled.div`
    align-items: center;
    display: flex;
    flex: none;
    flex-direction: row;
    flex-grow: 0;
    height: 40px;
    justify-content: center;
    left: 39px;
    margin: 16px 0px;
    order: 1;
    position: static;
    width: 187px;
    top: 268px;
`;

const PChainNameStyled = styled.p`
    font-size: 32px;
    ${fonts.montserrat};
    ${fonts.textBold500};
    height: 55%;
    margin: 0;
    overflow: hidden;
    word-break: break-all;
`;

const PNetworkStyled = styled.p`
    font-size: 20px;
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
    DivButtonStyled,
    DivImageStyled,
    DivInfoStyled,
    DivLogoStyled,
    DivNetworkInfoStyled,
    PChainNameStyled,
    PNetworkStyled,
    getChainLogo,
};

export default CryptoCardStyles;
