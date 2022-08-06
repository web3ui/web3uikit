import { HeadersList, HeadersObject } from './glossary';
export default class HeadersPolyfill {
    private headers;
    private names;
    constructor(init?: HeadersInit | HeadersObject | HeadersList);
    [Symbol.iterator](): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a `ByteString` sequence of all the values of a header with a given name.
     */
    get(name: string): string | null;
    /**
     * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    set(name: string, value: string): void;
    /**
     * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
     */
    append(name: string, value: string): void;
    /**
     * Deletes a header from the `Headers` object.
     */
    delete(name: string): void;
    /**
     * Returns the object of all the normalized headers.
     */
    all(): Record<string, string>;
    /**
     * Returns the object of all the raw headers.
     */
    raw(): Record<string, string>;
    /**
     * Returns a boolean stating whether a `Headers` object contains a certain header.
     */
    has(name: string): boolean;
    /**
     * Traverses the `Headers` object,
     * calling the given callback for each header.
     */
    forEach<ThisArg = this>(callback: (this: ThisArg, value: string, name: string, parent: this) => void, thisArg?: ThisArg): void;
}
