import { ApiItem, IApiItemJson, IApiItemOptions, IApiItemConstructor } from '../items/ApiItem';
/**
 * Constructor options for {@link (ApiItemContainerMixin:interface)}.
 * @public
 */
export interface IApiItemContainerMixinOptions extends IApiItemOptions {
    members?: ApiItem[];
}
export interface IApiItemContainerJson extends IApiItemJson {
    members: IApiItemJson[];
}
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
export interface ApiItemContainerMixin extends ApiItem {
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
 * Mixin function for {@link ApiDeclaredItem}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiItemContainerMixin:interface)} functionality.
 *
 * @public
 */
export declare function ApiItemContainerMixin<TBaseClass extends IApiItemConstructor>(baseClass: TBaseClass): TBaseClass & (new (...args: any[]) => ApiItemContainerMixin);
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
    function isBaseClassOf(apiItem: ApiItem): apiItem is ApiItemContainerMixin;
}
//# sourceMappingURL=ApiItemContainerMixin.d.ts.map