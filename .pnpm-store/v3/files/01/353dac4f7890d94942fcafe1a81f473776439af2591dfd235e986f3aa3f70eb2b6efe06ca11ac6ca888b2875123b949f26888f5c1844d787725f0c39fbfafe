import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { OpenseaNetwork, OpenseaTokenType } from "./types";
export interface UseOpenSeaBuyOrderParams {
    network?: OpenseaNetwork;
    tokenAddress: string;
    tokenId: string;
    tokenType: OpenseaTokenType;
    amount: number;
    userAddress: string;
    paymentTokenAddress: string;
}
export interface UseOpenSeaBuyOrderOptions extends UseResolveCallOptions {
}
export declare const useOpenSeaBuyOrder: (params: UseOpenSeaBuyOrderParams, options?: UseOpenSeaBuyOrderOptions) => {
    createBuyOrder: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        network: OpenseaNetwork;
        tokenAddress: string;
        tokenId: string;
        tokenType: OpenseaTokenType;
        amount: number;
        userAddress: string;
        paymentTokenAddress: string;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
