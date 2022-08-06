import { DeclarationReference } from '@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference';
import { ApiItemKind } from '../items/ApiItem';
import { ApiDeclaredItem, IApiDeclaredItemOptions, IApiDeclaredItemJson } from '../items/ApiDeclaredItem';
import { ApiReleaseTagMixin, IApiReleaseTagMixinOptions } from '../mixins/ApiReleaseTagMixin';
import { Excerpt, IExcerptTokenRange } from '../mixins/Excerpt';
import { IApiNameMixinOptions, ApiNameMixin } from '../mixins/ApiNameMixin';
import { DeserializerContext } from './DeserializerContext';
/**
 * Constructor options for {@link ApiEnumMember}.
 * @public
 */
export interface IApiEnumMemberOptions extends IApiNameMixinOptions, IApiReleaseTagMixinOptions, IApiDeclaredItemOptions {
    initializerTokenRange: IExcerptTokenRange;
}
export interface IApiEnumMemberJson extends IApiDeclaredItemJson {
    initializerTokenRange: IExcerptTokenRange;
}
declare const ApiEnumMember_base: typeof ApiDeclaredItem & (new (...args: any[]) => ApiReleaseTagMixin) & (new (...args: any[]) => ApiNameMixin);
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
export {};
//# sourceMappingURL=ApiEnumMember.d.ts.map