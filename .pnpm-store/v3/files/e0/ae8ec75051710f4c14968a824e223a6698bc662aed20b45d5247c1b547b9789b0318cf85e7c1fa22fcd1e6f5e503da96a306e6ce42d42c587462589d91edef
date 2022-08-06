import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export declare type Web3TransferResult = unknown;
export interface UseWeb3TransferOptions extends UseResolveCallOptions {
}
declare type TransferType = "native" | "erc20" | "erc721" | "erc1155";
declare type TransferSystem = "evm";
export declare type Web3TransferParameters = {
    type?: TransferType;
    receiver?: string;
    contractAddress?: string;
    /** @deprecated use contractAddress field instead */
    contract_address?: string;
    amount?: string;
    tokenId?: string;
    /** @deprecated use tokenId field instead */
    token_id?: string;
    system?: TransferSystem;
};
export interface Web3TransferFetchOptions {
    onError?: (error: Error) => void;
    onSuccess?: (results: Web3TransferResult) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
    params?: Web3TransferParameters;
}
export declare const useWeb3Transfer: (params?: Web3TransferParameters | undefined, options?: UseWeb3TransferOptions | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<unknown, Web3TransferParameters>) => Promise<unknown>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: unknown;
    setData: import("use-immer").Updater<unknown>;
};
export {};
