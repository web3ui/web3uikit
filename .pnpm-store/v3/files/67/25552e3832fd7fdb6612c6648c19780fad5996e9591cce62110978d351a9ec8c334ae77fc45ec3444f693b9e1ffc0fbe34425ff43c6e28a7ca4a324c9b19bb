import { ASTNode } from 'ast-types';
declare type Pattern = {
    [key: string]: number | string | Pattern;
};
/**
 * This function takes an AST node and matches it against "pattern". Pattern
 * is simply a (nested) object literal and it is traversed to see whether node
 * contains those (nested) properties with the provided values.
 */
export default function match(node: ASTNode, pattern: Pattern): boolean;
export {};
