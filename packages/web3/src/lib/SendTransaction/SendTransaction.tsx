import React, { useEffect, useState } from 'react';
import { ISendTransactionProps } from './types';
import { Button } from '@web3uikit/core';
import { useMoralis, useWeb3Contract } from 'react-moralis';
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
    const { isLoading: buttonLoading, ...restButtonProps } = buttonConfig;
    const { Moralis } = useMoralis();
    const { runContractFunction, isLoading, isFetching } =
        useWeb3Contract(contractOptions);

    const handleTransactionNotification = (props: PayloadType | undefined) => {
        if (props === undefined || notificationConfig?.dispatch === undefined)
            return;
        notificationConfig.dispatch({
            ...props,
        });
    };

    const handleSendTransaction = async () => {
        if (chainId !== Moralis.getChainId()) {
            const errorNotification: PayloadType | undefined =
                notificationConfig?.dispatch && {
                    message: `Switch to ${chainId}`,
                    title: 'Incorrect Network',
                    icon: <CrossCircle fill={color.red40} fontSize={20} />,
                    position: notificationConfig.error?.position || 'topR',
                    type: 'error',
                };
            handleTransactionNotification(errorNotification);
            return;
        }
        await runContractFunction({
            onSuccess: async (res: any) => {
                res?.wait && (await res?.wait(1));
                const successOptions: PayloadType | undefined =
                    notificationConfig?.dispatch && {
                        ...notificationConfig.success,
                        message: res?.hash,
                        title:
                            notificationConfig.success?.title ||
                            'Transaction Successfull',
                        type: 'success',
                        position:
                            notificationConfig.success?.position || 'topR',
                    };
                onComplete && onComplete(res);
                handleTransactionNotification(successOptions);
            },
            onError: (error: any) => {
                const errorOptions: PayloadType | undefined =
                    notificationConfig?.dispatch && {
                        ...notificationConfig.error,
                        message:
                            error?.message &&
                            `${error?.message.toString().slice(0, 50)}...`,
                        type: 'error',
                        title:
                            notificationConfig.error?.title ||
                            'Transaction Failed',
                        position: notificationConfig.error?.position || 'topR',
                    };
                handleTransactionNotification(errorOptions);
                console.log(error);
            },
        });
    };

    return (
        <Button
            data-testid="test-send-transaction"
            onClick={() => handleSendTransaction()}
            isLoading={isLoading || isFetching || buttonLoading}
            {...restButtonProps}
        />
    );
};

export default SendTransaction;
