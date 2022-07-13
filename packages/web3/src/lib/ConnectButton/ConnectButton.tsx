import { default as MoralisType } from 'moralis/types';
import React, { useEffect, useState } from 'react';
import { useEnsAddress, useMoralis } from 'react-moralis';
import { getEllipsisTxt } from '../../web3utils';
import { ENSAvatar } from '../ENSAvatar';
import { NativeBalance } from '../NativeBalance';
import ConnectButtonStyles from './ConnectButton.styles';
import { IConnectButtonProps } from './types';
import { WalletModal } from '../WalletModal';

const {
    WrapperStyled,
    TextStyled,
    ConnectButtonStyled,
    AccountInfoStyled,
    AddressStyled,
    BalanceBlockStyled,
} = ConnectButtonStyles;

type web3StatusType = 'disconnected' | 'pending' | 'only_web3';

const ConnectButton: React.FC<IConnectButtonProps> = ({
    chainId,
    moralisAuth = true,
    signingMessage = 'Moralis Authentication',
    ...props
}) => {
    const {
        account,
        isAuthenticated,
        logout,
        deactivateWeb3,
        enableWeb3,
        isWeb3Enabled,
        isInitialized,
        isWeb3EnableLoading,
        isAuthenticating,
        authenticate,
        Moralis,
    } = useMoralis();
    const { name } = useEnsAddress(String(account));
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
    const [web3Status, setWeb3Status] =
        useState<web3StatusType>('disconnected');

    useEffect(() => {
        // to avoid problems in Next.JS apps because of window object
        if (typeof window == 'undefined') return;

        const provider = window.localStorage.getItem(
            'provider',
        ) as MoralisType.Web3ProviderType;
        if (
            !isWeb3Enabled &&
            !isWeb3EnableLoading &&
            provider &&
            web3Status === 'disconnected'
        ) {
            // @ts-ignore
            setWeb3Status('pending');
            enableWeb3({
                provider,
                chainId,
                onSuccess: () => setWeb3Status('only_web3'),
            });
        }
    }, [isWeb3Enabled, isWeb3EnableLoading, web3Status]);

    useEffect(() => {
        // to avoid problems in Next.JS apps because of window object
        if (typeof window == 'undefined') return;

        const provider = window.localStorage.getItem(
            'provider',
        ) as MoralisType.Web3ProviderType;

        if (
            isInitialized &&
            !isAuthenticated &&
            !isAuthenticating &&
            isWeb3Enabled &&
            moralisAuth &&
            web3Status === 'only_web3'
        ) {
            authenticate({
                provider,
                chainId,
                signingMessage,
            });
        }
    }, [isAuthenticated, isInitialized, isWeb3Enabled, isAuthenticating]);

    useEffect(() => {
        Moralis.onAccountChanged((address) => {
            if (!address) disconnectWallet();
        });
    }, []);

    async function disconnectWallet() {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;

        window.localStorage.removeItem('provider');
        setWeb3Status('disconnected');

        deactivateWeb3();
        if (isInitialized) logout();
    }

    if (!account || (moralisAuth && isInitialized && !isAuthenticated)) {
        return (
            <WrapperStyled>
                <ConnectButtonStyled
                    onClick={() => setIsConnectModalOpen(true)}
                >
                    <TextStyled>Connect Wallet</TextStyled>
                </ConnectButtonStyled>
                <WalletModal
                    chainId={chainId}
                    signingMessage={signingMessage}
                    isOpened={isConnectModalOpen}
                    moralisAuth={moralisAuth}
                    setIsOpened={setIsConnectModalOpen}
                />
            </WrapperStyled>
        );
    }

    return (
        <WrapperStyled data-testid="test-connect-button-wrap" {...props}>
            <AccountInfoStyled>
                <BalanceBlockStyled data-testid="test-connect-button-balance">
                    <NativeBalance style={{ margin: '0 8px 0 12px' }} />
                </BalanceBlockStyled>
                <AddressStyled
                    data-testid="test-connect-button-address"
                    onClick={() => disconnectWallet()}
                >
                    <TextStyled style={{ marginRight: '8px' }}>
                        {name
                            ? name.length <= 15
                                ? name
                                : getEllipsisTxt(name)
                            : account && getEllipsisTxt(account)}
                    </TextStyled>
                    <ENSAvatar address={account} size={25} />
                </AddressStyled>
            </AccountInfoStyled>
        </WrapperStyled>
    );
};

export default ConnectButton;
