import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
/**
 * Splits a MemberExpression or CallExpression into parts.
 * E.g. foo.bar.baz becomes ['foo', 'bar', 'baz']
 */
declare function toArray(path: NodePath, importer: Importer): string[];
/**
 * Creates a string representation of a member expression.
 */
declare function toString(path: NodePath, importer: Importer): string;
export { toString as String, toArray as Array };
