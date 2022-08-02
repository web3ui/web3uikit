import { Crawler, RecrawlOptions } from './types';
/** Create a crawl function, and crawl the given root immediately */
export declare const crawl: (root: string, opts?: RecrawlOptions) => string[];
/** Create a crawl function */
export declare function recrawl<T extends RecrawlOptions>(opts?: T): Crawler<T>;
/** Provide the `name` argument to avoid unnecessary `path.basename` calls */
export declare type GlobMatcher = (file: string, name?: string) => boolean;
/**
 * Compile a single Recrawl glob string into its "RegExp pattern" equivalent.
 *
 * Note: This is only useful for globs with "/" or "**" in them.
 */
export declare function compileGlob(glob: string, root?: string): string;
/**
 * Create a function that tests against an array of Recrawl glob strings by
 * compiling them into RegExp objects.
 */
export declare function createMatcher(globs: (string | RegExp)[] | undefined, root?: string): GlobMatcher | null;
