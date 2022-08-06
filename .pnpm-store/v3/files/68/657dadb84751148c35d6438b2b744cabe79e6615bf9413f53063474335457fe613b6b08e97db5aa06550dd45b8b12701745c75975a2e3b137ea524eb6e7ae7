import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export interface UseMoralisWeb3ApiCallOptions extends UseResolveCallOptions {
}
export declare const useMoralisWeb3ApiCall: <Params extends object, Result>(call: (params: Params) => Promise<Result>, params?: Params | undefined, options?: UseMoralisWeb3ApiCallOptions | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<Result | null, Params>) => Promise<Result | null | undefined>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: Result | null;
    setData: import("use-immer").Updater<Result | null>;
};
export declare const useMoralisWeb3Api: () => {
    initialize: (options: {
        apiKey?: string | undefined;
        serverUrl?: string | undefined;
        Moralis?: any;
    }) => void;
    native: {
        getBlock: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
        } & {
            block_number_or_hash: string;
        }) => Promise<{
            timestamp: string;
            number: string;
            hash: string;
            parent_hash: string;
            nonce: string;
            sha3_uncles: string;
            logs_bloom: string;
            transactions_root: string;
            state_root: string;
            receipts_root: string;
            miner: string;
            difficulty: string;
            total_difficulty: string;
            size: string;
            extra_data: string;
            gas_limit: string;
            gas_used: string;
            transaction_count: string;
            transactions: {
                hash: string;
                nonce: string;
                transaction_index: string;
                from_address: string;
                to_address: string;
                value: string;
                gas?: string | undefined;
                gas_price: string;
                input: string;
                receipt_cumulative_gas_used: string;
                receipt_gas_used: string;
                receipt_contract_address?: string | undefined;
                receipt_root?: string | undefined;
                receipt_status: string;
                block_timestamp: string;
                block_number: string;
                block_hash: string;
                logs: {
                    log_index: string;
                    transaction_hash: string;
                    transaction_index: string;
                    address: string;
                    data: string;
                    topic0: string;
                    topic1?: string | undefined;
                    topic2?: string | undefined;
                    topic3?: string | undefined;
                    block_timestamp: string;
                    block_number: string;
                    block_hash: string;
                }[];
            }[];
        }>;
        getDateToBlock: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            providerUrl?: string | undefined;
            date: string;
        }) => Promise<{
            date: string;
            block: number;
            timestamp: number;
        }>;
        getLogsByAddress: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            block_number?: string | undefined;
            from_block?: string | undefined;
            to_block?: string | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            topic0?: string | undefined;
            topic1?: string | undefined;
            topic2?: string | undefined;
            topic3?: string | undefined;
        } & {
            address: string;
        }) => Promise<{
            transaction_hash: string;
            address: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            data: string;
            topic0: string;
            topic1: string;
            topic2: string;
            topic3: string;
        }>;
        getNFTTransfersByBlock: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            cursor?: string | undefined;
        } & {
            block_number_or_hash: string;
        }) => Promise<{
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
        }>;
        getTransaction: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
        } & {
            transaction_hash: string;
        }) => Promise<{
            hash: string;
            nonce: string;
            transaction_index: string;
            from_address: string;
            to_address: string;
            value: string;
            gas?: string | undefined;
            gas_price: string;
            input: string;
            receipt_cumulative_gas_used: string;
            receipt_gas_used: string;
            receipt_contract_address?: string | undefined;
            receipt_root?: string | undefined;
            receipt_status: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            logs: {
                log_index: string;
                transaction_hash: string;
                transaction_index: string;
                address: string;
                data: string;
                topic0: string;
                topic1?: string | undefined;
                topic2?: string | undefined;
                topic3?: string | undefined;
                block_timestamp: string;
                block_number: string;
                block_hash: string;
            }[];
        }>;
        getContractEvents: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            providerUrl?: string | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            topic: string;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
            transaction_hash: string;
            address: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
            data: {
                [key: string]: unknown;
            };
        }[]>;
        runContractFunction: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            providerUrl?: string | undefined;
            function_name: string;
        } & {
            address: string;
        }) => Promise<string>;
    };
    account: {
        getTransactions: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
            total?: number | undefined;
            page?: number | undefined;
            page_size?: number | undefined;
            result?: {
                hash: string;
                nonce: string;
                transaction_index: string;
                from_address: string;
                to_address: string;
                value: string;
                gas: string;
                gas_price: string;
                input: string;
                receipt_cumulative_gas_used: string;
                receipt_gas_used: string;
                receipt_contract_address: string;
                receipt_root: string;
                receipt_status: string;
                block_timestamp: string;
                block_number: string;
                block_hash: string;
            }[] | undefined;
        }>;
        getNativeBalance: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            providerUrl?: string | undefined;
            to_block?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
            balance: string;
        }>;
        getTokenBalances: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            to_block?: number | undefined;
            token_addresses?: string[] | undefined;
        } & {
            address: string;
        }) => Promise<{
            token_address: string;
            name: string;
            symbol: string;
            logo?: string | undefined;
            thumbnail?: string | undefined;
            decimals: string;
            balance: string;
        }[]>;
        getTokenTransfers: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getNFTs: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            token_addresses?: string[] | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getNFTTransfers: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            direction?: "both" | "to" | "from" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            cursor?: string | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getNFTsForContract: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
            token_address: string;
        }) => Promise<{
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
        }>;
    };
    token: {
        getTokenMetadata: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            providerUrl?: string | undefined;
            addresses: string[];
        }) => Promise<{
            address: string;
            name: string;
            symbol: string;
            decimals: string;
            logo?: string | undefined;
            logo_hash?: string | undefined;
            thumbnail?: string | undefined;
            block_number?: string | undefined;
            validated?: string | undefined;
        }[]>;
        getNFTTrades: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            from_block?: number | undefined;
            to_block?: string | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            provider_url?: string | undefined;
            marketplace?: "opensea" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
            total?: number | undefined;
            page?: number | undefined;
            page_size?: number | undefined;
            result?: ({
                transaction_hash: string;
                transaction_index: string;
                token_ids: unknown[];
                seller_address: string;
                buyer_address: string;
                marketplace_address: string;
                price: string;
                block_timestamp: string;
                block_number: string;
                block_hash: string;
            } & {
                token_address: unknown;
            })[] | undefined;
        }>;
        getNFTLowestPrice: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            days?: number | undefined;
            provider_url?: string | undefined;
            marketplace?: "opensea" | undefined;
        } & {
            address: string;
        }) => Promise<{
            transaction_hash: string;
            transaction_index: string;
            token_ids: unknown[];
            seller_address: string;
            buyer_address: string;
            marketplace_address: string;
            price: string;
            block_timestamp: string;
            block_number: string;
            block_hash: string;
        } & {
            token_address: unknown;
        }>;
        getTokenMetadataBySymbol: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            symbols: string[];
        }) => Promise<{
            address: string;
            name: string;
            symbol: string;
            decimals: string;
            logo?: string | undefined;
            logo_hash?: string | undefined;
            thumbnail?: string | undefined;
            block_number?: string | undefined;
            validated?: string | undefined;
        }[]>;
        getTokenPrice: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            providerUrl?: string | undefined;
            exchange?: string | undefined;
            to_block?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getTokenAddressTransfers: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            subdomain?: string | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getTokenAllowance: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            providerUrl?: string | undefined;
            owner_address: string;
            spender_address: string;
        } & {
            address: string;
        }) => Promise<{
            allowance: string;
        }>;
        searchNFTs: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            q: string;
            filter?: "name" | "description" | "attributes" | "global" | "name,description" | "name,attributes" | "description,attributes" | "name,description,attributes" | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        }) => Promise<{
            total?: number | undefined;
            page?: number | undefined;
            page_size?: number | undefined;
            result?: ({
                token_address: string;
                token_id: string;
                contract_type: string;
                token_uri: string;
                metadata: string;
                synced_at: string;
            } & {
                token_hash: unknown;
            })[] | undefined;
        }>;
        getNftTransfersFromToBlock: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            from_block?: number | undefined;
            to_block?: number | undefined;
            from_date?: string | undefined;
            to_date?: string | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            cursor?: string | undefined;
        }) => Promise<{
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
        }>;
        getAllTokenIds: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
            total?: number | undefined;
            page?: number | undefined;
            page_size?: number | undefined;
            result?: {
                token_address: string;
                token_id: string;
                contract_type: string;
                token_uri?: string | undefined;
                metadata?: string | undefined;
                synced_at?: string | undefined;
                amount?: string | undefined;
                name: string;
                symbol: string;
            }[] | undefined;
        }>;
        getContractNFTTransfers: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            cursor?: string | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getNFTOwners: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
        }) => Promise<{
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
        }>;
        getNFTMetadata: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
        } & {
            address: string;
        }) => Promise<{
            token_address: string;
            name: string;
            synced_at?: string | undefined;
            symbol: string;
            contract_type: string;
        }>;
        reSyncMetadata: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            flag?: "uri" | "metadata" | undefined;
        } & {
            address: string;
            token_id: string;
        }) => Promise<unknown>;
        syncNFTContract: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
        } & {
            address: string;
        }) => Promise<unknown>;
        getTokenIdMetadata: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
        } & {
            address: string;
            token_id: string;
        }) => Promise<{
            token_address: string;
            token_id: string;
            contract_type: string;
            token_uri?: string | undefined;
            metadata?: string | undefined;
            synced_at?: string | undefined;
            amount?: string | undefined;
            name: string;
            symbol: string;
        }>;
        getTokenIdOwners: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
        } & {
            address: string;
            token_id: string;
        }) => Promise<{
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
        }>;
        getWalletTokenIdTransfers: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            format?: "decimal" | "hex" | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            order?: string | undefined;
            cursor?: string | undefined;
        } & {
            address: string;
            token_id: string;
        }) => Promise<{
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
        }>;
    };
    resolve: {
        resolveDomain: (options: {
            currency?: "eth" | "0x1" | undefined;
        } & {
            domain: string;
        }) => Promise<{
            address: string;
        }>;
        resolveAddress: () => Promise<{
            name: string;
        }>;
    };
    defi: {
        getPairReserves: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            to_block?: string | undefined;
            to_date?: string | undefined;
            provider_url?: string | undefined;
        } & {
            pair_address: string;
        }) => Promise<{
            reserve0: string;
            reserve1: string;
        }>;
        getPairAddress: (options: {
            chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
            to_block?: string | undefined;
            to_date?: string | undefined;
            exchange: "uniswapv2" | "uniswapv3" | "sushiswapv2" | "pancakeswapv2" | "pancakeswapv1" | "quickswap";
        } & {
            token0_address: string;
            token1_address: string;
        }) => Promise<{
            reserve0: string;
            reserve1: string;
        }>;
    };
    storage: {
        uploadFolder: () => Promise<{
            path: string;
        }[]>;
    };
    Web3API: typeof import("moralis/types").Moralis.Web3API;
};
