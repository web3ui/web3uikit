import { UseResolveCallOptions } from "../..//internal/_useResolveAsyncCall";
import { OneInchToken } from "./types";
export interface UseOneInchSwapParams {
    chain?: string;
    fromAmount: string | number;
    fromToken: OneInchToken;
    toToken: OneInchToken;
    slippage?: number;
}
export interface UseOneInchSwapOptions extends UseResolveCallOptions {
}
export declare const useOneInchSwap: (params: UseOneInchSwapParams, options?: UseOneInchSwapOptions) => {
    swap: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall/_useResolveAsyncCall").ResolveCallOptions<any, {
        chain: string;
        fromTokenAddress: string;
        toTokenAddress: string;
        amount: string | number;
        fromAddress: string | null;
        slippage: number;
    }>) => Promise<any>;
    data: any;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
