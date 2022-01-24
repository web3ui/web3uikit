import React, { useEffect } from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
        default: 'page',
        values: [
            {
                name: 'page',
                value: '#FFFFFF',
            },
            {
                name: 'footer',
                value: '#041836',
            },
            {
                name: 'body',
                value: '#F2F6FF',
            },
            {
                name: 'blue',
                value: '#2E7DAF',
            },
            {
                name: 'green',
                value: '#21BF96',
            },
            {
                name: 'red',
                value: '#EB5757',
            },
            {
                name: 'yellow',
                value: '#ECA609',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => {
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
                    enableWeb3({ provider: connectorId });
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [isAuthenticated, isWeb3Enabled, isInitialized]);

            return null;
        };
        return (
            <MoralisProvider
                appId="5mGWm5hWRK9zVPoQjBdg8qDYxlQIQ7AVT2DbFuw8"
                serverUrl="https://doqmequbk5km.usemoralis.com:2053/server"
            >
                <Story />
                <Web3Initialize />
            </MoralisProvider>
        );
    },
];
