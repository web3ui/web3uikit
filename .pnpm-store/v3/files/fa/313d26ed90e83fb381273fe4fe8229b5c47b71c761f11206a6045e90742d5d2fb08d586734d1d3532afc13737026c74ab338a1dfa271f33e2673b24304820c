import { TypeParameters } from '../utils/getTypeParameters';
import type { Importer } from '../parse';
import type { TypeDescriptor, TSFunctionSignatureType } from '../Documentation';
import { NodePath } from 'ast-types/lib/node-path';
/**
 * Tries to identify the typescript type by inspecting the path for known
 * typescript type names. This method doesn't check whether the found type is actually
 * existing. It simply assumes that a match is always valid.
 *
 * If there is no match, "unknown" is returned.
 */
export default function getTSType(path: NodePath, typeParamMap: TypeParameters | null, importer: Importer): TypeDescriptor<TSFunctionSignatureType>;
