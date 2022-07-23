"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.importers = exports.resolver = exports.handlers = exports.defaultHandlers = exports.parse = void 0;
const allHandlers = __importStar(require("./handlers"));
exports.handlers = allHandlers;
const parse_1 = __importDefault(require("./parse"));
const AllResolver = __importStar(require("./resolver"));
exports.resolver = AllResolver;
const AllImporter = __importStar(require("./importer"));
exports.importers = AllImporter;
const utils = __importStar(require("./utils"));
exports.utils = utils;
const defaultResolver = AllResolver.findExportedComponentDefinition;
const defaultHandlers = [
    allHandlers.propTypeHandler,
    allHandlers.contextTypeHandler,
    allHandlers.childContextTypeHandler,
    allHandlers.propTypeCompositionHandler,
    allHandlers.propDocBlockHandler,
    allHandlers.flowTypeHandler,
    allHandlers.defaultPropsHandler,
    allHandlers.componentDocblockHandler,
    allHandlers.displayNameHandler,
    allHandlers.componentMethodsHandler,
    allHandlers.componentMethodsJsDocHandler,
];
exports.defaultHandlers = defaultHandlers;
const defaultImporter = AllImporter.ignoreImports;
/**
 * See `parse.js` for more information about the arguments. This function
 * simply sets default values for convenience.
 *
 * The default resolver looks for *exported* `React.createClass(def)` calls
 * and expected `def` to resolve to an object expression.
 *
 * The default `handlers` look for `propTypes` and `getDefaultProps` in the
 * provided object expression, and extract prop type information, prop
 * documentation (from docblocks), default prop values and component
 * documentation (from a docblock).
 */
function defaultParse(src, resolver, handlers, 
// Used for backwards compatibility of this method
options = {}) {
    if (!resolver) {
        resolver = defaultResolver;
    }
    if (!handlers) {
        handlers = defaultHandlers;
    }
    const { importer = defaultImporter, ...opts } = options;
    return (0, parse_1.default)(String(src), resolver, handlers, importer, opts);
}
exports.parse = defaultParse;
