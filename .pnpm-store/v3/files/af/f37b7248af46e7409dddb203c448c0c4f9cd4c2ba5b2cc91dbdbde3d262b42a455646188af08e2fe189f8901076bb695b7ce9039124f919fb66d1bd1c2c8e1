import type { NodePath } from 'ast-types/lib/node-path';
import type { Importer } from '../parse';
export declare function resolveObjectToNameArray(object: NodePath, importer: Importer, raw?: boolean): string[] | null;
/**
 * Returns an ArrayExpression which contains all the keys resolved from an object
 *
 * Ignores setters in objects
 *
 * Returns null in case of
 *  unresolvable spreads
 *  computed identifier keys
 */
export default function resolveObjectKeysToArray(path: NodePath, importer: Importer): string[] | null;
