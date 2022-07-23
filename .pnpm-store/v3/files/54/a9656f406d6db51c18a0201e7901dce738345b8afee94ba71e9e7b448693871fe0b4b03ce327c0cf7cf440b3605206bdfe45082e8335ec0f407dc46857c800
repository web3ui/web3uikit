import MoralisType from "moralis";
import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
export interface UseNFTBalancesParams extends Omit<Parameters<typeof MoralisType.Web3API["account"]["getNFTs"]>[0], "address"> {
    address?: string;
}
export declare const useNFTBalances: (params?: UseNFTBalancesParams | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    getNFTBalances: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<{
        status?: string | undefined;
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        }[] | undefined;
    } | null, {
        address: string;
        chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa";
        format?: "decimal" | "hex" | undefined;
        offset?: number | undefined;
        limit?: number | undefined;
        token_addresses?: string[] | undefined;
    }>) => Promise<{
        status?: string | undefined;
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        }[] | undefined;
    } | null | undefined>;
    data: {
        status?: string | undefined;
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
        result?: {
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        }[] | undefined;
    } | {
        result: ({
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        } | {
            image: string | null | undefined;
            metadata: any;
            token_address: string;
            token_id: string;
            contract_type: string;
            owner_of: string;
            block_number: string;
            block_number_minted: string;
            token_uri?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        })[];
        status?: string | undefined;
        total?: number | undefined;
        page?: number | undefined;
        page_size?: number | undefined;
    } | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
