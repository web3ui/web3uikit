import type { NodePath } from 'ast-types/lib/node-path';
import Documentation from './Documentation';
import type { DocumentationObject } from './Documentation';
import type { Options, Parser, FileNodeWithOptions } from './babelParser';
declare const ERROR_MISSING_DEFINITION = "No suitable component definition found.";
export declare type Importer = (path: NodePath, name: string) => NodePath | null | undefined;
export declare type Handler = (documentation: Documentation, path: NodePath, importer: Importer) => void;
export declare type Resolver = (node: FileNodeWithOptions, parser: Parser, importer: Importer) => NodePath | NodePath[] | null | undefined;
/**
 * Takes JavaScript source code and returns an object with the information
 * extract from it.
 *
 * `resolver` is a strategy to find the AST node(s) of the component
 * definition(s) inside `src`.
 * It is a function that gets passed the program AST node of
 * the source as first argument, and a reference to the parser as second argument.
 *
 * This allows you define your own strategy for finding component definitions.
 *
 * `handlers` is an array of functions which are passed a reference to the
 * component definitions (extracted by `resolver`) so that they can extract
 * information from it. They get also passed a reference to a `Documentation`
 * object to attach the information to. A reference to the parser is parsed as the
 * last argument.
 *
 * If `resolver` returns an array of component definitions, `parse` will return
 * an array of documentation objects. If `resolver` returns a single node
 * instead, `parse` will return a documentation object.
 */
export default function parse(src: string, resolver: Resolver, handlers: Handler[], importer: Importer, options?: Options): DocumentationObject[] | DocumentationObject;
export { ERROR_MISSING_DEFINITION };
