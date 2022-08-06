import type { NodePath } from 'ast-types/lib/node-path';
interface MemberDescriptor {
    path: NodePath;
    computed: boolean;
    argumentsPath: NodePath | null;
}
/**
 * Given a "nested" Member/CallExpression, e.g.
 *
 * foo.bar()[baz][42]
 *
 * this returns a list of "members". In this example it would be something like
 * [
 *   {path: NodePath<bar>, arguments: NodePath<empty>, computed: false},
 *   {path: NodePath<baz>, arguments: null, computed: true},
 *   {path: NodePath<42>, arguments: null, computed: false}
 * ]
 */
export default function getMembers(path: NodePath, includeRoot?: boolean): MemberDescriptor[];
export {};
