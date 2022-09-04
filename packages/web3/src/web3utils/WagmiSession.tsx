import { FC } from 'react';
import {
    createClient,
    configureChains,
    defaultChains,
    WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains(defaultChains, [
    publicProvider(),
]);

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
});

const WagmiSession: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiSession;
