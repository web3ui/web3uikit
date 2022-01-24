import { Button } from '../Button';
import { CryptoCardProps } from './types';
import { iconTypes } from '../Icon/collection';
import Illustration from '../Illustrations/Illustration';
import CryptoCardStyles from './CryptoCards.styles';
import React from 'react';

const {
    CryptoCardStyled,
    DivStyledButton,
    DivStyledImage,
    DivStyledInfo,
    DivStyledLogo,
    DivStyledNetworkInfo,
    TextStyledChain,
    TestStyledNetwork,
} = CryptoCardStyles;

const CryptoCards: React.FC<CryptoCardProps> = ({
    bgColor,
    btnText,
    chain,
    chainType,
    onClick,
    settingsIcon,
}: CryptoCardProps) => {
    return (
        <CryptoCardStyled color={bgColor} data-testid={'test-crypto-card'}>
            <DivStyledInfo>
                <DivStyledImage>
                    <DivStyledLogo>
                        {<Illustration logo={chain}></Illustration>}
                    </DivStyledLogo>
                </DivStyledImage>

                <DivStyledNetworkInfo>
                    <TextStyledChain data-testid={'test-chain-name'}>
                        {`${chain.charAt(0).toUpperCase()}${chain.slice(1)}`}
                    </TextStyledChain>
                    <TestStyledNetwork>
                        {chainType || 'Network'}
                    </TestStyledNetwork>
                </DivStyledNetworkInfo>
            </DivStyledInfo>

            <DivStyledButton>
                <Button
                    onClick={onClick}
                    theme="translucent"
                    text={btnText}
                    icon={settingsIcon || iconTypes.cog}
                />
            </DivStyledButton>
        </CryptoCardStyled>
    );
};

export default CryptoCards;
