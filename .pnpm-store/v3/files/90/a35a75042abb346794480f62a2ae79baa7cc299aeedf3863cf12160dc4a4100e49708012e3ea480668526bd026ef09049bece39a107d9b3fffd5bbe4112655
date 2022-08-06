import MoralisType from "moralis/types";
import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
export interface UseNativeBalancesParams extends Omit<Parameters<typeof MoralisType.Web3API["account"]["getNativeBalance"]>[0], "address"> {
    address?: string;
}
export declare const useNativeBalance: (params?: UseNativeBalancesParams | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    getBalances: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<{
        balance: string;
    } | null, {
        address: string;
        chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa";
        providerUrl?: string | undefined;
        to_block?: number | undefined;
    }>) => Promise<{
        balance: string;
    } | null | undefined>;
    data: {
        balance: string | undefined;
        formatted: string | null;
    };
    nativeToken: {
        name: string;
        symbol: string;
        decimals: number;
    } | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
