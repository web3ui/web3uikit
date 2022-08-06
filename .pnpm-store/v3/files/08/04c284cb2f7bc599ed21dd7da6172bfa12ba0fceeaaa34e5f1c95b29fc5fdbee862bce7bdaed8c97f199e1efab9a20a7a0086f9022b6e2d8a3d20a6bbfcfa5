import type { Importer } from '../parse';
import type { PropTypeDescriptor } from '../Documentation';
import type { NodePath } from 'ast-types/lib/node-path';
/**
 * Tries to identify the prop type by inspecting the path for known
 * prop type names. This method doesn't check whether the found type is actually
 * from React.PropTypes. It simply assumes that a match has the same meaning
 * as the React.PropTypes one.
 *
 * If there is no match, "custom" is returned.
 */
export default function getPropType(path: NodePath, importer: Importer): PropTypeDescriptor;
