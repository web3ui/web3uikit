/// <reference types="node" />
import * as allHandlers from './handlers';
import * as AllResolver from './resolver';
import * as AllImporter from './importer';
import * as utils from './utils';
import type { Options } from './babelParser';
import type { DocumentationObject } from './Documentation';
import type { Handler, Resolver, Importer } from './parse';
declare const defaultHandlers: Handler[];
/**
 * See `parse.js` for more information about the arguments. This function
 * simply sets default values for convenience.
 *
 * The default resolver looks for *exported* `React.createClass(def)` calls
 * and expected `def` to resolve to an object expression.
 *
 * The default `handlers` look for `propTypes` and `getDefaultProps` in the
 * provided object expression, and extract prop type information, prop
 * documentation (from docblocks), default prop values and component
 * documentation (from a docblock).
 */
declare function defaultParse(src: string | Buffer, resolver?: Resolver | undefined | null, handlers?: Handler[] | undefined | null, options?: Options & {
    importer?: Importer;
}): DocumentationObject[] | DocumentationObject;
export { defaultParse as parse, defaultHandlers, allHandlers as handlers, AllResolver as resolver, AllImporter as importers, utils, };
