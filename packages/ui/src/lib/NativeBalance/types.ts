import {
    UseMoralisWeb3ApiCallOptions,
    UseNativeBalancesParams,
} from 'react-moralis';

export interface NativeBalanceProps {
    params?: UseNativeBalancesParams | undefined;
    options?: UseMoralisWeb3ApiCallOptions | undefined;
    style?: React.CSSProperties | undefined;
}
