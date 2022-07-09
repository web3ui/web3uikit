import { Web3ExecuteFunctionParameters } from 'react-moralis';
import { ButtonProps } from '../Button';
import { chainIdType } from '../ChainSelector/types';
import { TIconType } from '../Icon/collection';
import { IPosition } from '../Notification/types';

export interface SendTransactionProps {
    chainId: chainIdType;
    contractOptions: Web3ExecuteFunctionParameters | undefined;
    buttonConfig?: Omit<ButtonProps, 'onClick'>;
    onComplete?: (res: any) => void;
    notificationConfig?: {
        success?: INotificationConfigProps;
        error?: INotificationConfigProps;
    };
}

export interface INotificationConfigProps {
    message?: string;
    title?: string;
    icon?: TIconType;
    position?: IPosition;
}
