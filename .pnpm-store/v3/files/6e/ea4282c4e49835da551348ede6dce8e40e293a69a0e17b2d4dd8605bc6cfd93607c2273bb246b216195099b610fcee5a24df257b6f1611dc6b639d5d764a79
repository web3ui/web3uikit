/**
 * Use this library to read and write *.api.json files as defined by the
 * {@link https://api-extractor.com/ | API Extractor}  tool.  These files are used to generate a documentation
 * website for your TypeScript package.  The files store the API signatures and doc comments that were extracted
 * from your package.
 *
 * @packageDocumentation
 */

import { DeclarationReference } from '@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference';
import { DocDeclarationReference } from '@microsoft/tsdoc';
import { IJsonFileSaveOptions } from '@rushstack/node-core-library';
import * as tsdoc from '@microsoft/tsdoc';
import { TSDocConfiguration } from '@microsoft/tsdoc';
import { TSDocTagDefinition } from '@microsoft/tsdoc';

/**
 * @internal
 * @deprecated - tsdoc configuration is now constructed from tsdoc.json files associated with each package.
 */
export declare class AedocDefinitions {
    static readonly betaDocumentation: TSDocTagDefinition;
    static readonly internalRemarks: TSDocTagDefinition;
    static readonly preapprovedTag: TSDocTagDefinition;
    static get tsdocConfiguration(): TSDocConfiguration;
    private static _tsdocConfiguration;
}

/**
 * Represents a TypeScript function call signature.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiCallSignature` represents a TypeScript declaration such as `(x: number, y: number): number`
 * in this example:
 *
 * ```ts
 * export interface IChooser {
 *   // A call signature:
 *   (x: number, y: number): number;
 *
 *   // Another overload for this call signature:
 *   (x: string, y: string): string;
 * }
 *
 * function chooseFirst<T>(x: T, y: T): T {
 *   return x;
 * }
 *
 * let chooser: IChooser = chooseFirst;
 * ```
 *
 * @public
 */
