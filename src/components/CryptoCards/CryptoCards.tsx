import { Icon } from '../Icon';
import { CryptoCardProps } from './types';
import { iconTypes } from '../Icon/collection';
import { cryptoCardStyles } from './CryptoCards.styles';
import React from 'react';
import styled from 'styled-components';
import color from '../../styles/colors';

const CryptoCardStyled = styled.div`
    ${cryptoCardStyles.borderStyle}
`;

const ButtonStyles = styled.button`
    ${cryptoCardStyles.buttonStyle}
`;

const BtnTxtStyle = styled.p`
    ${cryptoCardStyles.btnTxtStyle}
`;

const InfoStyle = styled.div`
    ${cryptoCardStyles.infoStyle}
`;

const NetworkInfoHolder = styled.div`
    ${cryptoCardStyles.networkInfoHolder}
`;

const NetworkStyle = styled.p`
    ${cryptoCardStyles.networkStyle}
`;

const ChainNameStyle = styled.p`
    ${cryptoCardStyles.chainNameStyle}
`;

const ImageBoxStyle = styled.div`
    ${cryptoCardStyles.imageBoxStyle}
`;

const Logo = styled.div`
    ${cryptoCardStyles.logo}
`;

const CryptoCards: React.FC<CryptoCardProps> = ({
    buttonClickEvent,
    chain,
    chainType,
    chainLogo,
    settingsIcon,
    settingsColor,
    bgColor,
    btnText,
}: CryptoCardProps) => {
    return (
        <CryptoCardStyled style={{ background: bgColor || 'black' }}>
            <InfoStyle>
                <ImageBoxStyle>
                    <Logo>
                        <img src={chainLogo} />
                    </Logo>
                </ImageBoxStyle>
                <NetworkInfoHolder>
                    <ChainNameStyle>{chain}</ChainNameStyle>
                    <NetworkStyle>{chainType || 'Network'}</NetworkStyle>
                </NetworkInfoHolder>
            </InfoStyle>
            <ButtonStyles>
                <Icon
                    fill={`${settingsColor || color.white}`}
                    size={20}
                    svg={settingsIcon || iconTypes.cog}
                />
                <BtnTxtStyle
                    onClick={() => buttonClickEvent && buttonClickEvent()}
                >
                    {btnText}
                </BtnTxtStyle>
            </ButtonStyles>
        </CryptoCardStyled>
    );
};

export default CryptoCards;
