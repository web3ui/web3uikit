import Moralis from 'moralis/types';
import React, { FC } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '../Button';
import { iconTypes } from '../Icon';
import connectors from './config';
import { WalletModalProps } from './types';
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

const WalletModal: FC<WalletModalProps> = ({
    chainId,
    isOpened = true,
    moralisAuth,
    setIsOpened,
    signingMessage = 'Moralis Authentication',
}) => {
    const { authenticate, isInitialized, enableWeb3 } = useMoralis();

    function connectWallet(connectorId: Moralis.Web3ProviderType) {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;
        const connectProps = {
            provider: connectorId,
            signingMessage,
            onSuccess: () => {
                window.localStorage.setItem('connectorId', connectorId);
                setIsOpened(false);
            },
        };
        isInitialized && moralisAuth
            ? authenticate({ ...connectProps, chainId })
            : enableWeb3(connectProps);
    }

    if (!isOpened) return null;

    return (
        <WrapperStyled>
            <ModalStyled>
                <HeaderStyled>
                    <TitleStyled>Connect Wallet</TitleStyled>
                    <Button
                        icon={iconTypes.x}
                        iconLayout="icon-only"
                        theme="outline"
                        onClick={() => setIsOpened(!isOpened)}
                    />
                </HeaderStyled>
                <GridStyled>
                    {connectors.map(({ title, icon, connectorId }, key) => (
                        <GridItemStyled key={key}>
                            <WalletCardStyled
                                onClick={() =>
                                    connectWallet(
                                        connectorId as Moralis.Web3ProviderType,
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