export declare class ApiCallSignature extends ApiCallSignature_base {
    constructor(options: IApiCallSignatureOptions);
    static getContainerKey(overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiCallSignature_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin) & (new (...args: any[]) => ApiTypeParameterListMixin);

/**
 * Represents a TypeScript class declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiClass` represents a TypeScript declaration such as this:
 *
 * ```ts
 * export class X { }
 * ```
 *
 * @public
 */
export declare class ApiClass extends ApiClass_base {
    /**
     * The base class that this class inherits from (using the `extends` keyword), or undefined if there is no base class.
     */
    readonly extendsType: HeritageType | undefined;
    private readonly _implementsTypes;
    constructor(options: IApiClassOptions);
    static getContainerKey(name: string): string;
    /** @override */
    static onDeserializeInto(options: Partial<IApiClassOptions>, context: DeserializerContext, jsonObject: IApiClassJson): void;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /**
     * The list of interfaces that this class implements using the `implements` keyword.
     */
    get implementsTypes(): ReadonlyArray<HeritageType>;
    /** @override */
    serializeInto(jsonObject: Partial<IApiClassJson>): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiClass_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiTypeParameterListMixin) & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Represents a TypeScript class constructor declaration that belongs to an `ApiClass`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiConstructor` represents a declaration using the `constructor` keyword such as in this example:
 *
 * ```ts
 * export class Vector {
 *   public x: number;
 *   public y: number;
 *
 *   // A class constructor:
 *   public constructor(x: number, y: number) {
 *     this.x = x;
 *     this.y = y;
 *   }
 * }
 * ```
 *
 * Compare with {@link ApiConstructSignature}, which describes the construct signature for a class constructor.
 *
 * @public
 */
export declare class ApiConstructor extends ApiConstructor_base {
    constructor(options: IApiConstructorOptions);
    static getContainerKey(overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiConstructor_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin);

/**
 * Represents a TypeScript construct signature that belongs to an `ApiInterface`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiConstructSignature` represents a construct signature using the `new` keyword such as in this example:
 *
 * ```ts
 * export interface IVector {
 *   x: number;
 *   y: number;
 * }
 *
 * export interface IVectorConstructor {
 *   // A construct signature:
 *   new(x: number, y: number): IVector;
 * }
 *
 * export function createVector(vectorConstructor: IVectorConstructor,
 *   x: number, y: number): IVector {
 *   return new vectorConstructor(x, y);
 * }
 *
 * class Vector implements IVector {
 *   public x: number;
 *   public y: number;
 *   public constructor(x: number, y: number) {
 *     this.x = x;
 *     this.y = y;
 *   }
 * }
 *
 * let vector: Vector = createVector(Vector, 1, 2);
 * ```
 *
 * Compare with {@link ApiConstructor}, which describes the class constructor itself.
 *
 * @public
 */
export declare class ApiConstructSignature extends ApiConstructSignature_base {
    constructor(options: IApiConstructSignatureOptions);
    static getContainerKey(overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiConstructSignature_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin) & (new (...args: any[]) => ApiTypeParameterListMixin);

/**
 * The base class for API items that have an associated source code excerpt containing a TypeScript declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * Most `ApiItem` subclasses have declarations and thus extend `ApiDeclaredItem`.  Counterexamples include
 * `ApiModel` and `ApiPackage`, which do not have any corresponding TypeScript source code.
 *
 * @public
 */
export declare class ApiDeclaredItem extends ApiDocumentedItem {
    private _excerptTokens;
    private _excerpt;
    constructor(options: IApiDeclaredItemOptions);
    /** @override */
    static onDeserializeInto(options: Partial<IApiDeclaredItemOptions>, context: DeserializerContext, jsonObject: IApiDeclaredItemJson): void;
    /**
     * The source code excerpt where the API item is declared.
     */
    get excerpt(): Excerpt;
    /**
     * The individual source code tokens that comprise the main excerpt.
     */
    get excerptTokens(): ReadonlyArray<ExcerptToken>;
    /**
     * If the API item has certain important modifier tags such as `@sealed`, `@virtual`, or `@override`,
     * this prepends them as a doc comment above the excerpt.
     */
    getExcerptWithModifiers(): string;
    /** @override */
    serializeInto(jsonObject: Partial<IApiDeclaredItemJson>): void;
    /**
     * Constructs a new {@link Excerpt} corresponding to the provided token range.
     */
    buildExcerpt(tokenRange: IExcerptTokenRange): Excerpt;
}

/**
 * An abstract base class for API declarations that can have an associated TSDoc comment.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * @public
 */
export declare class ApiDocumentedItem extends ApiItem {
    private _tsdocComment;
    constructor(options: IApiDocumentedItemOptions);
    /** @override */
    static onDeserializeInto(options: Partial<IApiDocumentedItemOptions>, context: DeserializerContext, jsonObject: IApiItemJson): void;
    get tsdocComment(): tsdoc.DocComment | undefined;
    /** @override */
    serializeInto(jsonObject: Partial<IApiDocumentedItemJson>): void;
}

/**
 * Represents the entry point for an NPM package.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiEntryPoint` represents the entry point to an NPM package.  API Extractor does not currently support
 * analysis of multiple entry points, but the `ApiEntryPoint` object is included to support a future feature.
 * In the current implementation, `ApiEntryPoint.importPath` is always the empty string.
 *
 * For example, suppose the package.json file looks like this:
 *
 * ```json
 * {
 *   "name": "example-library",
 *   "version": "1.0.0",
 *   "main": "./lib/index.js",
 *   "typings": "./lib/index.d.ts"
 * }
 * ```
 *
 * In this example, the `ApiEntryPoint` would represent the TypeScript module for `./lib/index.js`.
 *
 * @public
 */
export declare class ApiEntryPoint extends ApiEntryPoint_base {
    constructor(options: IApiEntryPointOptions);
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /**
     * The module path for this entry point, relative to the parent `ApiPackage`.  In the current implementation,
     * this is always the empty string, indicating the default entry point.
     *
     * @remarks
     *
     * API Extractor does not currently support analysis of multiple entry points.  If that feature is implemented
     * in the future, then the `ApiEntryPoint.importPath` will be used to distinguish different entry points,
     * for example: `controls/Button` in `import { Button } from "example-package/controls/Button";`.
     *
     * The `ApiEntryPoint.name` property stores the same value as `ApiEntryPoint.importPath`.
     */
    get importPath(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiEntryPoint_base: typeof ApiItem & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Represents a TypeScript enum declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiEnum` represents an enum declaration such as `FontSizes` in the example below:
 *
 * ```ts
 * export enum FontSizes {
 *   Small = 100,
 *   Medium = 200,
 *   Large = 300
 * }
 * ```
 *
 * @public
 */
export declare class ApiEnum extends ApiEnum_base {
    constructor(options: IApiEnumOptions);
    static getContainerKey(name: string): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get members(): ReadonlyArray<ApiEnumMember>;
    /** @override */
    get containerKey(): string;
    /** @override */
    addMember(member: ApiEnumMember): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiEnum_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Represents a member of a TypeScript enum declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiEnumMember` represents an enum member such as `Small = 100` in the example below:
 *
 * ```ts
 * export enum FontSizes {
 *   Small = 100,
 *   Medium = 200,
 *   Large = 300
 * }
 * ```
 *
 * @public
 */
export declare class ApiEnumMember extends ApiEnumMember_base {
    /**
     * An {@link Excerpt} that describes the value of the enum member.
     */
    readonly initializerExcerpt: Excerpt;
    constructor(options: IApiEnumMemberOptions);
    static getContainerKey(name: string): string;
    /** @override */
    static onDeserializeInto(options: Partial<IApiEnumMemberOptions>, context: DeserializerContext, jsonObject: IApiEnumMemberJson): void;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @override */
    serializeInto(jsonObject: Partial<IApiEnumMemberJson>): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiEnumMember_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * Represents a TypeScript function declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiFunction` represents a TypeScript declaration such as this example:
 *
 * ```ts
 * export function getAverage(x: number, y: number): number {
 *   return (x + y) / 2.0;
 * }
 * ```
 *
 * Functions are exported by an entry point module or by a namespace.  Compare with {@link ApiMethod}, which
 * represents a function that is a member of a class.
 *
 * @public
 */
export declare class ApiFunction extends ApiFunction_base {
    constructor(options: IApiFunctionOptions);
    static getContainerKey(name: string, overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiFunction_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin) & (new (...args: any[]) => ApiTypeParameterListMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * Represents a TypeScript index signature.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiIndexSignature` represents a TypeScript declaration such as `[x: number]: number` in this example:
 *
 * ```ts
 * export interface INumberTable {
 *   // An index signature
 *   [value: number]: number;
 *
 *   // An overloaded index signature
 *   [name: string]: number;
 * }
 * ```
 *
 * @public
 */
export declare class ApiIndexSignature extends ApiIndexSignature_base {
    constructor(options: IApiIndexSignatureOptions);
    static getContainerKey(overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiIndexSignature_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin);

/**
 * Represents a TypeScript class declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiInterface` represents a TypeScript declaration such as this:
 *
 * ```ts
 * export interface X extends Y {
 * }
 * ```
 *
 * @public
 */
export declare class ApiInterface extends ApiInterface_base {
    private readonly _extendsTypes;
    constructor(options: IApiInterfaceOptions);
    static getContainerKey(name: string): string;
    /** @override */
    static onDeserializeInto(options: Partial<IApiInterfaceOptions>, context: DeserializerContext, jsonObject: IApiInterfaceJson): void;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /**
     * The list of base interfaces that this interface inherits from using the `extends` keyword.
     */
    get extendsTypes(): ReadonlyArray<HeritageType>;
    /** @override */
    serializeInto(jsonObject: Partial<IApiInterfaceJson>): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiInterface_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiTypeParameterListMixin) & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * The abstract base class for all members of an `ApiModel` object.
 *
 * @remarks
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 * @public
 */
export declare class ApiItem {
    private _canonicalReference;
    private _parent;
    constructor(options: IApiItemOptions);
    static deserialize(jsonObject: IApiItemJson, context: DeserializerContext): ApiItem;
    /** @virtual */
    static onDeserializeInto(options: Partial<IApiItemOptions>, context: DeserializerContext, jsonObject: IApiItemJson): void;
    /** @virtual */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
    /**
     * Identifies the subclass of the `ApiItem` base class.
     * @virtual
     */
    get kind(): ApiItemKind;
    /**
     * Warning: This API is used internally by API extractor but is not yet ready for general usage.
     *
     * @remarks
     *
     * Returns a `DeclarationReference` object using the experimental new declaration reference notation.
     *
     * @beta
     */
    get canonicalReference(): DeclarationReference;
    /**
     * Returns a string key that can be used to efficiently retrieve an `ApiItem` from an `ApiItemContainerMixin`.
     * The key is unique within the container.  Its format is undocumented and may change at any time.
     *
     * @remarks
     * Use the `getContainerKey()` static member to construct the key.  Each subclass has a different implementation
     * of this function, according to the aspects that are important for identifying it.
     *
     * @virtual
     */
    get containerKey(): string;
    /**
     * Returns a name for this object that can be used in diagnostic messages, for example.
     *
     * @remarks
     * For an object that inherits ApiNameMixin, this will return the declared name (e.g. the name of a TypeScript
     * function).  Otherwise, it will return a string such as "(call signature)" or "(model)".
     *
     * @virtual
     */
    get displayName(): string;
    /**
     * If this item was added to a ApiItemContainerMixin item, then this returns the container item.
     * If this is an Parameter that was added to a method or function, then this returns the function item.
     * Otherwise, it returns undefined.
     * @virtual
     */
    get parent(): ApiItem | undefined;
    /**
     * This property supports a visitor pattern for walking the tree.
     * For items with ApiItemContainerMixin, it returns the contained items, sorted alphabetically.
     * Otherwise it returns an empty array.
     * @virtual
     */
    get members(): ReadonlyArray<ApiItem>;
    /**
     * If this item has a name (i.e. extends `ApiNameMixin`), then return all items that have the same parent
     * and the same name.  Otherwise, return all items that have the same parent and the same `ApiItemKind`.
     *
     * @remarks
     * Examples: For a function, this would return all overloads for the function.  For a constructor, this would
     * return all overloads for the constructor.  For a merged declaration (e.g. a `namespace` and `enum` with the
     * same name), this would return both declarations.  If this item does not have a parent, or if it is the only
     * item of its name/kind, then the result is an array containing only this item.
     */
    getMergedSiblings(): ReadonlyArray<ApiItem>;
    /**
     * Returns the chain of ancestors, starting from the root of the tree, and ending with the this item.
     */
    getHierarchy(): ReadonlyArray<ApiItem>;
    /**
     * This returns a scoped name such as `"Namespace1.Namespace2.MyClass.myMember()"`.  It does not include the
     * package name or entry point.
     *
     * @remarks
     * If called on an ApiEntrypoint, ApiPackage, or ApiModel item, the result is an empty string.
     */
    getScopedNameWithinPackage(): string;
    /**
     * If this item is an ApiPackage or has an ApiPackage as one of its parents, then that object is returned.
     * Otherwise undefined is returned.
     */
    getAssociatedPackage(): ApiPackage | undefined;
    /** @virtual */
    getSortKey(): string;
    /**
     * PRIVATE
     *
     * @privateRemarks
     * Allows ApiItemContainerMixin to assign the parent when the item is added to a container.
     *
     * @internal
     */
    [apiItem_onParentChanged](parent: ApiItem | undefined): void;
    /**
     * Builds the cached object used by the `canonicalReference` property.
     * @virtual
     */
    protected buildCanonicalReference(): DeclarationReference;
}

declare const apiItem_onParentChanged: unique symbol;

/**
 * Mixin function for {@link ApiDeclaredItem}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiItemContainerMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiItemContainerMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * The mixin base class for API items that act as containers for other child items.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * Examples of `ApiItemContainerMixin` child classes include `ApiModel`, `ApiPackage`, `ApiEntryPoint`,
 * and `ApiEnum`.  But note that `Parameter` is not considered a "member" of an `ApiMethod`; this relationship
 * is modeled using {@link (ApiParameterListMixin:interface).parameters} instead
 * of {@link ApiItem.members}.
 *
 * @public
 */
export declare interface ApiItemContainerMixin extends ApiItem {
    /**
     * Adds a new member to the container.
     *
     * @remarks
     * An ApiItem cannot be added to more than one container.
     */
    addMember(member: ApiItem): void;
    /**
     * Attempts to retrieve a member using its containerKey, or returns `undefined` if no matching member was found.
     *
     * @remarks
     * Use the `getContainerKey()` static member to construct the key.  Each subclass has a different implementation
     * of this function, according to the aspects that are important for identifying it.
     *
     * See {@link ApiItem.containerKey} for more information.
     */
    tryGetMemberByKey(containerKey: string): ApiItem | undefined;
    /**
     * Returns a list of members with the specified name.
     */
    findMembersByName(name: string): ReadonlyArray<ApiItem>;
    /**
     * For a given member of this container, return its `ApiItem.getMergedSiblings()` list.
     * @internal
     */
    _getMergedSiblingsForMember(memberApiItem: ApiItem): ReadonlyArray<ApiItem>;
    /** @override */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiItemContainerMixin:interface)}.
 * @public
 */
export declare namespace ApiItemContainerMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiItemContainerMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiItemContainerMixin;
}

/**
 * The type returned by the {@link ApiItem.kind} property, which can be used to easily distinguish subclasses of
 * {@link ApiItem}.
 *
 * @public
 */
export declare enum ApiItemKind {
    CallSignature = "CallSignature",
    Class = "Class",
    Constructor = "Constructor",
    ConstructSignature = "ConstructSignature",
    EntryPoint = "EntryPoint",
    Enum = "Enum",
    EnumMember = "EnumMember",
    Function = "Function",
    IndexSignature = "IndexSignature",
    Interface = "Interface",
    Method = "Method",
    MethodSignature = "MethodSignature",
    Model = "Model",
    Namespace = "Namespace",
    Package = "Package",
    Property = "Property",
    PropertySignature = "PropertySignature",
    TypeAlias = "TypeAlias",
    Variable = "Variable",
    None = "None"
}

declare enum ApiJsonSchemaVersion {
    /**
     * The initial release.
     */
    V_1000 = 1000,
    /**
     * Add support for type parameters and type alias types.
     */
    V_1001 = 1001,
    /**
     * Remove `canonicalReference` field.  This field was for diagnostic purposes only and was never deserialized.
     */
    V_1002 = 1002,
    /**
     * Reintroduce the `canonicalReference` field using the experimental new TSDoc declaration reference notation.
     *
     * This is not a breaking change because this field is never deserialized; it is provided for informational
     * purposes only.
     */
    V_1003 = 1003,
    /**
     * Add a `tsdocConfig` field that tracks the TSDoc configuration for parsing doc comments.
     *
     * This is not a breaking change because an older implementation will still work correctly.  The
     * custom tags will be skipped over by the parser.
     */
    V_1004 = 1004,
    /**
     * Add an `isOptional` field to `IApiParameterOptions` to track whether a function parameter is optional.
     *
     * When loading older JSON files, the value defaults to `false`.
     */
    V_1005 = 1005,
    /**
     * The current latest .api.json schema version.
     *
     * IMPORTANT: When incrementing this number, consider whether `OLDEST_SUPPORTED` or `OLDEST_FORWARDS_COMPATIBLE`
     * should be updated.
     */
    LATEST = 1005,
    /**
     * The oldest .api.json schema version that is still supported for backwards compatibility.
     *
     * This must be updated if you change to the file format and do not implement compatibility logic for
     * deserializing the older representation.
     */
    OLDEST_SUPPORTED = 1001,
    /**
     * Used to assign `IApiPackageMetadataJson.oldestForwardsCompatibleVersion`.
     *
     * This value must be \<= `ApiJsonSchemaVersion.LATEST`.  It must be reset to the `LATEST` value
     * if the older library would not be able to deserialize your new file format.  Adding a nonessential field
     * is generally okay.  Removing, modifying, or reinterpreting existing fields is NOT safe.
     */
    OLDEST_FORWARDS_COMPATIBLE = 1001
}

/**
 * Represents a TypeScript member function declaration that belongs to an `ApiClass`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiMethod` represents a TypeScript declaration such as the `render` member function in this example:
 *
 * ```ts
 * export class Widget {
 *   public render(): void { }
 * }
 * ```
 *
 * Compare with {@link ApiMethodSignature}, which represents a method belonging to an interface.
 * For example, a class method can be `static` but an interface method cannot.
 *
 * @public
 */
export declare class ApiMethod extends ApiMethod_base {
    constructor(options: IApiMethodOptions);
    static getContainerKey(name: string, isStatic: boolean, overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiMethod_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiOptionalMixin) & (new (...args: any[]) => ApiStaticMixin) & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin) & (new (...args: any[]) => ApiTypeParameterListMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * Represents a TypeScript member function declaration that belongs to an `ApiInterface`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiMethodSignature` represents a TypeScript declaration such as the `render` member function in this example:
 *
 * ```ts
 * export interface IWidget {
 *   render(): void;
 * }
 * ```
 *
 * Compare with {@link ApiMethod}, which represents a method belonging to a class.
 * For example, a class method can be `static` but an interface method cannot.
 *
 * @public
 */
export declare class ApiMethodSignature extends ApiMethodSignature_base {
    constructor(options: IApiMethodSignatureOptions);
    static getContainerKey(name: string, overloadIndex: number): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiMethodSignature_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiOptionalMixin) & (new (...args: any[]) => ApiReturnTypeMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiParameterListMixin) & (new (...args: any[]) => ApiTypeParameterListMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * A serializable representation of a collection of API declarations.
 *
 * @remarks
 *
 * An `ApiModel` represents a collection of API declarations that can be serialized to disk.  It captures all the
 * important information needed to generate documentation, without any reliance on the TypeScript compiler engine.
 *
 * An `ApiModel` acts as the root of a tree of objects that all inherit from the `ApiItem` base class.
 * The tree children are determined by the {@link (ApiItemContainerMixin:interface)} mixin base class.  The model
 * contains packages.  Packages have an entry point (today, only one).  And the entry point can contain various types
 * of API declarations.  The container relationships might look like this:
 *
 * ```
 * Things that can contain other things:
 *
 * - ApiModel
 *   - ApiPackage
 *     - ApiEntryPoint
 *       - ApiClass
 *         - ApiMethod
 *         - ApiProperty
 *       - ApiEnum
 *         - ApiEnumMember
 *       - ApiInterface
 *         - ApiMethodSignature
 *         - ApiPropertySignature
 *       - ApiNamespace
 *         - (ApiClass, ApiEnum, ApiInterace, ...)
 *
 * ```
 *
 * Normally, API Extractor writes an .api.json file to disk for each project that it builds.  Then, a tool like
 * API Documenter can load the various `ApiPackage` objects into a single `ApiModel` and process them as a group.
 * This is useful because compilation generally occurs separately (e.g. because projects may reside in different
 * Git repos, or because they build with different TypeScript compiler configurations that may be incompatible),
 * whereas API Documenter cannot detect broken hyperlinks without seeing the entire documentation set.
 *
 * @public
 */
export declare class ApiModel extends ApiModel_base {
    private readonly _resolver;
    private _packagesByName;
    private _apiItemsByCanonicalReference;
    constructor();
    loadPackage(apiJsonFilename: string): ApiPackage;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    get packages(): ReadonlyArray<ApiPackage>;
    /** @override */
    addMember(member: ApiPackage): void;
    /**
     * Efficiently finds a package by the NPM package name.
     *
     * @remarks
     *
     * If the NPM scope is omitted in the package name, it will still be found provided that it is an unambiguous match.
     * For example, it's often convenient to write `{@link node-core-library#JsonFile}` instead of
     * `{@link @rushstack/node-core-library#JsonFile}`.
     */
    tryGetPackageByName(packageName: string): ApiPackage | undefined;
    resolveDeclarationReference(declarationReference: DocDeclarationReference | DeclarationReference, contextApiItem: ApiItem | undefined): IResolveDeclarationReferenceResult;
    private _initApiItemsRecursive;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiModel_base: typeof ApiItem & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Mixin function for {@link (ApiNameMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiNameMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiNameMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiNameMixin);

/**
 * The mixin base class for API items that have a name.  For example, a class has a name, but a class constructor
 * does not.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiNameMixin extends ApiItem {
    /**
     * The exported name of this API item.
     *
     * @remarks
     * Note that due tue type aliasing, the exported name may be different from the locally declared name.
     */
    readonly name: string;
    /** @override */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiNameMixin:interface)}.
 * @public
 */
export declare namespace ApiNameMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiNameMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiNameMixin;
}

/**
 * Represents a TypeScript namespace declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiNamespace` represents a TypeScript declaration such `X` or `Y` in this example:
 *
 * ```ts
 * export namespace X {
 *   export namespace Y {
 *     export interface IWidget {
 *       render(): void;
 *     }
 *   }
 * }
 * ```
 *
 * @public
 */
export declare class ApiNamespace extends ApiNamespace_base {
    constructor(options: IApiNamespaceOptions);
    static getContainerKey(name: string): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiNamespace_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Mixin function for {@link (ApiOptionalMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiOptionalMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiOptionalMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiOptionalMixin);

/**
 * The mixin base class for API items that can be marked as optional by appending a `?` to them.
 * For example, a property of an interface can be optional.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiOptionalMixin extends ApiItem {
    /**
     * True if this is an optional property.
     * @remarks
     * For example:
     * ```ts
     * interface X {
     *   y: string;   // not optional
     *   z?: string;  // optional
     * }
     * ```
     */
    readonly isOptional: boolean;
    /** @override */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Optional members for {@link (ApiOptionalMixin:interface)}.
 * @public
 */
export declare namespace ApiOptionalMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiOptionalMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiOptionalMixin;
}

/**
 * Represents an NPM package containing API declarations.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * @public
 */
export declare class ApiPackage extends ApiPackage_base {
    private readonly _tsdocConfiguration;
    constructor(options: IApiPackageOptions);
    static loadFromJsonFile(apiJsonFilename: string): ApiPackage;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    get entryPoints(): ReadonlyArray<ApiEntryPoint>;
    /**
     * The TSDoc configuration that was used when analyzing the API for this package.
     *
     * @remarks
     *
     * Normally this configuration is loaded from the project's tsdoc.json file.  It is stored
     * in the .api.json file so that doc comments can be parsed accurately when loading the file.
     */
    get tsdocConfiguration(): TSDocConfiguration;
    /** @override */
    addMember(member: ApiEntryPoint): void;
    findEntryPointsByPath(importPath: string): ReadonlyArray<ApiEntryPoint>;
    saveToJsonFile(apiJsonFilename: string, options?: IApiPackageSaveOptions): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiPackage_base: typeof ApiDocumentedItem & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiItemContainerMixin);

/**
 * Mixin function for {@link (ApiParameterListMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiParameterListMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiParameterListMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiParameterListMixin);

/**
 * The mixin base class for API items that can have function parameters (but not necessarily a return value).
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiParameterListMixin extends ApiItem {
    /**
     * When a function has multiple overloaded declarations, this zero-based integer index can be used to unqiuely
     * identify them.
     *
     * @remarks
     *
     * Consider this overloaded declaration:
     *
     * ```ts
     * export namespace Versioning {
     *   // TSDoc: Versioning.(addVersions:1)
     *   export function addVersions(x: number, y: number): number;
     *
     *   // TSDoc: Versioning.(addVersions:2)
     *   export function addVersions(x: string, y: string): string;
     *
     *   // (implementation)
     *   export function addVersions(x: number|string, y: number|string): number|string {
     *     // . . .
     *   }
     * }
     * ```
     *
     * In the above example, there are two overloaded declarations.  The overload using numbers will have
     * `overloadIndex = 1`.  The overload using strings will have `overloadIndex = 2`.  The third declaration that
     * accepts all possible inputs is considered part of the implementation, and is not processed by API Extractor.
     */
    readonly overloadIndex: number;
    /**
     * The function parameters.
     */
    readonly parameters: ReadonlyArray<Parameter>;
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiParameterListMixin:interface)}.
 * @public
 */
export declare namespace ApiParameterListMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiParameterListMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiParameterListMixin;
}

/**
 * Represents a TypeScript property declaration that belongs to an `ApiClass`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiProperty` represents a TypeScript declaration such as the `width` and `height` members in this example:
 *
 * ```ts
 * export class Widget {
 *   public width: number = 100;
 *
 *   public get height(): number {
 *     if (this.isSquashed()) {
 *       return 0;
 *     } else {
 *       return this.clientArea.height;
 *     }
 *   }
 * }
 * ```
 *
 * Note that member variables are also considered to be properties.
 *
 * If the property has both a getter function and setter function, they will be represented by a single `ApiProperty`
 * and must have a single documentation comment.
 *
 * Compare with {@link ApiPropertySignature}, which represents a property belonging to an interface.
 * For example, a class property can be `static` but an interface property cannot.
 *
 * @public
 */
export declare class ApiProperty extends ApiProperty_base {
    constructor(options: IApiPropertyOptions);
    static getContainerKey(name: string, isStatic: boolean): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiProperty_base: typeof ApiPropertyItem & (new (...args: any[]) => ApiStaticMixin);

/**
 * The abstract base class for {@link ApiProperty} and {@link ApiPropertySignature}.
 *
 * @public
 */
export declare class ApiPropertyItem extends ApiPropertyItem_base {
    /**
     * An {@link Excerpt} that describes the type of the property.
     */
    readonly propertyTypeExcerpt: Excerpt;
    constructor(options: IApiPropertyItemOptions);
    /** @override */
    static onDeserializeInto(options: Partial<IApiPropertyItemOptions>, context: DeserializerContext, jsonObject: IApiPropertyItemJson): void;
    /**
     * Returns true if this property should be documented as an event.
     *
     * @remarks
     * The `@eventProperty` TSDoc modifier can be added to readonly properties to indicate that they return an
     * event object that event handlers can be attached to.  The event-handling API is implementation-defined, but
     * typically the return type would be a class with members such as `addHandler()` and `removeHandler()`.
     * The documentation should display such properties under an "Events" heading instead of the
     * usual "Properties" heading.
     */
    get isEventProperty(): boolean;
    /** @override */
    serializeInto(jsonObject: Partial<IApiPropertyItemJson>): void;
}

declare const ApiPropertyItem_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiOptionalMixin) & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * Represents a TypeScript property declaration that belongs to an `ApiInterface`.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiPropertySignature` represents a TypeScript declaration such as the `width` and `height` members in this example:
 *
 * ```ts
 * export interface IWidget {
 *   readonly width: number;
 *   height: number;
 * }
 * ```
 *
 * Compare with {@link ApiProperty}, which represents a property belonging to a class.
 * For example, a class property can be `static` but an interface property cannot.
 *
 * @public
 */
export declare class ApiPropertySignature extends ApiPropertyItem {
    constructor(options: IApiPropertySignatureOptions);
    static getContainerKey(name: string): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

/**
 * Mixin function for {@link (ApiReleaseTagMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiReleaseTagMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiReleaseTagMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiReleaseTagMixin);

/**
 * The mixin base class for API items that can be attributed with a TSDoc tag such as `@internal`,
 * `@alpha`, `@beta`, or `@public`.  These "release tags" indicate the support level for an API.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiReleaseTagMixin extends ApiItem {
    /**
     * The effective release tag for this declaration.  If it is not explicitly specified, the value may be
     * inherited from a containing declaration.
     *
     * @remarks
     * For example, an `ApiEnumMember` may inherit its release tag from the containing `ApiEnum`.
     */
    readonly releaseTag: ReleaseTag;
    /** @override */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiReleaseTagMixin:interface)}.
 * @public
 */
export declare namespace ApiReleaseTagMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiReleaseTagMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiReleaseTagMixin;
}

/**
 * Mixin function for {@link (ApiReturnTypeMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiReturnTypeMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiReturnTypeMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiReturnTypeMixin);

/**
 * The mixin base class for API items that are functions that return a value.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiReturnTypeMixin extends ApiItem {
    /**
     * An {@link Excerpt} that describes the type of the function's return value.
     */
    readonly returnTypeExcerpt: Excerpt;
    /** @override */
    serializeInto(jsonObject: Partial<IApiReturnTypeMixinJson>): void;
}

/**
 * Static members for {@link (ApiReturnTypeMixin:interface)}.
 * @public
 */
export declare namespace ApiReturnTypeMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiReturnTypeMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiReturnTypeMixin;
}

/**
 * Mixin function for {@link (ApiStaticMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiStaticMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiStaticMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiStaticMixin);

/**
 * The mixin base class for API items that can have the TypeScript `static` keyword applied to them.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiStaticMixin extends ApiItem {
    /**
     * Whether the declaration has the TypeScript `static` keyword.
     */
    readonly isStatic: boolean;
    /** @override */
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiStaticMixin:interface)}.
 * @public
 */
export declare namespace ApiStaticMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiStaticMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiStaticMixin;
}

/**
 * Represents a TypeScript type alias declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiTypeAlias` represents a definition such as one of these examples:
 *
 * ```ts
 * // A union type:
 * export type Shape = Square | Triangle | Circle;
 *
 * // A generic type alias:
 * export type BoxedValue<T> = { value: T };
 *
 * export type BoxedArray<T> = { array: T[] };
 *
 * // A conditional type alias:
 * export type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
 *
 * ```
 *
 * @public
 */
export declare class ApiTypeAlias extends ApiTypeAlias_base {
    /**
     * An {@link Excerpt} that describes the type of the alias.
     *
     * @remarks
     * In the example below, the `typeExcerpt` would correspond to the subexpression
     * `T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;`:
     *
     * ```ts
     * export type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
     * ```
     */
    readonly typeExcerpt: Excerpt;
    constructor(options: IApiTypeAliasOptions);
    /** @override */
    static onDeserializeInto(options: Partial<IApiTypeAliasOptions>, context: DeserializerContext, jsonObject: IApiTypeAliasJson): void;
    static getContainerKey(name: string): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @override */
    serializeInto(jsonObject: Partial<IApiTypeAliasJson>): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiTypeAlias_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin) & (new (...args: any[]) => ApiTypeParameterListMixin);

/**
 * Mixin function for {@link (ApiTypeParameterListMixin:interface)}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiTypeParameterListMixin:interface)}
 * functionality.
 *
 * @public
 */
export declare function ApiTypeParameterListMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiTypeParameterListMixin);

/**
 * The mixin base class for API items that can have type parameters.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.  The non-abstract classes (e.g. `ApiClass`, `ApiEnum`, `ApiInterface`, etc.) use
 * TypeScript "mixin" functions (e.g. `ApiDeclaredItem`, `ApiItemContainerMixin`, etc.) to add various
 * features that cannot be represented as a normal inheritance chain (since TypeScript does not allow a child class
 * to extend more than one base class).  The "mixin" is a TypeScript merged declaration with three components:
 * the function that generates a subclass, an interface that describes the members of the subclass, and
 * a namespace containing static members of the class.
 *
 * @public
 */
export declare interface ApiTypeParameterListMixin extends ApiItem {
    /**
     * The type parameters.
     */
    readonly typeParameters: ReadonlyArray<TypeParameter>;
    serializeInto(jsonObject: Partial<IApiItemJson>): void;
}

/**
 * Static members for {@link (ApiTypeParameterListMixin:interface)}.
 * @public
 */
export declare namespace ApiTypeParameterListMixin {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiParameterListMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    export function isBaseClassOf(apiItem: ApiItem): apiItem is ApiTypeParameterListMixin;
}

/**
 * Represents a TypeScript variable declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiVariable` represents an exported `const` or `let` object such as these examples:
 *
 * ```ts
 * // A variable declaration
 * export let verboseLogging: boolean;
 *
 * // A constant variable declaration with an initializer
 * export const canvas: IWidget = createCanvas();
 * ```
 *
 * @public
 */
export declare class ApiVariable extends ApiVariable_base {
    /**
     * An {@link Excerpt} that describes the type of the variable.
     */
    readonly variableTypeExcerpt: Excerpt;
    constructor(options: IApiVariableOptions);
    /** @override */
    static onDeserializeInto(options: Partial<IApiVariableOptions>, context: DeserializerContext, jsonObject: IApiVariableJson): void;
    static getContainerKey(name: string): string;
    /** @override */
    get kind(): ApiItemKind;
    /** @override */
    get containerKey(): string;
    /** @override */
    serializeInto(jsonObject: Partial<IApiVariableJson>): void;
    /** @beta @override */
    buildCanonicalReference(): DeclarationReference;
}

declare const ApiVariable_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin);

