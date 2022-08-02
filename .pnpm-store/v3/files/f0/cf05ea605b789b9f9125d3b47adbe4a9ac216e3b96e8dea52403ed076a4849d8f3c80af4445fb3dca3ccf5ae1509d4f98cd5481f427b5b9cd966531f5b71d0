"use strict";
/*eslint no-loop-func: 0, no-use-before-define: 0*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = exports.String = void 0;
const ast_types_1 = require("ast-types");
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
/**
 * Splits a MemberExpression or CallExpression into parts.
 * E.g. foo.bar.baz becomes ['foo', 'bar', 'baz']
 */
function toArray(path, importer) {
    const parts = [path];
    let result = [];
    while (parts.length > 0) {
        path = parts.shift();
        const node = path.node;
        if (ast_types_1.namedTypes.CallExpression.check(node)) {
            parts.push(path.get('callee'));
            continue;
        }
        else if (ast_types_1.namedTypes.MemberExpression.check(node)) {
            parts.push(path.get('object'));
            if (node.computed) {
                const resolvedPath = (0, resolveToValue_1.default)(path.get('property'), importer);
                if (resolvedPath !== undefined) {
                    result = result.concat(toArray(resolvedPath, importer));
                }
                else {
                    result.push('<computed>');
                }
            }
            else {
                // @ts-ignore
                result.push(node.property.name);
            }
            continue;
        }
        else if (ast_types_1.namedTypes.Identifier.check(node)) {
            result.push(node.name);
            continue;
        }
        else if (ast_types_1.namedTypes.Literal.check(node)) {
            // @ts-ignore
            result.push(node.raw);
            continue;
        }
        else if (ast_types_1.namedTypes.FunctionExpression.check(node)) {
            result.push('<function>');
            continue;
        }
        else if (ast_types_1.namedTypes.ThisExpression.check(node)) {
            result.push('this');
            continue;
        }
        else if (ast_types_1.namedTypes.ObjectExpression.check(node)) {
            const properties = path.get('properties').map(function (property) {
                if (ast_types_1.namedTypes.SpreadElement.check(property.node)) {
                    return `...${toString(property.get('argument'), importer)}`;
                }
                else {
                    return (toString(property.get('key'), importer) +
                        ': ' +
                        toString(property.get('value'), importer));
                }
            });
            result.push('{' + properties.join(', ') + '}');
            continue;
        }
        else if (ast_types_1.namedTypes.ArrayExpression.check(node)) {
            result.push('[' +
                path
                    .get('elements')
                    .map(function (el) {
                    return toString(el, importer);
                })
                    .join(', ') +
                ']');
            continue;
        }
    }
    return result.reverse();
}
exports.Array = toArray;
/**
 * Creates a string representation of a member expression.
 */
function toString(path, importer) {
    return toArray(path, importer).join('.');
}
exports.String = toString;
