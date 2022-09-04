import { FC } from 'react';
import Moralis from 'moralis';
import { useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button } from '@web3uikit/core';
import { ButtonProps } from '@web3uikit/core/dist/lib/Button/types';

type TRequestConfig = {
    domain: string;
    statement: string;
    uri: string;
    timeout: number;
};

export interface IConnectButtonProps extends ButtonProps {
    requestConfig: TRequestConfig;
}

const ConnectButton: FC<IConnectButtonProps> = ({
    requestConfig,
    ...props
}) => {
    // const config = requestConfig;

    const { connectAsync } = useConnect();

    const handleAuth = async () => {
        const { account, chain } = await connectAsync({
            connector: new InjectedConnector(),
        });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        console.log(userData);
    };

    return <Button onClick={() => handleAuth()} {...props} />;
};

export default ConnectButton;
