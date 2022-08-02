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
exports.CollectorEntity = void 0;
const ts = __importStar(require("typescript"));
const AstSymbol_1 = require("../analyzer/AstSymbol");
const Collector_1 = require("./Collector");
const node_core_library_1 = require("@rushstack/node-core-library");
/**
 * This is a data structure used by the Collector to track an AstEntity that may be emitted in the *.d.ts file.
 *
 * @remarks
 * The additional contextual state beyond AstSymbol is:
 * - Whether it's an export of this entry point or not
 * - The nameForEmit, which may get renamed by DtsRollupGenerator._makeUniqueNames()
 * - The export name (or names, if the same symbol is exported multiple times)
 */
class CollectorEntity {
    constructor(astEntity) {
        this._exportNames = new Set();
        this._exportNamesSorted = false;
        this._singleExportName = undefined;
        this._nameForEmit = undefined;
        this._sortKey = undefined;
        this._astNamespaceImports = new Set();
        this.astEntity = astEntity;
    }
    /**
     * The declaration name that will be emitted in a .d.ts rollup.  For non-exported declarations,
     * Collector._makeUniqueNames() may need to rename the declaration to avoid conflicts with other declarations
     * in that module.
     */
    get nameForEmit() {
        return this._nameForEmit;
    }
    set nameForEmit(value) {
        this._nameForEmit = value;
        this._sortKey = undefined; // invalidate the cached value
    }
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
    get exportNames() {
        if (!this._exportNamesSorted) {
            node_core_library_1.Sort.sortSet(this._exportNames);
            this._exportNamesSorted = true;
        }
        return this._exportNames;
    }
    /**
     * If exportNames contains only one string, then singleExportName is that string.
     * In all other cases, it is undefined.
     */
    get singleExportName() {
        return this._singleExportName;
    }
    /**
     * This is true if exportNames contains only one string, and the declaration can be exported using the inline syntax
     * such as "export class X { }" instead of "export { X }".
     */
    get shouldInlineExport() {
        // We don't inline an AstImport
        if (this.astEntity instanceof AstSymbol_1.AstSymbol) {
            // We don't inline a symbol with more than one exported name
            if (this._singleExportName !== undefined && this._singleExportName !== ts.InternalSymbolName.Default) {
                // We can't inline a symbol whose emitted name is different from the export name
                if (this._nameForEmit === undefined || this._nameForEmit === this._singleExportName) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Returns true if this symbol is an export for the entry point being analyzed.
     */
    get exported() {
        return this.exportNames.size > 0;
    }
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
    get consumable() {
        return this.exported || this._astNamespaceImports.size > 0;
    }
    /**
     * Associates this entity with a `AstNamespaceImport`.
     */
    addAstNamespaceImports(astNamespaceImport) {
        this._astNamespaceImports.add(astNamespaceImport);
    }
    /**
     * Adds a new exportName to the exportNames set.
     */
    addExportName(exportName) {
        if (!this._exportNames.has(exportName)) {
            this._exportNamesSorted = false;
            this._exportNames.add(exportName);
            if (this._exportNames.size === 1) {
                this._singleExportName = exportName;
            }
            else {
                this._singleExportName = undefined;
            }
        }
    }
    /**
     * A sorting key used by DtsRollupGenerator._makeUniqueNames()
     */
    getSortKey() {
        if (!this._sortKey) {
            this._sortKey = Collector_1.Collector.getSortKeyIgnoringUnderscore(this.nameForEmit || this.astEntity.localName);
        }
        return this._sortKey;
    }
}
exports.CollectorEntity = CollectorEntity;
//# sourceMappingURL=CollectorEntity.js.map