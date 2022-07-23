import { Cookie } from 'set-cookie-parser';
interface RequestLike {
    credentials: Request['credentials'];
    url: string;
}
interface HeadersLike {
    get(name: string): string | null;
}
interface ResponseLike {
    headers: HeadersLike;
}
export declare type Store = Map<string, StoreEntry>;
export declare type StoreEntry = Map<string, Cookie>;
export declare type CookieString = Omit<Cookie, 'expires'> & {
    expires?: string;
};
export declare const PERSISTENCY_KEY = "MSW_COOKIE_STORE";
declare class CookieStore {
    private store;
    constructor();
    /**
     * Sets the given request cookies into the store.
     * Respects the `request.credentials` policy.
     */
    add(request: RequestLike, response: ResponseLike): void;
    /**
     * Returns cookies relevant to the given request
     * and its `request.credentials` policy.
     */
    get(request: RequestLike): StoreEntry;
    /**
     * Returns a collection of all stored cookies.
     */
    getAll(): Store;
    /**
     * Deletes all cookies associated with the given request.
     */
    deleteAll(request: RequestLike): void;
    /**
     * Clears the entire cookie store.
     */
    clear(): void;
    /**
     * Hydrates the virtual cookie store from the `localStorage` if defined.
     */
    hydrate(): void;
    /**
     * Persists the current virtual cookies into the `localStorage` if defined,
     * so they are available on the next page load.
     */
    persist(): void;
    private deleteExpiredCookies;
}
export declare const store: CookieStore;
export {};
