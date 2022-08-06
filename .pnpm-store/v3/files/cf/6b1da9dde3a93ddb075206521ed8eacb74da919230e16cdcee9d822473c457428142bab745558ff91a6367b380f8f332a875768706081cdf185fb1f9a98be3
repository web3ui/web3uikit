import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { RaribleNetwork, RaribleTokenTypeAssetClass } from "./types";
export interface UseRaribleSellOrderParams {
    chain?: RaribleNetwork;
    userAddress: string;
    makeTokenId: string;
    makeTokenAddress: string;
    makeAssetClass: RaribleTokenTypeAssetClass;
    makeValue: string;
    takeAssetClass: RaribleTokenTypeAssetClass;
    takeValue: string;
}
export interface UseRaribleSellOrderOptions extends UseResolveCallOptions {
}
export declare const useRaribleSellOrder: (params: UseRaribleSellOrderParams, options?: UseRaribleSellOrderOptions) => {
    createSellOrder: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        chain: RaribleNetwork;
        userAddress: string;
        makeTokenId: string;
        makeTokenAddress: string;
        makeAssetClass: RaribleTokenTypeAssetClass;
        makeValue: string;
        takeAssetClass: RaribleTokenTypeAssetClass;
        takeValue: string;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