/**
 * This abstraction is used by the mixin pattern.
 * It describes a class constructor.
 * @public
 */
export declare type Constructor<T = {}> = new (...args: any[]) => T;

declare class DeserializerContext {
    /**
     * The path of the file being deserialized, which may be useful for diagnostic purposes.
     */
    readonly apiJsonFilename: string;
    /**
     * Metadata from `IApiPackageMetadataJson.toolPackage`.
     */
    readonly toolPackage: string;
    /**
     * Metadata from `IApiPackageMetadataJson.toolVersion`.
     */
    readonly toolVersion: string;
    /**
     * The version of the schema being deserialized, as obtained from `IApiPackageMetadataJson.schemaVersion`.
     */
    readonly versionToDeserialize: ApiJsonSchemaVersion;
    /**
     * The TSDoc configuration for the context.
     */
    readonly tsdocConfiguration: TSDocConfiguration;
    constructor(options: DeserializerContext);
}

/**
 * The `Excerpt` class is used by {@link ApiDeclaredItem} to represent a TypeScript code fragment that may be
 * annotated with hyperlinks to declared types (and in the future, source code locations).
 *
 * @remarks
 * API Extractor's .api.json file format stores excerpts compactly as a start/end indexes into an array of tokens.
 * Every `ApiDeclaredItem` has a "main excerpt" corresponding to the full list of tokens.  The declaration may
 * also have have "captured" excerpts that correspond to subranges of tokens.
 *
 * For example, if the main excerpt is:
 *
 * ```
 * function parse(s: string): Vector | undefined;
 * ```
 *
 * ...then this entire signature is the "main excerpt", whereas the function's return type `Vector | undefined` is a
 * captured excerpt.  The `Vector` token might be a hyperlink to that API item.
 *
 * An excerpt may be empty (i.e. a token range containing zero tokens).  For example, if a function's return value
 * is not explicitly declared, then the returnTypeExcerpt will be empty.  By contrast, a class constructor cannot
 * have a return value, so ApiConstructor has no returnTypeExcerpt property at all.
 *
 * @public
 */
