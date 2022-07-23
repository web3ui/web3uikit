export interface UseResolveCallOptions {
    autoFetch?: boolean;
}
export declare type ResolveCallParams = object;
export interface ResolveCallOptions<Result, Params extends ResolveCallParams> {
    onError?: (error: Error) => void;
    onSuccess?: (results: Result) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
    params?: Params;
}
export declare const _useResolveCall: <Result, Params extends object>(call: (params: Params) => Promise<Result>, initialData: Result, params?: Params | undefined, options?: UseResolveCallOptions | undefined, defaultAutoFetch?: boolean, validate?: ((params: Params) => string | undefined | null) | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: ResolveCallOptions<Result, Params>) => Promise<Result | undefined>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: Result;
    setData: import("use-immer").Updater<Result>;
};
