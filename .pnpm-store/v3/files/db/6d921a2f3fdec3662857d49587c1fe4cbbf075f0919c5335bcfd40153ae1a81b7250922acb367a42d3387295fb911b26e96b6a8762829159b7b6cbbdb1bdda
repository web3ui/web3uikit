import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
import MoralisType from "moralis";
export interface UseERC20TransfersParams extends Omit<Parameters<typeof MoralisType.Web3API["account"]["getTokenTransfers"]>[0], "address"> {
    address?: string;
}
export declare const useERC20Transfers: (params?: UseERC20TransfersParams | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    fetchERC20Transfers: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<{
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            transaction_hash: string;
            address: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            to_address: string;
            from_address: string;
            value: string;
        }[] | undefined;
    } | null, {
        address: string;
        chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa";
        subdomain?: string | undefined;
        from_block?: number | undefined;
        to_block?: number | undefined;
        from_date?: string | undefined;
        to_date?: string | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
    }>) => Promise<{
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            transaction_hash: string;
            address: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            to_address: string;
            from_address: string;
            value: string;
        }[] | undefined;
    } | null | undefined>;
    data: {
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            transaction_hash: string;
            address: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            to_address: string;
            from_address: string;
            value: string;
        }[] | undefined;
    } | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
