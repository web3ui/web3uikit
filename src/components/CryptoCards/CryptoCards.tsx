import { Button } from '../Button';
import { CryptoCardProps } from './types';
import { iconTypes } from '../Icon/collection';
import CryptoCardStyles from './CryptoCards.styles';
import React from 'react';

const {
    CryptoCardStyled,
    DivButtonStyled,
    DivImageStyled,
    DivInfoStyled,
    DivLogoStyled,
    DivNetworkInfoStyled,
    PChainNameStyled,
    PNetworkStyled,
} = CryptoCardStyles;

const CryptoCards: React.FC<CryptoCardProps> = ({
    onClick,
    chain,
    chainType,
    chainLogo,
    settingsIcon,
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
            <DivButtonStyled>
                <Button
                    onClick={onClick}
                    theme="translucent"
                    text={btnText}
                    icon={settingsIcon || iconTypes.cog}
                />
            </DivButtonStyled>
        </CryptoCardStyled>
    );
};

export default CryptoCards;
