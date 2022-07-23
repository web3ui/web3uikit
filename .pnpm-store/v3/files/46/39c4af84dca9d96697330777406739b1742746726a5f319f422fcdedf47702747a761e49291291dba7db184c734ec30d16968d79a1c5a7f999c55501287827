import { ASTNode } from 'ast-types';
import type { Parser } from '../babelParser';
import type { Importer } from '../parse';
import { NodePath } from 'ast-types/lib/node-path';
/**
 * Given an AST, this function tries to find the exported component definitions.
 *
 * The component definitions are either the ObjectExpression passed to
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
export default function findExportedComponentDefinitions(ast: ASTNode, _parser: Parser, importer: Importer): NodePath[];
