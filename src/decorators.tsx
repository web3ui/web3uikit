import React, { useEffect } from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis';
import { DecoratorFn } from '@storybook/react';

export const moralisContext: DecoratorFn = (Story) => {
    const MORALIS_APP_ID = process.env.STORYBOOK_MORALIS_APP_ID;
    const MORALIS_SERVER_URL = process.env.STORYBOOK_MORALIS_SERVER_URL;

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
            if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
                enableWeb3({ provider: connectorId as any });
            }
        }, [
            isAuthenticated,
            isWeb3Enabled,
            isInitialized,
            isWeb3EnableLoading,
        ]);

        return null;
    };

    return (
        <>
            {MORALIS_APP_ID && MORALIS_SERVER_URL ? (
                <MoralisProvider
                    appId={MORALIS_APP_ID}
                    serverUrl={MORALIS_SERVER_URL}
                >
                    <Story />
                    <Web3Initialize />
                </MoralisProvider>
            ) : (
                <>
                    <p>
                        This component requires your Moralis Server connection!
                    </p>
                    <p>
                        Rename .env.example to .env in the main folder and
                        provide your appId and serverUrl from Moralis{' '}
                        <a
                            href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
                            target="_blank"
                        >
                            (How to start Moralis Server)
                        </a>
                        <br />
                        Example: <br />
                        STORYBOOK_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
                        <br />
                        STORYBOOK_MORALIS_SERVER_URL =
                        https://xxxxxx.grandmoralis.com:2053/server
                    </p>
                    <p>After adding .env run yarn start again</p>
                </>
            )}
        </>
    );
};
