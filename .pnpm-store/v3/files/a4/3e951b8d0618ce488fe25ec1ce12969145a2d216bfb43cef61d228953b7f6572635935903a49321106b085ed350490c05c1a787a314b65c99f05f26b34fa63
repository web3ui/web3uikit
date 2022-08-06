/**
 * Represents a data structure of JSDoc keywords, like a `@type {string}`
 */
export interface JSDocKeyword {
    /**
     * The name of keyword.
     * @example for `@param {string} Description of this property`, this field equals a `param`.
     */
    name: string;
    /**
     * The description of keyword.
     * @example for `@param {string} Description of this property`, this field equals a `{string} Description of this property`.
     */
    description: string;
}

export type JSDocTypeKind = 'type' | 'const' | 'union' | 'function';

export interface JSDocTypeBase {
    /**
     * The kind of JSDocType object.
     * That property can identify which additional properties included in that object.
     * 
     * @see JSDocTypeElement
     * @see JSDocTypeConst
     * @see JSDocTypeUnion
     * @see JSDocTypeFunction
     */
    kind: JSDocTypeKind;
    /**
     * The text representation of this type.
     */
    text: string;
}

export interface JSDocTypeElement extends JSDocTypeBase {
    kind: 'type';
    /**
     * The name of JS type.
     */
    type: string;
    /**
     * Provide the path from where this event are imported.
     * Emited only if JSDoc have {import()} statement.
     *
     * @example
     * For example, lets check the following JSDoc comment:
     * ```js
     * /**
     *  * @param {import('./typings.d.ts').ImportedObjectType}
     *  *\/
     * ```
     * Then we got the `./typings.d.ts` value for `importPath` property.
     */
    importPath?: string;
}

export interface JSDocTypeConst extends JSDocTypeBase {
    kind: 'const';
    /**
     * The name of JS type.
     */
    type: string;
    /**
     * The constant value related to this type, if can be provided.
     */
    value?: any;
}

export interface JSDocTypeUnion extends JSDocTypeBase {
    kind: 'union';
    /**
     * The list of possible types.
     */
    type: JSDocType[];
}

export interface IMethodDefinition {
    /**
     * The list of parameter items of the function expression.
     */
    params?: SvelteMethodParamItem[];
    /**
      * The return item of the function expression. This exists if an item with 'name' equal
      * to 'returns' or 'return' exists in 'keywords'.
      */
    return?: SvelteMethodReturnItem;
}

/**
 * @since {4.2.0}
 */
export interface JSDocTypeFunction extends JSDocTypeBase, IMethodDefinition {
    kind: 'function';    
}

export type JSDocType = JSDocTypeElement | JSDocTypeConst | JSDocTypeUnion | JSDocTypeFunction;

/**
 * Represents a source location of symbol.
 */
export interface SourceLocation {
    /**
     * The symbol start offset from document beginning.
     */
    start: number;

    /**
     * The symbol end offset from document beginning.
     */
    end: number;
}

export type JSVisibilityScope = 'public' | 'protected' | 'private';

export type JSVariableDeclarationKind = 'var' | 'let' | 'const';

export interface IScopedCommentItem {
    /**
     * The description of the item, provided from related comment.
     */
    description?: string | null;
    /**
     * The visibility of item.
     */
    visibility?: JSVisibilityScope;
    /**
     * The list of parsed JSDoc keywords from related comment.
     */
    keywords?: JSDocKeyword[];
}

export interface ISvelteItem extends IScopedCommentItem {
    /**
     * The name of the item.
     */
    name: string;

    /**
     * The list of source code locations for this item.
     * Provided only if requested by specific option parameter.
     */
    locations?: SourceLocation[];
}

export interface SvelteDataBindMapping {
    /**
     * The parent component name or DOM element from which are was binded.
     */
    source: string;

    /**
     * The name of the property which are was binded.
     */
    property: string;
}

export interface SvelteDataItem extends ISvelteItem {
    /**
     * The JS type of property.
     */
    type?: JSDocType;
    /**
     * Kind of variable declaration.
     * @since Svelte V3
     * @since {2.0.0}
     */
    kind?: JSVariableDeclarationKind;
    /**
     * Provides information about property binding.
     * @since Svelte V3
     * @since {2.1.0}
     */
    bind?: SvelteDataBindMapping[];
    /**
     * Indicates that this data item of component located in static context.
     * Variable should be declared in `<script context="module" />` block.
     * @since Svelte V3
     * @since {2.0.0}
     */
    static?: boolean;
    /**
     * Indicates that this data item is declared as a readonly variable.
     * @since Svelte V3
     * @since {2.0.0}
     */
    readonly?: boolean;
    /**
     * The default value of property, if provided.
     */
    defaultValue?: any;

