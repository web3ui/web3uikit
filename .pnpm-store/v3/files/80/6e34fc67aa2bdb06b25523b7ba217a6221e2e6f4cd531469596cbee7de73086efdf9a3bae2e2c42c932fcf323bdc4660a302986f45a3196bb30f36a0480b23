import type { NodePath } from 'ast-types/lib/node-path';
import type { Importer } from '../parse';
/**
 * If the path is a call expression, it recursively resolves to the
 * rightmost argument, stopping if it finds a React.createClass call expression
 *
 * Else the path itself is returned.
 */
export default function resolveHOC(path: NodePath, importer: Importer): NodePath;