export declare class Excerpt {
    /**
     * The complete list of tokens for the source code fragment that this excerpt is based upon.
     * If this object is the main excerpt, then it will span all of the tokens; otherwise, it will correspond to
     * a range within the array.
     */
    readonly tokens: ReadonlyArray<ExcerptToken>;
    /**
     * Specifies the excerpt's range within the `tokens` array.
     */
    readonly tokenRange: Readonly<IExcerptTokenRange>;
    /**
     * The tokens spanned by this excerpt.  It is the range of the `tokens` array as specified by the `tokenRange`
     * property.
     */
    readonly spannedTokens: ReadonlyArray<ExcerptToken>;
    private _text;
    constructor(tokens: ReadonlyArray<ExcerptToken>, tokenRange: IExcerptTokenRange);
    /**
     * The excerpted text, formed by concatenating the text of the `spannedTokens` strings.
     */
    get text(): string;
    /**
     * Returns true if the excerpt is an empty range.
     */
    get isEmpty(): boolean;
}

/**
 * Represents a fragment of text belonging to an {@link Excerpt} object.
 *
 * @public
 */
export declare class ExcerptToken {
    private readonly _kind;
    private readonly _text;
    private readonly _canonicalReference;
    constructor(kind: ExcerptTokenKind, text: string, canonicalReference?: DeclarationReference);
    /**
     * Indicates the kind of token.
     */
    get kind(): ExcerptTokenKind;
    /**
     * The text fragment.
     */
    get text(): string;
    /**
     * The hyperlink target for a token whose type is `ExcerptTokenKind.Reference`.  For other token types,
     * this property will be `undefined`.
     */
    get canonicalReference(): DeclarationReference | undefined;
}