    /**
     * The original name of the imported item.
     * Used when aliace are used in import statement.
     * @since Svelte V3
     * @since {2.2.0}
     */
    originalName?: string;

    /**
     * The local name of the prop that was exported with aliace statement
     * @example
     * ```js
     * const local = 1;
     * export { local as public };
     * // `name` of this item will be `'public'`
     * // `localName` of this item will be `'local'`
     * ```
     * @since {3.0.1}
     */
    localName?: string;

    /**
     * The relative path of importing of this object.
     * When not defined, so variable is not provided.
     * @since Svelte V3
     * @since {2.2.0}
     */
    importPath?: string;
}

export interface SvelteComputedItem extends ISvelteItem {
    /**
     * The list of data or computed properties names, marked as depended to this property.
     */
    dependencies: string[];
}

export interface SvelteMethodParamItem {
    /**
     * The name of method parameter.
     */
    name: string;
    /**
     * The JS type.
     */
    type: JSDocType;
    /**
     * Indicates, that this parameter is repeated.
     */
    repeated?: boolean;
    /**
     * Indicates, that this parameter is optional.
     */
    optional?: boolean;
    /**
     * The default value of optional parameter.
     * @since {4.0.0}
     */
    defaultValue?: string;
    /**
     * The description of the parameter.
     * @since {4.0.0}
     */
    description?: string;
    /**
     * Indicates that this data item of component located in static context.
     * Variable should be declared in `<script context="module" />` block.
     * @since Svelte V3
     * @since {2.0.0}
     */
    static?: boolean;
}

export interface SvelteMethodReturnItem {
    /**
     * The JSDocType of the return value.
     */
    type: JSDocType;

    /**
     * The description of the return value.
     */
    description?: string;
}

export interface SvelteMethodItem extends ISvelteItem, IMethodDefinition {
}

export interface SvelteComponentItem extends ISvelteItem {
    /**
     * The relative path of importing of this object.
     * When not defined, so variable is not provided.
     * @since Svelte V3
     * @since {2.2.0}
     */
    importPath?: string;
}

/**
 * Represents the event modificators.
 *
 * @since Svelte V2.5
 * @since Svelte V3
 * @since {2.0.0}
 */
export type SvelteEventModificator =
    | 'preventDefault'
    | 'stopPropagation'
    | 'passive'
    | 'capture'
    | 'once'
    | 'nonpassive'
    | 'self'
    | 'trusted';

export interface SvelteEventItem extends ISvelteItem {
    /**
     * The name of HTML element if propagated standart JS Dom event or null.
     */
    parent?: string | null;

    /**
     * The list of event modificators.
     */
    modificators?: SvelteEventModificator[];
}

/**
 * The exposed slot parameter.
 * @since Svelte V3
 * @since {2.0.0}
 */
export interface SvelteSlotParameter {
    /**
     * The name of slot parameter.
     */
    name: string;
    /**
     * The JSDocType of the slot parameter value.
     * @since {4.1.0}
     */
    type: JSDocType;
    /**
     * The description of the slot parameter.
     * @since {4.1.0}
     */
    description?: string;
}

export interface SvelteSlotItem extends ISvelteItem {
    /**
     * List of exposed slot parameters.
     * @since Svelte V3
     * @since {2.0.0}
     * @deprecated @see params property instead
     */
    parameters?: SvelteSlotParameter[];

    /**
     * List of exposed slot parameters.
     * @since Svelte V3
     * @since {4.1.0}
     */
    params?: SvelteSlotParameter[];
}

export interface SvelteRefItem extends ISvelteItem {
    /**
     * The name of HTML element or component that binded with this ref name.
     */
    parent?: string | null;
}

/**
 * Represents a Svelte component documentation object.
 */
export interface SvelteComponentDoc {
    /**
     * The name of the parsed component.
     */
    name?: string | null;
    /**
     * The Svelte compiler version that used for this document.
     */
    version?: number;
    /**
     * The component description.
     */
    description?: string | null;

    /**
     * The list of defined model properties.
     */
    data?: SvelteDataItem[];
    /**
     * The list of defined computed properties of component.
     */
    computed?: SvelteComputedItem[];

    /**
     * The list of included components.
     */
    components?: SvelteComponentItem[];
    /**
     * The list of fired events from parsed component.
     */
    events?: SvelteEventItem[];
    /**
     * The list of provided slots.
     */
    slots?: SvelteSlotItem[];
    /**
     * The list of references to nodes and components.
     */
    refs?: SvelteRefItem[];

