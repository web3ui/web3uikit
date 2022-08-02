/**
 * this is a set which automatically forgets
 * a given entry when a new entry is set and the ttl
 * of the old one is over
 */
export declare class ObliviousSet<T = any> {
    readonly ttl: number;
    readonly map: Map<any, any>;
    /**
     * Creating calls to setTimeout() is expensive,
     * so we only do that if there is not timeout already open.
     */
    _to: boolean;
    constructor(ttl: number);
    has(value: T): boolean;
    add(value: T): void;
    clear(): void;
}
/**
 * Removes all entries from the set
 * where the TTL has expired
 */
export declare function removeTooOldValues(obliviousSet: ObliviousSet): void;
export declare function now(): number;
