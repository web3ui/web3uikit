import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
interface ObjectPropMap {
    properties: string[];
    values: Record<string, unknown>;
}
export declare function resolveObjectToPropMap(object: NodePath, importer: Importer, raw?: boolean): ObjectPropMap | null;
/**
 * Returns an ArrayExpression which contains all the values resolved from an object
 *
 * Ignores setters in objects
 *
 * Returns null in case of
 *  unresolvable spreads
 *  computed identifier values
 */
export default function resolveObjectValuesToArray(path: NodePath, importer: Importer): string[] | null;
export {};