    /**
     * The list of attached methods.
     */
    methods?: SvelteMethodItem[];
    /**
     * The list of attached actions.
     */
    actions?: SvelteMethodItem[];
    /**
     * The list of attached helpers.
     */
    helpers?: SvelteMethodItem[];
    /**
     * The list of transition methods to animate DOM elements.
     */
    transitions?: SvelteMethodItem[];

    /**
     * The list of event dispatchers that was created in this component.
     * @since Svelte V3
     * @since {2.1.0}
     */
    dispatchers?: SvelteMethodItem[];
}

/**
 * Features supported by the Svelte 2 parser.
 */
export enum Svelte2Feature {
    name = 'name',
    data = 'data',
    computed = 'computed',
    methods = 'methods',
    actions = 'actions',
    helpers = 'helpers',
    components = 'components',
    description = 'description',
    keywords = 'keywords',
    events = 'events',
    slots = 'slots',
    transitions = 'transitions',
    refs = 'refs',
    store = 'store',
}

/**
 * Features supported by the Svelte 3 parser.
 */
export enum Svelte3Feature {
    name = 'name',
    data = 'data',
    computed = 'computed',
    methods = 'methods',
    components = 'components',
    description = 'description',
    keywords = 'keywords',
    events = 'events',
    slots = 'slots',
    refs = 'refs',
}

type Svelte2FeatureKeys = keyof typeof Svelte2Feature;
type Svelte3FeatureKeys = keyof typeof Svelte3Feature;
type SvelteFeatureKeys = Svelte2FeatureKeys | Svelte3FeatureKeys;
type Svelte2ExclusiveFeature = Exclude<Svelte2FeatureKeys, Svelte3FeatureKeys>;
type Svelte3ExclusiveFeature = Exclude<Svelte3FeatureKeys, Svelte2FeatureKeys>;

/**
 * Supported Svelte versions.
 */
export type SvelteVersion = 2 | 3;

interface BaseParserOptions<
    V extends SvelteVersion,
    F extends SvelteFeatureKeys
> {
    /**
     * The filename to parse. Required unless fileContent is passed.
     */
    filename?: string;

    /**
     * The file content to parse. Required unless filename is passed.
     */
    fileContent?: string;

    /**
     * @default 'utf8'
     */
    encoding?: BufferEncoding;

    /**
     * The component features to parse and extract.
     * Uses all supported features by default.
     * @see Svelte2Feature
     * @see Svelte3Feature
     */
    features?: F[];

    /**
     * The list of ignored visibilities. Use an empty array to export all
     * visibilities.
     * @default ['private','protected']
     */
    ignoredVisibilities?: JSVisibilityScope[];

    /**
     * Indicates that source locations should be provided for component symbols.
     * @default false
     */
    includeSourceLocations?: boolean;

    /**
     * Optional. Use 2 or 3 to specify which svelte syntax should be used.
     * When version is not provided, the parser tries to detect which version
     * of the syntax to use.
     */
    version?: V;

    /**
     * Optional. Specify which version of svelte syntax to fallback to if the
     * parser can't identify the version used.
     */
    defaultVersion?: V;
}

/**
 * Options to pass to the main parse function.
 *
 * @example
 * const options = {
 *     filename: 'main.svelte',
 *     encoding: 'ascii',
 *     features: ['data', 'computed', 'methods'],
 *     ignoredVisibilities: ['private'],
 *     includeSourceLocations: true,
 *     version: 3
 * };
 */
export type SvelteParserOptions =
    | BaseParserOptions<3, Svelte3FeatureKeys>
    | BaseParserOptions<2, Svelte2FeatureKeys>;

declare module 'sveltedoc-parser' {
    /**
     * Parse the svelte source file to structured object.
     *
     * @param options The parser options
     * @example
     * ```js
     * const { parse } = require('sveltedoc-parser');
     * // basic usage only requires 'filename' to be set.
     * const doc = await parse({
     *     filename: 'main.svelte',
     *     encoding: 'ascii',
     *     features: ['data', 'computed', 'methods'],
     *     ignoredVisibilities: ['private'],
     *     includeSourceLocations: true,
     *     version: 3
     * });
     * ```
     * @return Promise with parsed document structure.
     */
    export function parse(
        options: SvelteParserOptions
    ): Promise<SvelteComponentDoc>;

    /**
     * Try to detect svelte source file version.
     *
     * @param options The parser options
     * @return The detected version of svelte source file.
     */
    export function detectVersion(options: SvelteParserOptions): number;

    export const SVELTE_VERSION_2: number;
    export const SVELTE_VERSION_3: number;
}
