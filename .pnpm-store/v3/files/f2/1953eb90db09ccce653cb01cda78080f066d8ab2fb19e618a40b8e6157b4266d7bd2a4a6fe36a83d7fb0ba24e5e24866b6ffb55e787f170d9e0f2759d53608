import { ASTNode } from 'ast-types';
import type { Parser } from '../babelParser';
import type { Importer } from '../parse';
import { NodePath } from 'ast-types/lib/node-path';
/**
 * Given an AST, this function tries to find all object expressions that are
 * passed to `React.createClass` calls, by resolving all references properly.
 */
export default function findAllComponentDefinitions(ast: ASTNode, _parser: Parser, importer: Importer): NodePath[];
