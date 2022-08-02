"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
const componentMethods = [
    'componentDidMount',
    'componentDidReceiveProps',
    'componentDidUpdate',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'componentWillUnmount',
    'componentWillUpdate',
    'UNSAFE_componentWillUpdate',
    'getChildContext',
    'getDefaultProps',
    'getInitialState',
    'render',
    'shouldComponentUpdate',
    'getDerivedStateFromProps',
    'getDerivedStateFromError',
    'getSnapshotBeforeUpdate',
    'componentDidCatch',
];
/**
 * Returns if the method path is a Component method.
 */
function default_1(methodPath, importer) {
    if (!ast_types_1.namedTypes.MethodDefinition.check(methodPath.node) &&
        !ast_types_1.namedTypes.Property.check(methodPath.node)) {
        return false;
    }
    const name = (0, getPropertyName_1.default)(methodPath, importer);
    return !!name && componentMethods.indexOf(name) !== -1;
}
exports.default = default_1;
