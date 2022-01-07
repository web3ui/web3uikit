import { Icon } from '../Icon';
import { CryptoCardProps } from './types';
import { iconTypes } from '../Icon/collection';
import CryptoCardStyles from './CryptoCards.styles';
import React from 'react';
import color from '../../styles/colors';

const {
    CryptoCardStyled,
    ButtonStyles,
    BtnTxtStyle,
    InfoStyle,
    NetworkInfoHolder,
    NetworkStyle,
    ChainNameStyle,
    ImageBoxStyle,
    Logo,
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
            <InfoStyle>
                <ImageBoxStyle>
                    <Logo>
                        <img src={chainLogo} />
                    </Logo>
                </ImageBoxStyle>
                <NetworkInfoHolder>
                    <ChainNameStyle data-testid={'test-chain-name'}>
                        {chain}
                    </ChainNameStyle>
                    <NetworkStyle>{chainType || 'Network'}</NetworkStyle>
                </NetworkInfoHolder>
            </InfoStyle>
            <ButtonStyles onClick={onClick} data-testid={'test-button'}>
                <Icon
                    fill={`${settingsColor || color.white}`}
                    size={20}
                    svg={settingsIcon || iconTypes.cog}
                />
                <BtnTxtStyle>{btnText}</BtnTxtStyle>
            </ButtonStyles>
        </CryptoCardStyled>
    );
};

export default CryptoCards;
