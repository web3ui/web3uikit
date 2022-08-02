import { WritableDraft } from "immer/dist/internal";
import MoralisType from "moralis";
import { DefaultQueryAttribute, Query } from "../../../utils/genericQuery";
import { UseResolveCallOptions } from "../../internal/_useResolveAsyncCall";
export interface MoralisQueryFetchOptions<Entity = DefaultQueryAttribute> {
    onError?: (error: Error) => void;
    onSuccess?: (result: MoralisType.Object<Entity>[]) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export declare type OnLiveHandler<Entity = DefaultQueryAttribute> = (entity: MoralisType.Object<Entity>, all: MoralisType.Object<Entity>[] | WritableDraft<MoralisType.Object<Entity>>[]) => MoralisType.Object<Entity>[];
export interface UseMoralisQueryOptions<Entity = DefaultQueryAttribute> extends UseResolveCallOptions {
    live?: boolean;
    onLiveCreate?: OnLiveHandler<Entity>;
    onLiveEnter?: OnLiveHandler<Entity>;
    onLiveLeave?: OnLiveHandler<Entity>;
    onLiveUpdate?: OnLiveHandler<Entity>;
    onLiveDelete?: OnLiveHandler<Entity>;
}
export declare const useMoralisQuery: <Entity extends MoralisType.Attributes = MoralisType.Attributes>(nameOrObject: string | MoralisType.Object, queryMap?: (q: Query<Entity>) => Query<Entity>, dependencies?: unknown[], options?: UseMoralisQueryOptions<Entity>) => {
    fetch: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<MoralisType.Object<Entity>[], object>) => Promise<MoralisType.Object<Entity>[] | undefined>;
    isFetching: boolean;
    isLoading: boolean;
    error: Error | null;
    data: MoralisType.Object<Entity>[];
};
