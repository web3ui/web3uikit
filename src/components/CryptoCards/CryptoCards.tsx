import { Icon } from '../Icon';
import { CryptoCardProps } from './types';
import { iconTypes } from '../Icon/collection';
import CryptoCardStyles from './CryptoCards.styles';
import React from 'react';
import color from '../../styles/colors';

const {
    ButtonStyled,
    CryptoCardStyled,
    DivImageStyled,
    DivInfoStyled,
    DivLogoStyled,
    DivNetworkInfoStyled,
    PButtonStyled,
    PChainNameStyled,
    PNetworkStyled,
} = CryptoCardStyles;

const CryptoCards: React.FC<CryptoCardProps> = ({
    onClick,
    chain,
    chainType,
    chainLogo,
    settingsIcon,
    settingsColor,
    bgColor,
    btnText,
}: CryptoCardProps) => {
    return (
        <CryptoCardStyled color={bgColor} data-testid={'test-crypto-card'}>
            <DivInfoStyled>
                <DivImageStyled>
                    <DivLogoStyled>
                        <img src={chainLogo} />
                    </DivLogoStyled>
                </DivImageStyled>
                <DivNetworkInfoStyled>
                    <PChainNameStyled data-testid={'test-chain-name'}>
                        {chain}
                    </PChainNameStyled>
                    <PNetworkStyled>{chainType || 'Network'}</PNetworkStyled>
                </DivNetworkInfoStyled>
            </DivInfoStyled>
            <ButtonStyled onClick={onClick} data-testid={'test-button'}>
                <Icon
                    fill={`${settingsColor || color.white}`}
                    size={20}
                    svg={settingsIcon || iconTypes.cog}
                />
                <PButtonStyled>{btnText}</PButtonStyled>
            </ButtonStyled>
        </CryptoCardStyled>
    );
};

export default CryptoCards;
