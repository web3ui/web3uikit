import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { OpenseaNetwork, OpenseaTokenType } from "./types";
export interface UseOpenSeaSellOrderParams {
    network?: OpenseaNetwork;
    tokenAddress: string;
    tokenId: string;
    tokenType: OpenseaTokenType;
    userAddress: string;
    startAmount: number;
    endAmount: number;
    expirationTime?: number;
}
export interface UseOpenSeaSellOrderOptions extends UseResolveCallOptions {
}
export declare const useOpenSeaSellOrder: (params: UseOpenSeaSellOrderParams, options?: UseOpenSeaSellOrderOptions) => {
    createSellOrder: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        network: OpenseaNetwork;
        tokenAddress: string;
        tokenId: string;
        tokenType: OpenseaTokenType;
        userAddress: string;
        startAmount: number;
        endAmount: number;
        expirationTime: number | undefined;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
