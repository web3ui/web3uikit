import Moralis from 'moralis/types';
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { getEllipsisTxt } from '../../web3utils';
import { Blockie } from '../Blockie';
import { NativeBalance } from '../NativeBalance';
import ConnectButtonStyles from './ConnectButton.styles';

const {
    WrapperStyled,
    TextStyled,
    ConnectButtonStyled,
    AccountInfoStyled,
    AddressStyled,
    BalanceBlockStyled,
} = ConnectButtonStyles;

const ConnectButton: React.FC = () => {
    const {
        authenticate,
        account,
        isAuthenticated,
        logout,
        deactivateWeb3,
        enableWeb3,
        isWeb3Enabled,
        isInitialized,
        isWeb3EnableLoading,
    } = useMoralis();

    useEffect(() => {
        if (!isInitialized) return;
        const connectorId = window.localStorage.getItem('connectorId');
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
            // @ts-ignore
            enableWeb3({ provider: connectorId });
        }
    }, [isAuthenticated, isWeb3Enabled, isInitialized]);

    function connectWallet(connectorId: Moralis.Web3ProviderType) {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;

        authenticate({
            provider: connectorId,
            onSuccess: () =>
                window.localStorage.setItem('connectorId', connectorId),
        });
    }

    function disconnectWallet() {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;

        logout();
        deactivateWeb3();
    }

    if (!account || !isAuthenticated) {
        return (
            <WrapperStyled>
                <ConnectButtonStyled onClick={() => connectWallet('metamask')}>
                    <TextStyled>Connect Wallet</TextStyled>
                </ConnectButtonStyled>
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
