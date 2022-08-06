import MoralisType from "moralis";
import { Query } from "../../../utils/genericQuery";
/**
 * Wrapper hook for using with queries.
 * It accepts a valid query (string or Moralis.Object),
 * and a mapping to filter the query
 *
 * It will only update when the provided dependencies change
 */
export declare const _useSafeUpdatedQuery: <Entity extends MoralisType.Attributes = MoralisType.Attributes>(nameOrObject: string | MoralisType.Object, queryMap: ((q: Query<Entity>) => Query<Entity>) | undefined, dependencies: unknown[] | undefined, isInitialized: boolean) => Query<Entity>;
