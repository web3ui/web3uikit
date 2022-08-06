import MoralisType from "moralis";
import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
export interface UseNFTTransfersParams extends Omit<Parameters<typeof MoralisType.Web3API["account"]["getTokenTransfers"]>[0], "address"> {
    address?: string;
}
export declare const useNFTTransfers: (params?: UseNFTTransfersParams | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    getNFTTransfers: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<{
        total: number;
        page: number;
        page_size: number;
        result: {
            token_address: string;
            token_id: string;
            from_address?: string | undefined;
            to_address: string;
            value?: string | undefined;
            amount?: string | undefined;
            contract_type: string;
            block_number: string;
            block_timestamp: string;
            block_hash: string;
            transaction_hash: string;
            transaction_type?: string | undefined;
            transaction_index?: string | undefined;
            log_index: number;
            operator?: string | undefined;
        }[];
        block_exists?: boolean | undefined;
        index_complete?: boolean | undefined;
    } | null, {
        chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
        format?: "decimal" | "hex" | undefined;
        direction?: "both" | "to" | "from" | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
        cursor?: string | undefined;
    } & {
        address: string;
    }>) => Promise<{
        total: number;
        page: number;
        page_size: number;
        result: {
            token_address: string;
            token_id: string;
            from_address?: string | undefined;
            to_address: string;
            value?: string | undefined;
            amount?: string | undefined;
            contract_type: string;
            block_number: string;
            block_timestamp: string;
            block_hash: string;
            transaction_hash: string;
            transaction_type?: string | undefined;
            transaction_index?: string | undefined;
            log_index: number;
            operator?: string | undefined;
        }[];
        block_exists?: boolean | undefined;
        index_complete?: boolean | undefined;
    } | null | undefined>;
    data: {
        total: number;
        page: number;
        page_size: number;
        result: {
            token_address: string;
            token_id: string;
            from_address?: string | undefined;
            to_address: string;
            value?: string | undefined;
            amount?: string | undefined;
            contract_type: string;
            block_number: string;
            block_timestamp: string;
            block_hash: string;
            transaction_hash: string;
            transaction_type?: string | undefined;
            transaction_index?: string | undefined;
            log_index: number;
            operator?: string | undefined;
        }[];
        block_exists?: boolean | undefined;
        index_complete?: boolean | undefined;
    } | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
