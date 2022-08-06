import * as ts from 'typescript';
import { DeclarationReference } from '@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference';
import { PackageJsonLookup } from '@rushstack/node-core-library';
export declare class DeclarationReferenceGenerator {
    static readonly unknownReference: string;
    private _packageJsonLookup;
    private _workingPackageName;
    private _program;
    private _typeChecker;
    private _bundledPackageNames;
    constructor(packageJsonLookup: PackageJsonLookup, workingPackageName: string, program: ts.Program, typeChecker: ts.TypeChecker, bundledPackageNames: ReadonlySet<string>);
    /**
     * Gets the UID for a TypeScript Identifier that references a type.
     */
    getDeclarationReferenceForIdentifier(node: ts.Identifier): DeclarationReference | undefined;
    /**
     * Gets the DeclarationReference for a TypeScript Symbol for a given meaning.
     */
    getDeclarationReferenceForSymbol(symbol: ts.Symbol, meaning: ts.SymbolFlags): DeclarationReference | undefined;
    private static _isInExpressionContext;
    private static _isExternalModuleSymbol;
    private static _isSameSymbol;
    private static _getNavigationToSymbol;
    private static _getMeaningOfSymbol;
    private _symbolToDeclarationReference;
    private _getPackageName;
    private _sourceFileToModuleSource;
}
//# sourceMappingURL=DeclarationReferenceGenerator.d.ts.map