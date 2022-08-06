import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export declare type Web3ExecuteFunctionResult = unknown;
export interface UseWeb3ExecuteFunctionOptions extends UseResolveCallOptions {
}
export declare type Web3ExecuteFunctionParameters = {
    contractAddress?: string;
    abi?: object;
    functionName?: string;
    params?: Record<string, unknown>;
    msgValue?: number | string;
};
export interface Web3ExecuteFunctionFetchOptions {
    onError?: (error: Error) => void;
    onSuccess?: (results: Web3ExecuteFunctionResult) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
    params?: Web3ExecuteFunctionParameters;
}
export declare const useWeb3ExecuteFunction: (params?: Web3ExecuteFunctionParameters | undefined, options?: UseWeb3ExecuteFunctionOptions | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<unknown, Web3ExecuteFunctionParameters>) => Promise<unknown>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: unknown;
    setData: import("use-immer").Updater<unknown>;
};