/** @public */
export declare enum ExcerptTokenKind {
    /**
     * Generic text without any special properties
     */
    Content = "Content",
    /**
     * A reference to an API declaration
     */
    Reference = "Reference"
}

/**
 * Represents a type referenced via an "extends" or "implements" heritage clause for a TypeScript class.
 * @remarks
 *
 * For example, consider this declaration:
 *
 * ```ts
 * export class Widget extends Controls.WidgetBase implements Controls.IWidget, IDisposable {
 *   // . . .
 * }
 * ```
 *
 * The heritage types are `Controls.WidgetBase`, `Controls.IWidget`, and `IDisposable`.
 * @public
 */
export declare class HeritageType {
    /**
     * An excerpt corresponding to the referenced type.
     * @remarks
     *
     * For example, consider this declaration:
     *
     * ```ts
     * export class Widget extends Controls.WidgetBase implements Controls.IWidget, IDisposable {
     *   // . . .
     * }
     * ```
     *
     * The excerpt might be `Controls.WidgetBase`, `Controls.IWidget`, or `IDisposable`.
     */
    readonly excerpt: Excerpt;
    constructor(excerpt: Excerpt);
}

/**
 * Constructor options for {@link ApiCallSignature}.
 * @public
 */
export declare interface IApiCallSignatureOptions extends IApiTypeParameterListMixinOptions, IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiDeclaredItemOptions {
}

