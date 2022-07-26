import { Web3ExecuteFunctionParameters } from 'react-moralis';
// import { chainIdType } from '../ChainSelector/types';
// import { IPosition } from '../Notification/types';
import { ButtonProps, IPosition, chainIdType } from '@web3uikit/core';

type TButtonConfigProps = Omit<ButtonProps, 'onClick'>;
export interface SendTransactionProps {
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
        success?: INotificationConfigProps;
        error?: INotificationConfigProps;
    };
}

export interface INotificationConfigProps {
    message?: string;
    title?: string;
    icon?: JSX.Element;
    position?: IPosition;
}
