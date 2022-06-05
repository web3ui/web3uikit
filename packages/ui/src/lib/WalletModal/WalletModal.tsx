import Moralis from 'moralis/types';
import { FC } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '@web3uikit/core';
import connectors from './config';
import { IWalletModalProps } from './types';
import WalletModalStyles from './WalletModal.styles';

const {
    GridItemStyled,
    GridStyled,
    HeaderStyled,
    ModalStyled,
    TitleStyled,
    WalletCardStyled,
    WalletLogo,
    WalletNameStyled,
    WrapperStyled,
} = WalletModalStyles;

const WalletModal: FC<IWalletModalProps> = ({
    chainId,
    isOpened,
    moralisAuth,
    setIsOpened,
    signingMessage = 'Moralis Authentication',
    ...props
}) => {
    const { authenticate, isInitialized, enableWeb3 } = useMoralis();

    function connectWallet(provider: Moralis.Web3ProviderType) {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;
        const connectProps = {
            provider,
            chainId,
            onSuccess: () => {
                window.localStorage.setItem('provider', provider);
                setIsOpened(false);
            },
        };
        isInitialized && moralisAuth
            ? authenticate({ ...connectProps, signingMessage })
            : enableWeb3(connectProps);
    }

    if (!isOpened) return null;

    return (
        <WrapperStyled {...props}>
            <ModalStyled>
                <HeaderStyled>
                    <TitleStyled>Connect Wallet</TitleStyled>
                    <Button
                        icon={'x'}
                        iconLayout="icon-only"
                        theme="outline"
                        onClick={() => setIsOpened(!isOpened)}
                    />
                </HeaderStyled>
                <GridStyled>
                    {connectors.map(({ title, icon, provider }, key) => (
                        <GridItemStyled key={key}>
                            <WalletCardStyled
                                onClick={() =>
                                    connectWallet(
                                        provider as Moralis.Web3ProviderType,
                                    )
                                }
                            >
                                <WalletLogo>{icon()}</WalletLogo>
                                <WalletNameStyled>{title}</WalletNameStyled>
                            </WalletCardStyled>
                        </GridItemStyled>
                    ))}
                </GridStyled>
            </ModalStyled>
        </WrapperStyled>
    );
};

export default WalletModal;
