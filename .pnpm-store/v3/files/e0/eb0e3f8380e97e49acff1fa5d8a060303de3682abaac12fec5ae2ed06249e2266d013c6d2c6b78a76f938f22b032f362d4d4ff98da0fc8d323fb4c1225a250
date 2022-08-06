import { AstEntity } from '../analyzer/AstEntity';
import { AstNamespaceImport } from '../analyzer/AstNamespaceImport';
/**
 * This is a data structure used by the Collector to track an AstEntity that may be emitted in the *.d.ts file.
 *
 * @remarks
 * The additional contextual state beyond AstSymbol is:
 * - Whether it's an export of this entry point or not
 * - The nameForEmit, which may get renamed by DtsRollupGenerator._makeUniqueNames()
 * - The export name (or names, if the same symbol is exported multiple times)
 */
export declare class CollectorEntity {
    /**
     * The AstEntity that this entry represents.
     */
    readonly astEntity: AstEntity;
    private _exportNames;
    private _exportNamesSorted;
    private _singleExportName;
    private _nameForEmit;
    private _sortKey;
    private _astNamespaceImports;
    constructor(astEntity: AstEntity);
    /**
     * The declaration name that will be emitted in a .d.ts rollup.  For non-exported declarations,
     * Collector._makeUniqueNames() may need to rename the declaration to avoid conflicts with other declarations
     * in that module.
     */
    get nameForEmit(): string | undefined;
    set nameForEmit(value: string | undefined);
    /**
     * If this symbol is exported from the entry point, the list of export names.
     *
     * @remarks
     * Note that a given symbol may be exported more than once:
     * ```
     * class X { }
     * export { X }
     * export { X as Y }
     * ```
     */
    get exportNames(): ReadonlySet<string>;
    /**
     * If exportNames contains only one string, then singleExportName is that string.
     * In all other cases, it is undefined.
     */
    get singleExportName(): string | undefined;
    /**
     * This is true if exportNames contains only one string, and the declaration can be exported using the inline syntax
     * such as "export class X { }" instead of "export { X }".
     */
    get shouldInlineExport(): boolean;
    /**
     * Returns true if this symbol is an export for the entry point being analyzed.
     */
    get exported(): boolean;
    /**
     * Indicates that it is possible for a consumer of the API to access this declaration, either by importing
     * it directly, or via some other alias such as a member of a namespace.  If a collector entity is not consumable,
     * then API Extractor will report a ExtractorMessageId.ForgottenExport warning.
     *
     * @remarks
     * Generally speaking, an API item is consumable if:
     *
     * - The collector encounters it while crawling the entry point, and it is a root symbol
     *   (i.e. there is a corresponding a CollectorEntity)
     *
     * - AND it is exported by the entry point
     *
     * However a special case occurs with `AstNamespaceImport` which produces a rollup like this:
     *
     * ```ts
     * declare interface IForgottenExport { }
     *
     * declare function member(): IForgottenExport;
     *
     * declare namespace ns {
     *   export {
     *     member
     *   }
     * }
     * export { ns }
     * ```
     *
     * In this example, `IForgottenExport` is not consumable.  Whereas `member()` is consumable as `ns.member()`
     * even though `member()` itself is not exported.
     */
    get consumable(): boolean;
    /**
     * Associates this entity with a `AstNamespaceImport`.
     */
    addAstNamespaceImports(astNamespaceImport: AstNamespaceImport): void;
    /**
     * Adds a new exportName to the exportNames set.
     */
    addExportName(exportName: string): void;
    /**
     * A sorting key used by DtsRollupGenerator._makeUniqueNames()
     */
    getSortKey(): string;
}
//# sourceMappingURL=CollectorEntity.d.ts.map