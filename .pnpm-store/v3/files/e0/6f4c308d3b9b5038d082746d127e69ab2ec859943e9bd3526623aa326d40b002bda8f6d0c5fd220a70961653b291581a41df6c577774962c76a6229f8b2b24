import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { OneInchToken } from "./types";
export interface UseOneInchQuoteParams {
    chain?: string;
    fromAmount: string | number;
    fromToken: OneInchToken;
    toToken: OneInchToken;
}
export interface UseOneInchQuoteOptions extends UseResolveCallOptions {
}
export declare const useOneInchQuote: (params: UseOneInchQuoteParams, options?: UseOneInchQuoteOptions) => {
    getQuote: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        chain: string;
        fromTokenAddress: string;
        toTokenAddress: string;
        amount: string;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
