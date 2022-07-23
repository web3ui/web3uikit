import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export interface UseMoralisSolanaApiCallOptions extends UseResolveCallOptions {
}
export declare const useMoralisSolanaCall: <Params extends object, Result>(call: (params: Params) => Promise<Result>, params?: Params | undefined, options?: UseMoralisSolanaApiCallOptions | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<Result | null, Params>) => Promise<Result | null | undefined>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: Result | null;
    setData: import("use-immer").Updater<Result | null>;
};
export declare const useMoralisSolanaApi: () => {
    initialize: (options: {
        apiKey?: string | undefined;
        serverUrl?: string | undefined;
        Moralis?: any;
    }) => void;
    account: {
        balance: (options: {
            network: "mainnet" | "testnet";
            address: string;
        }) => Promise<{
            solana: string;
            lamports: string;
        }>;
        getSPL: (options: {
            network: "mainnet" | "testnet";
            address: string;
        }) => Promise<{
            associatedTokenAddress: string;
            mint: string;
            amount: string;
            amountRaw: string;
            decimals: number;
        }[]>;
        getNFTs: (options: {
            network: "mainnet" | "testnet";
            address: string;
        }) => Promise<{
            associatedTokenAddress: string;
            mint: string;
        }[]>;
        getPortfolio: (options: {
            address: string;
            network: "mainnet" | "testnet";
        }) => Promise<{
            nativeBalance: {
                solana: string;
                lamports: string;
            };
            nfts: {
                associatedTokenAddress: string;
                mint: string;
            }[];
            tokens: {
                associatedTokenAddress: string;
                mint: string;
                amount: string;
                amountRaw: string;
                decimals: number;
            }[];
        }>;
    };
    SolanaAPI: typeof import("moralis/types").Moralis.SolanaAPI;
};
