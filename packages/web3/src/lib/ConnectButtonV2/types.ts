import { ButtonProps } from '@web3uikit/core/dist/lib/Button/types';

type TRequestConfig = {
    domain: string;
    statement: string;
    uri: string;
    timeout: number;
};

export interface IConnectButtonProps extends ButtonProps {
    requestConfig: TRequestConfig;
    web3apiKey: string;
}
