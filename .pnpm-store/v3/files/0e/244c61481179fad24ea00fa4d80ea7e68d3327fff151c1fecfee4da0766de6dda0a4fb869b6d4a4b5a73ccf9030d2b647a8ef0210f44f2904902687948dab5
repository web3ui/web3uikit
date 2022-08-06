import MoralisType from "moralis";
import { Query } from "../../../utils/genericQuery";
import { MoralisListenerHandler } from "./_useMoralisSubscriptionListener";
export interface UseSubscriptionQueryOptions {
    enabled?: boolean;
    onCreate?: MoralisListenerHandler;
    onUpdate?: MoralisListenerHandler;
    onEnter?: MoralisListenerHandler;
    onLeave?: MoralisListenerHandler;
    onDelete?: MoralisListenerHandler;
}
export declare const useMoralisSubscription: <Entity extends MoralisType.Attributes = MoralisType.Attributes>(nameOrObject: string | MoralisType.Object, queryMap?: (q: Query<Entity>) => Query<Entity>, dependencies?: unknown[], options?: UseSubscriptionQueryOptions) => void;
