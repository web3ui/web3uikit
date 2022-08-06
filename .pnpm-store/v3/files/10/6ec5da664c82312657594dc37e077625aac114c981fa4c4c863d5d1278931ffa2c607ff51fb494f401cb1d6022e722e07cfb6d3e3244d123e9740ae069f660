"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSupportedDefinitionType = void 0;
const ast_types_1 = require("ast-types");
const getClassMemberValuePath_1 = __importDefault(require("./getClassMemberValuePath"));
const getMemberExpressionValuePath_1 = __importDefault(require("./getMemberExpressionValuePath"));
const getPropertyValuePath_1 = __importDefault(require("./getPropertyValuePath"));
const resolveFunctionDefinitionToReturnValue_1 = __importDefault(require("../utils/resolveFunctionDefinitionToReturnValue"));
const SYNONYMS = {
    getDefaultProps: 'defaultProps',
    defaultProps: 'getDefaultProps',
};
const postprocessPropTypes = (path, importer) => ast_types_1.namedTypes.Function.check(path.node)
    ? (0, resolveFunctionDefinitionToReturnValue_1.default)(path, importer)
    : path;
const POSTPROCESS_MEMBERS = new Map([['propTypes', postprocessPropTypes]]);
const LOOKUP_METHOD = new Map([
    // @ts-ignore
    [ast_types_1.namedTypes.ArrowFunctionExpression.name, getMemberExpressionValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.CallExpression.name, getMemberExpressionValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.FunctionExpression.name, getMemberExpressionValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.FunctionDeclaration.name, getMemberExpressionValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.VariableDeclaration.name, getMemberExpressionValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.ObjectExpression.name, getPropertyValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.ClassDeclaration.name, getClassMemberValuePath_1.default],
    // @ts-ignore
    [ast_types_1.namedTypes.ClassExpression.name, getClassMemberValuePath_1.default],
]);
function isSupportedDefinitionType({ node }) {
    return (ast_types_1.namedTypes.ObjectExpression.check(node) ||
        ast_types_1.namedTypes.ClassDeclaration.check(node) ||
        ast_types_1.namedTypes.ClassExpression.check(node) ||
        /**
         * Adds support for libraries such as
         * [styled components]{@link https://github.com/styled-components} that use
         * TaggedTemplateExpression's to generate components.
         *
         * While react-docgen's built-in resolvers do not support resolving
         * TaggedTemplateExpression definitions, third-party resolvers (such as
         * https://github.com/Jmeyering/react-docgen-annotation-resolver) could be
         * used to add these definitions.
         */
        ast_types_1.namedTypes.TaggedTemplateExpression.check(node) ||
        // potential stateless function component
        ast_types_1.namedTypes.VariableDeclaration.check(node) ||
        ast_types_1.namedTypes.ArrowFunctionExpression.check(node) ||
        ast_types_1.namedTypes.FunctionDeclaration.check(node) ||
        ast_types_1.namedTypes.FunctionExpression.check(node) ||
        /**
         * Adds support for libraries such as
         * [system-components]{@link https://jxnblk.com/styled-system/system-components} that use
         * CallExpressions to generate components.
         *
         * While react-docgen's built-in resolvers do not support resolving
         * CallExpressions definitions, third-party resolvers (such as
         * https://github.com/Jmeyering/react-docgen-annotation-resolver) could be
         * used to add these definitions.
         */
        ast_types_1.namedTypes.CallExpression.check(node));
}
exports.isSupportedDefinitionType = isSupportedDefinitionType;
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
function getMemberValuePath(componentDefinition, memberName, importer) {
    if (!isSupportedDefinitionType(componentDefinition)) {
        throw new TypeError('Got unsupported definition type. Definition must be one of ' +
            'ObjectExpression, ClassDeclaration, ClassExpression,' +
            'VariableDeclaration, ArrowFunctionExpression, FunctionExpression, ' +
            'TaggedTemplateExpression, FunctionDeclaration or CallExpression. Got "' +
            componentDefinition.node.type +
            '" instead.');
    }
    const lookupMethod = LOOKUP_METHOD.get(componentDefinition.node.type) ||
        getMemberExpressionValuePath_1.default;
    let result = lookupMethod(componentDefinition, memberName, importer);
    if (!result && SYNONYMS[memberName]) {
        result = lookupMethod(componentDefinition, SYNONYMS[memberName], importer);
    }
    const postprocessMethod = POSTPROCESS_MEMBERS.get(memberName);
    if (result && postprocessMethod) {
        result = postprocessMethod(result, importer);
    }
    return result;
}
exports.default = getMemberValuePath;
