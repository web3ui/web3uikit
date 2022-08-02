import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
import { RaribleNetwork, RaribleTokenType } from "./types";
export interface UseRaribleLazyMintParams {
    chain?: RaribleNetwork;
    userAddress: string;
    tokenType: RaribleTokenType;
    tokenUri: string;
    supply: number;
    royaltiesAmount?: number;
}
export interface UseRaribleLazyMintOptions extends UseResolveCallOptions {
}
export declare const useRaribleLazyMint: (params: UseRaribleLazyMintParams, options?: UseRaribleLazyMintOptions) => {
    lazyMint: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<null, {
        chain: RaribleNetwork;
        userAddress: string;
        tokenType: RaribleTokenType;
        tokenUri: string;
        supply: number;
        royaltiesAmount: number | undefined;
    }>) => Promise<null | undefined>;
    data: null;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
};
