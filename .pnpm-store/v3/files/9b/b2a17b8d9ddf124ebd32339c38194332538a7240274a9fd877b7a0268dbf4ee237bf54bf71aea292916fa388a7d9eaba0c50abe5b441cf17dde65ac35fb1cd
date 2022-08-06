"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isExportsOrModuleAssignment_1 = __importDefault(require("../utils/isExportsOrModuleAssignment"));
const isReactComponentClass_1 = __importDefault(require("../utils/isReactComponentClass"));
const isReactCreateClassCall_1 = __importDefault(require("../utils/isReactCreateClassCall"));
const isReactForwardRefCall_1 = __importDefault(require("../utils/isReactForwardRefCall"));
const isStatelessComponent_1 = __importDefault(require("../utils/isStatelessComponent"));
const normalizeClassDefinition_1 = __importDefault(require("../utils/normalizeClassDefinition"));
const resolveExportDeclaration_1 = __importDefault(require("../utils/resolveExportDeclaration"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const resolveHOC_1 = __importDefault(require("../utils/resolveHOC"));
function ignore() {
    return false;
}
function isComponentDefinition(path, importer) {
    return ((0, isReactCreateClassCall_1.default)(path, importer) ||
        (0, isReactComponentClass_1.default)(path, importer) ||
        (0, isStatelessComponent_1.default)(path, importer) ||
        (0, isReactForwardRefCall_1.default)(path, importer));
}
function resolveDefinition(definition, importer) {
    if ((0, isReactCreateClassCall_1.default)(definition, importer)) {
        // return argument
        const resolvedPath = (0, resolveToValue_1.default)(definition.get('arguments', 0), importer);
        if (ast_types_1.namedTypes.ObjectExpression.check(resolvedPath.node)) {
            return resolvedPath;
        }
    }
    else if ((0, isReactComponentClass_1.default)(definition, importer)) {
        (0, normalizeClassDefinition_1.default)(definition);
        return definition;
    }
    else if ((0, isStatelessComponent_1.default)(definition, importer) ||
        (0, isReactForwardRefCall_1.default)(definition, importer)) {
        return definition;
    }
    return null;
}
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
function findExportedComponentDefinitions(ast, _parser, importer) {
    const components = [];
    function exportDeclaration(path) {
        const definitions = (0, resolveExportDeclaration_1.default)(path, importer)
            .reduce((acc, definition) => {
            if (isComponentDefinition(definition, importer)) {
                acc.push(definition);
            }
            else {
                const resolved = (0, resolveToValue_1.default)((0, resolveHOC_1.default)(definition, importer), importer);
                if (isComponentDefinition(resolved, importer)) {
                    acc.push(resolved);
                }
            }
            return acc;
        }, [])
            .map(definition => resolveDefinition(definition, importer));
        if (definitions.length === 0) {
            return false;
        }
        definitions.forEach(definition => {
            if (definition && components.indexOf(definition) === -1) {
                components.push(definition);
            }
        });
        return false;
    }
    (0, ast_types_1.visit)(ast, {
        visitFunctionDeclaration: ignore,
        visitFunctionExpression: ignore,
        visitClassDeclaration: ignore,
        visitClassExpression: ignore,
        visitIfStatement: ignore,
        visitWithStatement: ignore,
        visitSwitchStatement: ignore,
        // @ts-ignore TODO test implications, write test and then fix
        visitCatchCause: ignore,
        visitWhileStatement: ignore,
        visitDoWhileStatement: ignore,
        visitForStatement: ignore,
        visitForInStatement: ignore,
        visitExportDeclaration: exportDeclaration,
        visitExportNamedDeclaration: exportDeclaration,
        visitExportDefaultDeclaration: exportDeclaration,
        visitAssignmentExpression: function (path) {
            // Ignore anything that is not `exports.X = ...;` or
            // `module.exports = ...;`
            if (!(0, isExportsOrModuleAssignment_1.default)(path, importer)) {
                return false;
            }
            // Resolve the value of the right hand side. It should resolve to a call
            // expression, something like React.createClass
            path = (0, resolveToValue_1.default)(path.get('right'), importer);
            if (!isComponentDefinition(path, importer)) {
                path = (0, resolveToValue_1.default)((0, resolveHOC_1.default)(path, importer), importer);
                if (!isComponentDefinition(path, importer)) {
                    return false;
                }
            }
            const definition = resolveDefinition(path, importer);
            if (definition && components.indexOf(definition) === -1) {
                components.push(definition);
            }
            return false;
        },
    });
    return components;
}
exports.default = findExportedComponentDefinitions;
