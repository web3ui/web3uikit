import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { OpenseaNetwork } from "./types";
export interface UseOpenSeaOrdersParams {
    network?: OpenseaNetwork;
    tokenAddress: string;
    tokenId: string;
    orderSide: 0 | 1;
    page?: number;
}
export interface UseOpenSeaOrdersOptions extends UseResolveCallOptions {
}
export declare const useOpenSeaOrders: (params: UseOpenSeaOrdersParams, options?: UseOpenSeaOrdersOptions) => {
    getOrders: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        network: OpenseaNetwork;
        tokenAddress: string;
        tokenId: string;
        orderSide: 0 | 1;
        page: number;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
