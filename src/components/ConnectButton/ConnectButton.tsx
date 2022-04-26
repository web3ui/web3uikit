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
    name = 'Connect Wallet',
    chainId,
    moralisAuth = true,
    signingMessage = 'Moralis Authentication',
    resolveAddress = true,
}) => {
    const {
        web3,
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
    const [hasName, setHasName] = useState<boolean>();
    const [Name, setName] = useState<string>();

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
            authenticate({ provider, chainId, signingMessage });
        }
    }, [isAuthenticated, isInitialized, isWeb3Enabled, isAuthenticating]);

    useEffect(() => {
        Moralis.onAccountChanged((address) => {
            if (!address) disconnectWallet();
        });
    }, []);

    useEffect(() => {
        resolver();
        async function resolver() {
            const network = await web3?.getNetwork();
            const chainID = network?.chainId;
            if (chainID === 1) {
                await resolve();
            }
        }
    }, [chainId, account]);
    async function disconnectWallet() {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;

        window.localStorage.removeItem('provider');
        setWeb3Status('disconnected');

        deactivateWeb3();
        if (isInitialized) logout();
    }
    async function resolve() {
        if (resolveAddress === true) {
            let name = await web3?.lookupAddress(account!);
            if (name !== null || undefined || '') {
                setHasName(true);
                setName(name!);
            } else {
                setHasName(false);
            }
        } else {
            setHasName(false);
        }
    }
    if (!account || (moralisAuth && isInitialized && !isAuthenticated)) {
        return (
            <WrapperStyled>
                <ConnectButtonStyled
                    onClick={() => setIsConnectModalOpen(true)}
                >
                    <TextStyled>{name}</TextStyled>
                </ConnectButtonStyled>
                <WalletModal
                    name={name}
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
        <WrapperStyled>
            <AccountInfoStyled>
                <BalanceBlockStyled>
                    <NativeBalance style={{ margin: '0 8px 0 12px' }} />
                </BalanceBlockStyled>
                <AddressStyled onClick={() => disconnectWallet()}>
                    <TextStyled style={{ marginRight: '8px' }}>
                        {account && !hasName ? getEllipsisTxt(account) : Name}
                    </TextStyled>
                    <Blockie scale={2.5} seed={account} />
                </AddressStyled>
            </AccountInfoStyled>
        </WrapperStyled>
    );
};

export default ConnectButton;
