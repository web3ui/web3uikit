import MoralisType from "moralis";
import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
export declare type UseTokenPriceParams = Parameters<typeof MoralisType.Web3API["token"]["getTokenPrice"]>[0];
export declare const useTokenPrice: (params: UseTokenPriceParams, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    fetchTokenPrice: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<({
        nativePrice?: {
            value: string;
            decimals: number;
            name: string;
            symbol: string;
        } | undefined;
        usdPrice: number;
        exchangeAddress?: string | undefined;
        exchangeName?: string | undefined;
    } & {
        symbol: unknown;
    }) | null, {
        chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa";
        providerUrl?: string | undefined;
        exchange?: string | undefined;
        to_block?: number | undefined;
        address: string;
    }>) => Promise<({
        nativePrice?: {
            value: string;
            decimals: number;
            name: string;
            symbol: string;
        } | undefined;
        usdPrice: number;
        exchangeAddress?: string | undefined;
        exchangeName?: string | undefined;
    } & {
        symbol: unknown;
    }) | null | undefined>;
    data: {
        formattedUsd: string;
        formattedNative: string | null;
        nativePrice?: {
            value: string;
            decimals: number;
            name: string;
            symbol: string;
        } | undefined;
        usdPrice: number;
        exchangeAddress?: string | undefined;
        exchangeName?: string | undefined;
        symbol: unknown;
    } | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
