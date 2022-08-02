import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export declare type MoralisCloudResult = unknown;
export interface UseMoralisCloudFunctionOptions extends UseResolveCallOptions {
}
export declare type MoralisCloudFunctionParameters = Record<string, unknown>;
export interface MoralisCloudFetchOptions {
    onError?: (error: Error) => void;
    onSuccess?: (results: MoralisCloudResult) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
    params?: MoralisCloudFunctionParameters;
}
export declare const useMoralisCloudFunction: (name: string, params?: MoralisCloudFunctionParameters | undefined, options?: UseMoralisCloudFunctionOptions | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<unknown, MoralisCloudFunctionParameters>) => Promise<unknown>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: unknown;
    setData: import("use-immer").Updater<unknown>;
};
