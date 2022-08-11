import React, { useState } from 'react';
import { ISendTransactionProps } from './types';
import { Button } from '@web3uikit/core';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { CrossCircle } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { PayloadType } from '@web3uikit/core/dist/lib/Notification/types';

export const SendTransaction: React.FC<ISendTransactionProps> = ({
    buttonConfig,
    chainId,
    contractOptions,
    notificationConfig,
    onComplete,
}) => {
    const { disabled, ...restButtonProps } = buttonConfig;
    const { Moralis, isInitialized, isInitializing } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const [isTrxnLoading, setIsTrxnLoading] = useState(false);

    const handleTransactionNotification = (props: PayloadType | undefined) => {
        if (props === undefined || notificationConfig?.dispatch === undefined)
            return;
        notificationConfig.dispatch({
            ...props,
        });
    };

    const handleSendTransaction = async () => {
        if (chainId !== Moralis.getChainId()) {
            console.log(Moralis.getChainId());
            const errorNotification:
                | PayloadType
                | undefined = notificationConfig?.dispatch && {
                message: `Switch to ${chainId}`,
                title: 'Incorrect Network',
                icon: <CrossCircle fill={color.red} fontSize={20} />,
                position: 'topR',
                id: 'Transaction Error',
                type: 'error',
            };
            handleTransactionNotification(errorNotification);
            return;
        }
        setIsTrxnLoading(true);
        await contractProcessor.fetch({
            params: contractOptions,
            onSuccess: (res: any) => {
                const successOptions:
                    | PayloadType
                    | undefined = notificationConfig?.dispatch && {
                    ...notificationConfig.success,
                    message: res?.hash,
                    type: 'success',
                    position: notificationConfig.success?.position || 'topR',
                };
                handleTransactionNotification(successOptions);
                onComplete && onComplete(res);
                setIsTrxnLoading(false);
            },
            onError: (error: any) => {
                const errorOptions:
                    | PayloadType
                    | undefined = notificationConfig?.dispatch && {
                    ...notificationConfig.error,
                    message: `${error?.message.toString().slice(0, 50)}...`,
                    type: 'error',
                    position: notificationConfig.error?.position || 'topR',
                };
                handleTransactionNotification(errorOptions);
                console.log(error);
                setIsTrxnLoading(false);
            },
        });
    };

    return (
        <Button
            data-testid="test-send-transaction"
            onClick={() => handleSendTransaction()}
            disabled={(!isInitialized && !isInitializing) || disabled}
            isLoading={isTrxnLoading}
            {...restButtonProps}
        />
    );
};

export default SendTransaction;
