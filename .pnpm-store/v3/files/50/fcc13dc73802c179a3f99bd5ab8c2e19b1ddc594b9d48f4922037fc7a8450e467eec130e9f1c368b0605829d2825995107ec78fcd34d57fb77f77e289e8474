import type { FileNodeWithOptions, Parser } from '../babelParser';
import type { Importer } from '../parse';
import type { NodePath } from 'ast-types/lib/node-path';
/**
 * Given an AST, this function tries to find the exported component definition.
 *
 * The component definition is either the ObjectExpression passed to
 * `React.createClass` or a `class` definition extending `React.Component` or
 * having a `render()` method.
 *
 * If a definition is part of the following statements, it is considered to be
 * exported:
 *
 * modules.exports = Definition;
 * exports.foo = Definition;
 * export default Definition;
 * export var Definition = ...;
 */
export default function findExportedComponentDefinition(ast: FileNodeWithOptions, _parser: Parser, importer: Importer): NodePath | null;
