import { default as MoralisType } from 'moralis/types';
import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { getEllipsisTxt } from '../../web3utils';
import { Blockie } from '../Blockie';
import { NativeBalance } from '../NativeBalance';
import { WalletModal } from '../WalletModal';
import ConnectButtonStyles from './ConnectButton.styles';
import { ConnectButtonProps } from './types';

const {
    WrapperStyled,
    TextStyled,
    ConnectButtonStyled,
    AccountInfoStyled,
    AddressStyled,
    BalanceBlockStyled,
} = ConnectButtonStyles;

type web3StatusType = 'disconnected' | 'pending' | 'only_web3';

const ConnectButton: React.FC<ConnectButtonProps> = ({
    moralisAuth = true,
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

    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
    const [web3Status, setWeb3Status] =
        useState<web3StatusType>('disconnected');

    useEffect(() => {
        // to avoid problems in Next.JS apps because of window object
        if (typeof window == 'undefined') return;

        const connectorId = window.localStorage.getItem(
            'connectorId',
        ) as MoralisType.Web3ProviderType;
        if (
            !isWeb3Enabled &&
            !isWeb3EnableLoading &&
            connectorId &&
            web3Status === 'disconnected'
        ) {
            // @ts-ignore
            setWeb3Status('pending');
            enableWeb3({
                provider: connectorId,
                onSuccess: () => setWeb3Status('only_web3'),
            });
        }
    }, [isWeb3Enabled, isWeb3EnableLoading, web3Status]);

    useEffect(() => {
        // to avoid problems in Next.JS apps because of window object
        if (typeof window == 'undefined') return;

        const connectorId = window.localStorage.getItem(
            'connectorId',
        ) as MoralisType.Web3ProviderType;
        if (
            isInitialized &&
            !isAuthenticated &&
            !isAuthenticating &&
            isWeb3Enabled &&
            moralisAuth &&
            web3Status === 'only_web3'
        ) {
            authenticate({ provider: connectorId });
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

        window.localStorage.removeItem('connectorId');
        setWeb3Status('disconnected');

        deactivateWeb3();
        if (isInitialized) logout();
    }

    if (!account || (isInitialized && !isAuthenticated)) {
        return (
            <WrapperStyled>
                <ConnectButtonStyled
                    onClick={() => setIsConnectModalOpen(true)}
                >
                    <TextStyled>Connect Wallet</TextStyled>
                </ConnectButtonStyled>
                <WalletModal
                    setIsOpened={setIsConnectModalOpen}
                    isOpened={isConnectModalOpen}
                />
            </WrapperStyled>
        );
    }

    return (
        <WrapperStyled>
            <AccountInfoStyled>
                <BalanceBlockStyled>
                    <NativeBalance style={{ margin: '0 8px 0 12px' }} />
                </BalanceBlockStyled>
                <AddressStyled onClick={() => disconnectWallet()}>
                    <TextStyled style={{ marginRight: '8px' }}>
                        {account && getEllipsisTxt(account)}
                    </TextStyled>
                    <Blockie scale={2.5} />
                </AddressStyled>
            </AccountInfoStyled>
        </WrapperStyled>
    );
};

export default ConnectButton;