declare interface IApiClassJson extends IApiDeclaredItemJson, IApiTypeParameterListMixinJson {
    extendsTokenRange?: IExcerptTokenRange;
    implementsTokenRanges: IExcerptTokenRange[];
}

/**
 * Constructor options for {@link ApiClass}.
 * @public
 */
export declare interface IApiClassOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions, IApiTypeParameterListMixinOptions {
    extendsTokenRange: IExcerptTokenRange | undefined;
    implementsTokenRanges: IExcerptTokenRange[];
}

/**
 * Constructor options for {@link ApiConstructor}.
 * @public
 */
export declare interface IApiConstructorOptions extends IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
}

/**
 * Constructor options for {@link ApiConstructor}.
 * @public
 */
export declare interface IApiConstructSignatureOptions extends IApiTypeParameterListMixinOptions, IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiDeclaredItemOptions {
}

declare interface IApiDeclaredItemJson extends IApiDocumentedItemJson {
    excerptTokens: IExcerptToken[];
}

/**
 * Constructor options for {@link ApiDeclaredItem}.
 * @public
 */
export declare interface IApiDeclaredItemOptions extends IApiDocumentedItemOptions {
    excerptTokens: IExcerptToken[];
}

declare interface IApiDocumentedItemJson extends IApiItemJson {
    docComment: string;
}

/**
 * Constructor options for {@link ApiDocumentedItem}.
 * @public
 */
export declare interface IApiDocumentedItemOptions extends IApiItemOptions {
    docComment: tsdoc.DocComment | undefined;
}

