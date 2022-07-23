import type Documentation from '../Documentation';
import { TypeParameters } from './getTypeParameters';
import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
/**
 * Given an React component (stateless or class) tries to find the
 * flow type for the props. If not found or not one of the supported
 * component types returns null.
 */
declare const _default: (path: NodePath, importer: Importer) => NodePath | null;
export default _default;
export declare function applyToFlowTypeProperties(documentation: Documentation, path: NodePath, callback: (propertyPath: NodePath, params: TypeParameters | null) => void, typeParams: TypeParameters | null, importer: Importer): void;
