"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationReferenceGenerator = void 0;
/* eslint-disable no-bitwise */
const ts = __importStar(require("typescript"));
const DeclarationReference_1 = require("@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference");
const node_core_library_1 = require("@rushstack/node-core-library");
const TypeScriptHelpers_1 = require("../analyzer/TypeScriptHelpers");
const TypeScriptInternals_1 = require("../analyzer/TypeScriptInternals");
class DeclarationReferenceGenerator {
    constructor(packageJsonLookup, workingPackageName, program, typeChecker, bundledPackageNames) {
        this._packageJsonLookup = packageJsonLookup;
        this._workingPackageName = workingPackageName;
        this._program = program;
        this._typeChecker = typeChecker;
        this._bundledPackageNames = bundledPackageNames;
    }
    /**
     * Gets the UID for a TypeScript Identifier that references a type.
     */
    getDeclarationReferenceForIdentifier(node) {
        const symbol = this._typeChecker.getSymbolAtLocation(node);
        if (symbol !== undefined) {
            const isExpression = DeclarationReferenceGenerator._isInExpressionContext(node);
            return (this.getDeclarationReferenceForSymbol(symbol, isExpression ? ts.SymbolFlags.Value : ts.SymbolFlags.Type) ||
                this.getDeclarationReferenceForSymbol(symbol, isExpression ? ts.SymbolFlags.Type : ts.SymbolFlags.Value) ||
                this.getDeclarationReferenceForSymbol(symbol, ts.SymbolFlags.Namespace));
        }
    }
    /**
     * Gets the DeclarationReference for a TypeScript Symbol for a given meaning.
     */
    getDeclarationReferenceForSymbol(symbol, meaning) {
        return this._symbolToDeclarationReference(symbol, meaning, /*includeModuleSymbols*/ false);
    }
    static _isInExpressionContext(node) {
        switch (node.parent.kind) {
            case ts.SyntaxKind.TypeQuery:
                return true;
            case ts.SyntaxKind.QualifiedName:
                return DeclarationReferenceGenerator._isInExpressionContext(node.parent);
            default:
                return false;
        }
    }
    static _isExternalModuleSymbol(symbol) {
        return (!!(symbol.flags & ts.SymbolFlags.ValueModule) &&
            symbol.valueDeclaration !== undefined &&
            ts.isSourceFile(symbol.valueDeclaration));
    }
    static _isSameSymbol(left, right) {
        return (left === right ||
            !!(left &&
                left.valueDeclaration &&
                right.valueDeclaration &&
                left.valueDeclaration === right.valueDeclaration));
    }
    static _getNavigationToSymbol(symbol) {
        const parent = TypeScriptInternals_1.TypeScriptInternals.getSymbolParent(symbol);
        // First, try to determine navigation to symbol via its parent.
        if (parent) {
            if (parent.exports &&
                DeclarationReferenceGenerator._isSameSymbol(parent.exports.get(symbol.escapedName), symbol)) {
                return "." /* Exports */;
            }
            if (parent.members &&
                DeclarationReferenceGenerator._isSameSymbol(parent.members.get(symbol.escapedName), symbol)) {
                return "#" /* Members */;
            }
            if (parent.globalExports &&
                DeclarationReferenceGenerator._isSameSymbol(parent.globalExports.get(symbol.escapedName), symbol)) {
                return 'global';
            }
        }
        // Next, try determining navigation to symbol by its node
        if (symbol.valueDeclaration) {
            const declaration = ts.isBindingElement(symbol.valueDeclaration)
                ? ts.walkUpBindingElementsAndPatterns(symbol.valueDeclaration)
                : symbol.valueDeclaration;
            if (ts.isClassElement(declaration) && ts.isClassLike(declaration.parent)) {
                // class members are an "export" if they have the static modifier.
                return ts.getCombinedModifierFlags(declaration) & ts.ModifierFlags.Static
                    ? "." /* Exports */
                    : "#" /* Members */;
            }
            if (ts.isTypeElement(declaration) || ts.isObjectLiteralElement(declaration)) {
                // type and object literal element members are just members
                return "#" /* Members */;
            }
            if (ts.isEnumMember(declaration)) {
                // enum members are exports
                return "." /* Exports */;
            }
            if (ts.isExportSpecifier(declaration) ||
                ts.isExportAssignment(declaration) ||
                ts.isExportSpecifier(declaration) ||
                ts.isExportDeclaration(declaration) ||
                ts.isNamedExports(declaration)) {
                return "." /* Exports */;
            }
            // declarations are exports if they have an `export` modifier.
            if (ts.getCombinedModifierFlags(declaration) & ts.ModifierFlags.Export) {
                return "." /* Exports */;
            }
            if (ts.isSourceFile(declaration.parent) && !ts.isExternalModule(declaration.parent)) {
                // declarations in a source file are global if the source file is not a module.
                return 'global';
            }
        }
        // all other declarations are locals
        return "~" /* Locals */;
    }
    static _getMeaningOfSymbol(symbol, meaning) {
        if (symbol.flags & meaning & ts.SymbolFlags.Class) {
            return "class" /* Class */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Enum) {
            return "enum" /* Enum */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Interface) {
            return "interface" /* Interface */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.TypeAlias) {
            return "type" /* TypeAlias */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Function) {
            return "function" /* Function */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Variable) {
            return "var" /* Variable */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Module) {
            return "namespace" /* Namespace */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.ClassMember) {
            return "member" /* Member */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Constructor) {
            return "constructor" /* Constructor */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.EnumMember) {
            return "member" /* Member */;
        }
        if (symbol.flags & meaning & ts.SymbolFlags.Signature) {
            if (symbol.escapedName === ts.InternalSymbolName.Call) {
                return "call" /* CallSignature */;
            }
            if (symbol.escapedName === ts.InternalSymbolName.New) {
                return "new" /* ConstructSignature */;
            }
            if (symbol.escapedName === ts.InternalSymbolName.Index) {
                return "index" /* IndexSignature */;
            }
        }
        if (symbol.flags & meaning & ts.SymbolFlags.TypeParameter) {
            // This should have already been handled in `getDeclarationReferenceOfSymbol`.
            throw new node_core_library_1.InternalError('Not supported.');
        }
        return undefined;
    }
    _symbolToDeclarationReference(symbol, meaning, includeModuleSymbols) {
        let followedSymbol = symbol;
        if (followedSymbol.flags & ts.SymbolFlags.ExportValue) {
            followedSymbol = this._typeChecker.getExportSymbolOfSymbol(followedSymbol);
        }
        if (followedSymbol.flags & ts.SymbolFlags.Alias) {
            followedSymbol = this._typeChecker.getAliasedSymbol(followedSymbol);
        }
        if (DeclarationReferenceGenerator._isExternalModuleSymbol(followedSymbol)) {
            if (!includeModuleSymbols) {
                return undefined;
            }
            const sourceFile = followedSymbol.declarations &&
                followedSymbol.declarations[0] &&
                followedSymbol.declarations[0].getSourceFile();
            return new DeclarationReference_1.DeclarationReference(this._sourceFileToModuleSource(sourceFile));
        }
        // Do not generate a declaration reference for a type parameter.
        if (followedSymbol.flags & ts.SymbolFlags.TypeParameter) {
            return undefined;
        }
        const parent = TypeScriptInternals_1.TypeScriptInternals.getSymbolParent(followedSymbol);
        let parentRef;
        if (parent) {
            parentRef = this._symbolToDeclarationReference(parent, ts.SymbolFlags.Namespace, 
            /*includeModuleSymbols*/ true);
        }
        else {
            // this may be a local symbol in a module...
            const sourceFile = followedSymbol.declarations &&
                followedSymbol.declarations[0] &&
                followedSymbol.declarations[0].getSourceFile();
            if (sourceFile && ts.isExternalModule(sourceFile)) {
                parentRef = new DeclarationReference_1.DeclarationReference(this._sourceFileToModuleSource(sourceFile));
            }
            else {
                parentRef = new DeclarationReference_1.DeclarationReference(DeclarationReference_1.GlobalSource.instance);
            }
        }
        if (parentRef === undefined) {
            return undefined;
        }
        let localName = followedSymbol.name;
        if (followedSymbol.escapedName === ts.InternalSymbolName.Constructor) {
            localName = 'constructor';
        }
        else {
            const wellKnownName = TypeScriptHelpers_1.TypeScriptHelpers.tryDecodeWellKnownSymbolName(followedSymbol.escapedName);
            if (wellKnownName) {
                // TypeScript binds well-known ECMAScript symbols like 'Symbol.iterator' as '__@iterator'.
                // This converts a string like '__@iterator' into the property name '[Symbol.iterator]'.
                localName = wellKnownName;
            }
            else if (TypeScriptHelpers_1.TypeScriptHelpers.isUniqueSymbolName(followedSymbol.escapedName)) {
                for (const decl of followedSymbol.declarations || []) {
                    const declName = ts.getNameOfDeclaration(decl);
                    if (declName && ts.isComputedPropertyName(declName)) {
                        const lateName = TypeScriptHelpers_1.TypeScriptHelpers.tryGetLateBoundName(declName);
                        if (lateName !== undefined) {
                            localName = lateName;
                            break;
                        }
                    }
                }
            }
        }
        let navigation = DeclarationReferenceGenerator._getNavigationToSymbol(followedSymbol);
        if (navigation === 'global') {
            if (parentRef.source !== DeclarationReference_1.GlobalSource.instance) {
                parentRef = new DeclarationReference_1.DeclarationReference(DeclarationReference_1.GlobalSource.instance);
            }
            navigation = "." /* Exports */;
        }
        return parentRef
            .addNavigationStep(navigation, localName)
            .withMeaning(DeclarationReferenceGenerator._getMeaningOfSymbol(followedSymbol, meaning));
    }
    _getPackageName(sourceFile) {
        if (this._program.isSourceFileFromExternalLibrary(sourceFile)) {
            const packageJson = this._packageJsonLookup.tryLoadNodePackageJsonFor(sourceFile.fileName);
            if (packageJson && packageJson.name) {
                return packageJson.name;
            }
            return DeclarationReferenceGenerator.unknownReference;
        }
        return this._workingPackageName;
    }
    _sourceFileToModuleSource(sourceFile) {
        if (sourceFile && ts.isExternalModule(sourceFile)) {
            const packageName = this._getPackageName(sourceFile);
            if (this._bundledPackageNames.has(packageName)) {
                // The api-extractor.json config file has a "bundledPackages" setting, which causes imports from
                // certain NPM packages to be treated as part of the working project.  In this case, we need to
                // substitute the working package name.
                return new DeclarationReference_1.ModuleSource(this._workingPackageName);
            }
            else {
                return new DeclarationReference_1.ModuleSource(packageName);
            }
        }
        return DeclarationReference_1.GlobalSource.instance;
    }
}
exports.DeclarationReferenceGenerator = DeclarationReferenceGenerator;
DeclarationReferenceGenerator.unknownReference = '?';
//# sourceMappingURL=DeclarationReferenceGenerator.js.map