/**
 * Constructor options for {@link ApiEntryPoint}.
 * @public
 */
export declare interface IApiEntryPointOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions {
}

declare interface IApiEnumMemberJson extends IApiDeclaredItemJson {
    initializerTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiEnumMember}.
 * @public
 */
export declare interface IApiEnumMemberOptions extends IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
    initializerTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiEnum}.
 * @public
 */
export declare interface IApiEnumOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
}

/**
 * Constructor options for {@link ApiFunction}.
 * @public
 */
export declare interface IApiFunctionOptions extends IApiNameMixinOptions, IApiTypeParameterListMixinOptions, IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiDeclaredItemOptions {
}

/**
 * Constructor options for {@link ApiIndexSignature}.
 * @public
 */
export declare interface IApiIndexSignatureOptions extends IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiDeclaredItemOptions {
}

declare interface IApiInterfaceJson extends IApiItemContainerJson, IApiNameMixinJson, IApiTypeParameterListMixinJson, IApiReleaseTagMixinJson, IApiDeclaredItemJson {
    extendsTokenRanges: IExcerptTokenRange[];
}

/**
 * Constructor options for {@link ApiInterface}.
 * @public
 */
export declare interface IApiInterfaceOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions, IApiTypeParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
    extendsTokenRanges: IExcerptTokenRange[];
}

/**
 * This abstraction is used by the mixin pattern.
 * It describes a class type that inherits from {@link ApiItem}.
 *
 * @public
 */
export declare interface IApiItemConstructor extends Constructor<ApiItem>, PropertiesOf<typeof ApiItem> {
}

declare interface IApiItemContainerJson extends IApiItemJson {
    members: IApiItemJson[];
}

/**
 * Constructor options for {@link (ApiItemContainerMixin:interface)}.
 * @public
 */
export declare interface IApiItemContainerMixinOptions extends IApiItemOptions {
    members?: ApiItem[];
}

declare interface IApiItemJson {
    kind: ApiItemKind;
    canonicalReference: string;
}

/**
 * Constructor options for {@link ApiItem}.
 * @public
 */
export declare interface IApiItemOptions {
}

/**
 * Constructor options for {@link ApiMethod}.
 * @public
 */
export declare interface IApiMethodOptions extends IApiNameMixinOptions, IApiTypeParameterListMixinOptions, IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiStaticMixinOptions, IApiOptionalMixinOptions, IApiDeclaredItemOptions {
}

/** @public */
export declare interface IApiMethodSignatureOptions extends IApiNameMixinOptions, IApiTypeParameterListMixinOptions, IApiParameterListMixinOptions, IApiReleaseTagMixinOptions, IApiReturnTypeMixinOptions, IApiOptionalMixinOptions, IApiDeclaredItemOptions {
}

declare interface IApiNameMixinJson extends IApiItemJson {
    name: string;
}

/**
 * Constructor options for {@link (IApiNameMixinOptions:interface)}.
 * @public
 */
export declare interface IApiNameMixinOptions extends IApiItemOptions {
    name: string;
}

/**
 * Constructor options for {@link ApiClass}.
 * @public
 */
export declare interface IApiNamespaceOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
}

/**
 * Constructor options for {@link (IApiOptionalMixinOptions:interface)}.
 * @public
 */
export declare interface IApiOptionalMixinOptions extends IApiItemOptions {
    isOptional: boolean;
}

/**
 * Constructor options for {@link ApiPackage}.
 * @public
 */
export declare interface IApiPackageOptions extends IApiItemContainerMixinOptions, IApiNameMixinOptions, IApiDocumentedItemOptions {
    tsdocConfiguration: TSDocConfiguration;
}

/**
 * Options for {@link ApiPackage.saveToJsonFile}.
 * @public
 */
export declare interface IApiPackageSaveOptions extends IJsonFileSaveOptions {
    /**
     * Optionally specifies a value for the "toolPackage" field in the output .api.json data file;
     * otherwise, the value will be "api-extractor-model".
     */
    toolPackage?: string;
    /**
     * Optionally specifies a value for the "toolVersion" field in the output .api.json data file;
     * otherwise, the value will be the current version of the api-extractor-model package.
     */
    toolVersion?: string;
    /**
     * Set to true only when invoking API Extractor's test harness.
     *
     * @remarks
     * When `testMode` is true, the `toolVersion` field in the .api.json file is assigned an empty string
     * to prevent spurious diffs in output files tracked for tests.
     */
    testMode?: boolean;
}

/**
 * Constructor options for {@link (ApiParameterListMixin:interface)}.
 * @public
 */
export declare interface IApiParameterListMixinOptions extends IApiItemOptions {
    overloadIndex: number;
    parameters: IApiParameterOptions[];
}

/**
 * Represents parameter information that is part of {@link IApiParameterListMixinOptions}
 * @public
 */
export declare interface IApiParameterOptions {
    parameterName: string;
    parameterTypeTokenRange: IExcerptTokenRange;
    isOptional: boolean;
}

declare interface IApiPropertyItemJson extends IApiDeclaredItemJson {
    propertyTypeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiPropertyItem}.
 * @public
 */
export declare interface IApiPropertyItemOptions extends IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiOptionalMixinOptions, IApiDeclaredItemOptions {
    propertyTypeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiProperty}.
 * @public
 */
export declare interface IApiPropertyOptions extends IApiPropertyItemOptions, IApiStaticMixinOptions {
}

/**
 * Constructor options for {@link ApiPropertySignature}.
 * @public
 */
export declare interface IApiPropertySignatureOptions extends IApiPropertyItemOptions {
}

declare interface IApiReleaseTagMixinJson extends IApiItemJson {
    releaseTag: string;
}

/**
 * Constructor options for {@link (ApiReleaseTagMixin:interface)}.
 * @public
 */
export declare interface IApiReleaseTagMixinOptions extends IApiItemOptions {
    releaseTag: ReleaseTag;
}

declare interface IApiReturnTypeMixinJson extends IApiItemJson {
    returnTypeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link (ApiReturnTypeMixin:interface)}.
 * @public
 */
export declare interface IApiReturnTypeMixinOptions extends IApiItemOptions {
    returnTypeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link (IApiStaticMixinOptions:interface)}.
 * @public
 */
export declare interface IApiStaticMixinOptions extends IApiItemOptions {
    isStatic: boolean;
}

declare interface IApiTypeAliasJson extends IApiDeclaredItemJson, IApiTypeParameterListMixinJson {
    typeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiTypeAlias}.
 * @public
 */
export declare interface IApiTypeAliasOptions extends IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions, IApiTypeParameterListMixinOptions {
    typeTokenRange: IExcerptTokenRange;
}

declare interface IApiTypeParameterListMixinJson extends IApiItemJson {
    typeParameters: IApiTypeParameterOptions[];
}

/**
 * Constructor options for {@link (ApiTypeParameterListMixin:interface)}.
 * @public
 */
export declare interface IApiTypeParameterListMixinOptions extends IApiItemOptions {
    typeParameters: IApiTypeParameterOptions[];
}

/**
 * Represents parameter information that is part of {@link IApiTypeParameterListMixinOptions}
 * @public
 */
export declare interface IApiTypeParameterOptions {
    typeParameterName: string;
    constraintTokenRange: IExcerptTokenRange;
    defaultTypeTokenRange: IExcerptTokenRange;
}

