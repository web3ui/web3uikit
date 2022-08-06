import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
export declare function isSupportedDefinitionType({ node }: NodePath): boolean;
/**
 * This is a helper method for handlers to make it easier to work either with
 * an ObjectExpression from `React.createClass` class or with a class
 * definition.
 *
 * Given a path and a name, this function will either return the path of the
 * property value if the path is an ObjectExpression, or the value of the
 * ClassProperty/MethodDefinition if it is a class definition (declaration or
 * expression).
 *
 * It also normalizes the names so that e.g. `defaultProps` and
 * `getDefaultProps` can be used interchangeably.
 */
export default function getMemberValuePath(componentDefinition: NodePath, memberName: string, importer: Importer): NodePath | null;
