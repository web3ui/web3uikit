import React, { useState } from 'react';
import { INotificationConfigProps, ISendTransactionProps } from './types';
import { useNotification, Button, notifyType } from '@web3uikit/core';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { CrossCircle, Checkmark } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';

export const SendTransaction: React.FC<ISendTransactionProps> = ({
    buttonConfig,
    chainId,
    contractOptions,
    notificationConfig = {
        success: {
            title: 'Transaction Successful',
            icon: <Checkmark fontSize={20} fill={color.green} />,
            position: 'topR',
        },
        error: {
            title: 'Transaction Failed',
            icon: <CrossCircle fill={color.red} fontSize={20} />,
            position: 'topR',
        },
    },
    onComplete,
}) => {
    const { disabled, ...restButtonProps } = buttonConfig;
    const dispatch = useNotification();
    const { Moralis, isInitialized, isInitializing } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();
    const [isTrxnLoading, setIsTrxnLoading] = useState(false);

    const handleTransactionNotification = (
        type: notifyType,
        props: INotificationConfigProps,
    ) => {
        dispatch({
            type,
            message: props.message,
            title: props.title,
            icon: props.icon,
            position: props.position ?? 'topR',
        });
    };

    const handleSendTransaction = async () => {
        if (chainId !== Moralis.getChainId()) {
            console.log(Moralis.getChainId());
            const errorNotification: INotificationConfigProps = {
                message: `Switch to ${chainId}`,
                title: 'Incorrect Network',
                icon: <CrossCircle fill={color.red} fontSize={20} />,
                position: 'topR',
            };
            handleTransactionNotification('error', errorNotification);
            return;
        }
        setIsTrxnLoading(true);
        await contractProcessor.fetch({
            params: contractOptions,
            onSuccess: (res: any) => {
                const successOptions = {
                    ...notificationConfig.success,
                    message: res?.hash,
                };
                handleTransactionNotification('success', successOptions);
                onComplete && onComplete(res);
                setIsTrxnLoading(false);
            },
            onError: (error: any) => {
                const errorOptions = {
                    ...notificationConfig.error,
                    message: `${error?.message.toString().slice(0, 50)}...`,
                };
                handleTransactionNotification('error', errorOptions);
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