declare interface IApiVariableJson extends IApiDeclaredItemJson {
    variableTypeTokenRange: IExcerptTokenRange;
}

/**
 * Constructor options for {@link ApiVariable}.
 * @public
 */
export declare interface IApiVariableOptions extends IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
    variableTypeTokenRange: IExcerptTokenRange;
}

/** @public */
export declare interface IExcerptToken {
    readonly kind: ExcerptTokenKind;
    text: string;
    canonicalReference?: string;
}

/**
 * Used by {@link Excerpt} to indicate a range of indexes within an array of `ExcerptToken` objects.
 *
 * @public
 */
export declare interface IExcerptTokenRange {
    /**
     * The starting index of the span.
     */
    startIndex: number;
    /**
     * The index of the last member of the span, plus one.
     *
     * @remarks
     *
     * If `startIndex` and `endIndex` are the same number, then the span is empty.
     */
    endIndex: number;
}

/**
 * Constructor options for {@link Parameter}.
 * @public
 */
export declare interface IParameterOptions {
    name: string;
    parameterTypeExcerpt: Excerpt;
    isOptional: boolean;
    parent: ApiParameterListMixin;
}

/**
 * Result object for {@link ApiModel.resolveDeclarationReference}.
 *
 * @public
 */
export declare interface IResolveDeclarationReferenceResult {
    /**
     * The referenced ApiItem, if the declaration reference could be resolved.
     */
    resolvedApiItem: ApiItem | undefined;
    /**
     * If resolvedApiItem is undefined, then this will always contain an error message explaining why the
     * resolution failed.
     */
    errorMessage: string | undefined;
}

/**
 * Constructor options for {@link TypeParameter}.
 * @public
 */
export declare interface ITypeParameterOptions {
    name: string;
    constraintExcerpt: Excerpt;
    defaultTypeExcerpt: Excerpt;
    isOptional: boolean;
    parent: ApiTypeParameterListMixin;
}

/**
 * Represents a named parameter for a function-like declaration.
 *
 * @remarks
 *
 * `Parameter` represents a TypeScript declaration such as `x: number` in this example:
 *
 * ```ts
 * export function add(x: number, y: number): number {
 *   return x + y;
 * }
 * ```
 *
 * `Parameter` objects belong to the {@link (ApiParameterListMixin:interface).parameters} collection.
 *
 * @public
 */
export declare class Parameter {
    /**
     * An {@link Excerpt} that describes the type of the parameter.
     */
    readonly parameterTypeExcerpt: Excerpt;
    /**
     * The parameter name.
     */
    name: string;
    /**
     * Whether the parameter is optional.
     */
    isOptional: boolean;
    private _parent;
    constructor(options: IParameterOptions);
    /**
     * Returns the `@param` documentation for this parameter, if present.
     */
    get tsdocParamBlock(): tsdoc.DocParamBlock | undefined;
}

/**
 * This abstraction is used by the mixin pattern.
 * It describes the "static side" of a class.
 *
 * @public
 */
export declare type PropertiesOf<T> = {
    [K in keyof T]: T[K];
};

/**
 * A "release tag" is a custom TSDoc tag that is applied to an API to communicate the level of support
 * provided for third-party developers.
 *
 * @remarks
 *
 * The four release tags are: `@internal`, `@alpha`, `@beta`, and `@public`. They are applied to API items such
 * as classes, member functions, enums, etc.  The release tag applies recursively to members of a container
 * (e.g. class or interface). For example, if a class is marked as `@beta`, then all of its members automatically
 * have this status; you DON'T need add the `@beta` tag to each member function. However, you could add
 * `@internal` to a member function to give it a different release status.
 *
 * @public
 */
export declare enum ReleaseTag {
    /**
     * No release tag was specified in the AEDoc summary.
     */
    None = 0,
    /**
     * Indicates that an API item is meant only for usage by other NPM packages from the same
     * maintainer. Third parties should never use "internal" APIs. (To emphasize this, their
     * names are prefixed by underscores.)
     */
    Internal = 1,
    /**
     * Indicates that an API item is eventually intended to be public, but currently is in an
     * early stage of development. Third parties should not use "alpha" APIs.
     */
    Alpha = 2,
    /**
     * Indicates that an API item has been released in an experimental state. Third parties are
     * encouraged to try it and provide feedback. However, a "beta" API should NOT be used
     * in production.
     */
    Beta = 3,
    /**
     * Indicates that an API item has been officially released. It is part of the supported
     * contract (e.g. SemVer) for a package.
     */
    Public = 4
}

/**
 * Helper functions for working with the `ReleaseTag` enum.
 * @public
 */
export declare namespace ReleaseTag {
    /**
     * Returns the TSDoc tag name for a `ReleaseTag` value.
     *
     * @remarks
     * For example, `getTagName(ReleaseTag.Internal)` would return the string `@internal`.
     */
    export function getTagName(releaseTag: ReleaseTag): string;
    /**
     * Compares two `ReleaseTag` values. Their values must not be `ReleaseTag.None`.
     * @returns 0 if `a` and `b` are equal, a positive number if `a` is more public than `b`,
     * and a negative number if `a` is less public than `b`.
     * @remarks
     * For example, `compareReleaseTag(ReleaseTag.Beta, ReleaseTag.Alpha)` will return a positive
     * number because beta is more public than alpha.
     */
    export function compare(a: ReleaseTag, b: ReleaseTag): number;
}

/**
 * Represents a named type parameter for a generic declaration.
 *
 * @remarks
 *
 * `TypeParameter` represents a TypeScript declaration such as `T` in this example:
 *
 * ```ts
 * interface IIdentifier {
 *     getCode(): string;
 * }
 *
 * class BarCode implements IIdentifier {
 *     private _value: number;
 *     public getCode(): string { return this._value.toString(); }
 * }
 *
 * class Book<TIdentifier extends IIdentifier = BarCode> {
 *     public identifier: TIdentifier;
 * }
 * ```
 *
 * `TypeParameter` objects belong to the {@link (ApiTypeParameterListMixin:interface).typeParameters} collection.
 *
 * @public
 */
export declare class TypeParameter {
    /**
     * An {@link Excerpt} that describes the base constraint of the type parameter.
     *
     * @remarks
     * In the example below, the `constraintExcerpt` would correspond to the `IIdentifier` subexpression:
     *
     * ```ts
     * class Book<TIdentifier extends IIdentifier = BarCode> {
     *     public identifier: TIdentifier;
     * }
     * ```
     */
    readonly constraintExcerpt: Excerpt;
    /**
     * An {@link Excerpt} that describes the default type of the type parameter.
     *
     * @remarks
     * In the example below, the `defaultTypeExcerpt` would correspond to the `BarCode` subexpression:
     *
     * ```ts
     * class Book<TIdentifier extends IIdentifier = BarCode> {
     *     public identifier: TIdentifier;
     * }
     * ```
     */
    readonly defaultTypeExcerpt: Excerpt;
    /**
     * The parameter name.
     */
    name: string;
    /**
     * Whether the type parameter is optional. True IFF there exists a `defaultTypeExcerpt`.
     */
    isOptional: boolean;
    private _parent;
    constructor(options: ITypeParameterOptions);
    /**
     * Returns the `@typeParam` documentation for this parameter, if present.
     */
    get tsdocTypeParamBlock(): tsdoc.DocParamBlock | undefined;
}

export { }
