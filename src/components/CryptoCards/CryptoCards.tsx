import React from 'react';
import { Button } from '../Button';
import { iconTypes } from '../Icon/collection';
import Illustration from '../Illustrations/Illustration';
import { CryptoCardProps } from './types';
import {
    DivStyledCryptoCard,
    DivStyledButton,
    DivStyledImage,
    DivStyledInfo,
    DivStyledLogo,
    DivStyledNetworkInfo,
    PStyledChainName,
    PStyledNetwork,
} from './CryptoCards.styles';

const CryptoCards: React.FC<CryptoCardProps> = ({
    bgColor,
    btnText,
    chain,
    chainType,
    onClick,
    settingsIcon,
}: CryptoCardProps) => {
    return (
        <DivStyledCryptoCard color={bgColor} data-testid={'test-crypto-card'}>
            <DivStyledInfo>
                <DivStyledImage>
                    <DivStyledLogo>
                        {<Illustration logo={chain}></Illustration>}
                    </DivStyledLogo>
                </DivStyledImage>
                <DivStyledNetworkInfo>
                    <PStyledChainName data-testid={'test-chain-name'}>
                        {`${chain.charAt(0).toUpperCase()}${chain.slice(1)}`}
                    </PStyledChainName>
                    <PStyledNetwork>{chainType || 'Network'}</PStyledNetwork>
                </DivStyledNetworkInfo>
            </DivStyledInfo>
            <DivStyledButton>
                <Button
                    icon={settingsIcon || iconTypes.cog}
                    onClick={onClick}
                    text={btnText}
                    theme="translucent"
                />
            </DivStyledButton>
        </DivStyledCryptoCard>
    );
};

export default CryptoCards;
