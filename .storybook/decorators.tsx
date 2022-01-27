import React, { useEffect } from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis';
import { DecoratorFn } from '@storybook/react';

export const moralisContext: DecoratorFn = (Story) => {
    const Web3Initialize = () => {
        const {
            enableWeb3,
            isAuthenticated,
            isWeb3Enabled,
            isWeb3EnableLoading,
            isInitialized,
        } = useMoralis();

        useEffect(() => {
            if (!isInitialized) return;
            const connectorId = window.localStorage.getItem('connectorId');
            if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
                enableWeb3({ provider: connectorId as any });
        }, [
            isAuthenticated,
            isWeb3Enabled,
            isInitialized,
            isWeb3EnableLoading,
        ]);

        return null;
    };
    return (
        <MoralisProvider
            appId={process.env.MORALIS_APP_ID || ''}
            serverUrl={process.env.MORALIS_SERVER_URL || ''}
        >
            <Story />
            <Web3Initialize />
        </MoralisProvider>
    );
};
