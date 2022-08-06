import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
import MoralisType from "moralis";
export interface UseERC20BalancesParams extends Omit<Parameters<typeof MoralisType.Web3API["account"]["getTokenTransfers"]>[0], "address"> {
    address?: string;
}
export declare const useERC20Balances: (params?: UseERC20BalancesParams | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    fetchERC20Balances: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<{
        token_address: string;
        name: string;
        symbol: string;
        logo?: string | undefined;
        thumbnail?: string | undefined;
        decimals: string;
        balance: string;
    }[] | null, {
        chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
        subdomain?: string | undefined;
        to_block?: number | undefined;
        token_addresses?: string[] | undefined;
    } & {
        address: string;
    }>) => Promise<{
        token_address: string;
        name: string;
        symbol: string;
        logo?: string | undefined;
        thumbnail?: string | undefined;
        decimals: string;
        balance: string;
    }[] | null | undefined>;
    data: {
        token_address: string;
        name: string;
        symbol: string;
        logo?: string | undefined;
        thumbnail?: string | undefined;
        decimals: string;
        balance: string;
    }[] | null;
    isLoading: boolean;
    isFetching: boolean;
    error: Error | null;
};
