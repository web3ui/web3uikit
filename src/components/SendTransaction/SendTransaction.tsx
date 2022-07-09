import React from 'react';
import { INotificationConfigProps, SendTransactionProps } from './types';
import { Button } from '../Button';
import { useNotification } from '../Notification';
import { notifyType } from '../Notification/types';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

export const SendTransaction: React.FC<SendTransactionProps> = ({
    buttonConfig,
    chainId,
    contractOptions,
    notificationConfig = {
        success: {
            title: 'Transaction Successful',
            icon: 'checkmark',
            position: 'topR',
        },
        error: {
            title: 'Transaction Failed',
            icon: 'xCircle',
            position: 'topR',
        },
    },
    onComplete,
}) => {
    const dispatch = useNotification();
    const { Moralis, isInitialized, isInitializing } = useMoralis();
    const contractProcessor = useWeb3ExecuteFunction();

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
                icon: 'xCircle',
                position: 'topR',
            };
            handleTransactionNotification('error', errorNotification);
            return;
        }
        await contractProcessor.fetch({
            params: contractOptions,
            onSuccess: (res: any) => {
                const successOptions = {
                    ...notificationConfig.success,
                    message: res?.hash,
                };
                handleTransactionNotification('success', successOptions);
                onComplete && onComplete(res);
            },
            onError: (error: any) => {
                const errorOptions = {
                    ...notificationConfig.error,
                    message: `${error?.message.toString().slice(0, 50)}...`,
                };
                handleTransactionNotification('error', errorOptions);
                console.log(error);
            },
        });
    };

    return (
        <Button
            data-testid="test-send-transaction"
            onClick={() => handleSendTransaction()}
            disabled={!isInitialized && !isInitializing}
            {...buttonConfig}
        />
    );
};

export default SendTransaction;
