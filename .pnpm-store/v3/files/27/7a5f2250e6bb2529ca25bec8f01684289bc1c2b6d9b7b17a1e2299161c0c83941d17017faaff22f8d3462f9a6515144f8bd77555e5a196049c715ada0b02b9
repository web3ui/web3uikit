import { Plugin } from "../../../config/index";
import { UseResolveCallOptions } from "../_useResolveAsyncCall";
export declare const _useResolvePluginCall: <Result, Params extends object>(plugin: Plugin, call: (params: Params) => Promise<Result>, initialData: Result, params?: Params | undefined, options?: UseResolveCallOptions | undefined, defaultAutoFetch?: boolean, providedValidate?: ((params: Params) => string | undefined | null) | undefined) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../_useResolveAsyncCall").ResolveCallOptions<Result, Params>) => Promise<Result | undefined>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: Result;
    setData: import("use-immer").Updater<Result>;
};
