import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { OpenseaNetwork } from "./types";
export interface UseOpenSeaAssetParams {
    network?: OpenseaNetwork;
    tokenAddress: string;
    tokenId: string;
}
export interface UseOpenSeaAssetOptions extends UseResolveCallOptions {
}
export declare const useOpenSeaAsset: (params: UseOpenSeaAssetParams, options?: UseOpenSeaAssetOptions) => {
    getAsset: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        network: OpenseaNetwork;
        tokenAddress: string;
        tokenId: string;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
