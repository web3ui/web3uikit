import { Web3ExecuteFunctionParameters } from 'react-moralis';
import { ButtonProps, chainIdType } from '@web3uikit/core';
import { PayloadType } from '@web3uikit/core/dist/lib/Notification/types';
export interface ISendTransactionProps {
    /**
     * Chain id the contract is deployed on
     */
    chainId: chainIdType;

    /**
     * Add your deployed contract address, contract abi, function name, function parameters, and message value - eth,matic.... you want to send
     */
    contractOptions: Web3ExecuteFunctionParameters | undefined;

    /**
     * Options to configure the button
     */
    buttonConfig: TButtonConfigProps;

    /**
     * to get transaction result
     */
    onComplete?: (res: any) => void;

    /**
     * notification customization options
     */
    notificationConfig?: {
        dispatch: (payload: PayloadType) => void;
        success?: PayloadType;
        error?: PayloadType;
    };
}

type TButtonConfigProps = Omit<ButtonProps, 'onClick'>;
