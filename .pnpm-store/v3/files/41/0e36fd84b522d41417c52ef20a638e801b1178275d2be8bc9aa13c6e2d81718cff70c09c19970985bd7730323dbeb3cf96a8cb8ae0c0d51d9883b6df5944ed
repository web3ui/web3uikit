import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
export declare const COMPUTED_PREFIX = "@computed#";
/**
 * In an ObjectExpression, the name of a property can either be an identifier
 * or a literal (or dynamic, but we don't support those). This function simply
 * returns the value of the literal or name of the identifier.
 */
export default function getPropertyName(propertyPath: NodePath, importer: Importer): string | null;
