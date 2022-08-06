import { TypeParameters } from '../utils/getTypeParameters';
import type { Importer } from '../parse';
import type { TypeDescriptor } from '../Documentation';
import type { NodePath } from 'ast-types/lib/node-path';
/**
 * Tries to identify the flow type by inspecting the path for known
 * flow type names. This method doesn't check whether the found type is actually
 * existing. It simply assumes that a match is always valid.
 *
 * If there is no match, "unknown" is returned.
 */
export default function getFlowType(path: NodePath, typeParams: TypeParameters | null, importer: Importer): TypeDescriptor;
