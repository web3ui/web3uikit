import { Button } from '../Button';
import Illustration from '../Illustrations/Illustration';
import { CryptoCardProps } from './types';
import styles from './CryptoCards.styles';
import { Cog } from '@web3uikit/icons';

const {
    DivStyledCryptoCard,
    DivStyledButton,
    DivStyledImage,
    DivStyledInfo,
    DivStyledLogo,
    DivStyledNetworkInfo,
    PStyledChainName,
    PStyledNetwork,
} = styles;

const CryptoCards: React.FC<CryptoCardProps> = ({
    bgColor,
    btnText,
    chain,
    chainType,
    onClick,
    settingsIcon,
    ...props
}: CryptoCardProps) => {
    return (
        <DivStyledCryptoCard
            color={bgColor}
            data-testid={'test-crypto-card'}
            {...props}
        >
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
                    icon={
                        settingsIcon || (
                            <Cog
                                title="cog icon"
                                titleId="cryptoCards cog icon"
                            />
                        )
                    }
                    onClick={onClick}
                    text={btnText}
                    theme="translucent"
                />
            </DivStyledButton>
        </DivStyledCryptoCard>
    );
};

export default CryptoCards;
