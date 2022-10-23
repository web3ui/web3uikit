import { FC } from 'react';
import { Button, Typography } from '@web3uikit/core';
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi';

const ConnectButton: FC = () => {
    const { address, connector, isConnected } = useAccount();
    const { data: ensAvatar } = useEnsAvatar({ addressOrName: address });
    const { data: ensName } = useEnsName({ address });
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();
    const { disconnect } = useDisconnect();
    if (isConnected) {
        return (
            <div>
                {ensAvatar && <img src={ensAvatar} alt="ENS Avatar" />}
                <Typography>
                    {ensName ? `${ensName} (${address})` : address}
                </Typography>
                <Typography>
                    {connector && <div>Connected to {connector.name}</div>}
                </Typography>
                <Button onClick={() => disconnect()} text="Disconnect" />
            </div>
        );
    }

    return (
        <div>
            {connectors.map((connector) => (
                <div key={connector.id} style={{ marginBottom: '10px' }}>
                    <Button
                        disabled={!connector.ready}
                        isLoading={isLoading}
                        onClick={() => connect({ connector })}
                        text={connector.name}
                    />
                </div>
            ))}
            {error && <div>{error.message}</div>}
        </div>
    );
};

export default ConnectButton;
