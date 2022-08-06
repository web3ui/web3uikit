import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export interface UseFiatBuyParams {
    coin?: string;
    receiver?: string;
}
export interface UseFiatBuyOptions extends UseResolveCallOptions {
    disableTriggers?: boolean;
}
export declare const useFiatBuy: (params?: UseFiatBuyParams, { disableTriggers, ...options }?: UseFiatBuyOptions) => {
    buy: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        coin: string | undefined;
        receiver: string | undefined;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
