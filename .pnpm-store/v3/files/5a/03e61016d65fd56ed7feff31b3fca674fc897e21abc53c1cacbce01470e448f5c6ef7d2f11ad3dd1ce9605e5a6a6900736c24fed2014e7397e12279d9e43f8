"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiVariable = void 0;
const DeclarationReference_1 = require("@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference");
const ApiItem_1 = require("../items/ApiItem");
const ApiDeclaredItem_1 = require("../items/ApiDeclaredItem");
const ApiReleaseTagMixin_1 = require("../mixins/ApiReleaseTagMixin");
const ApiNameMixin_1 = require("../mixins/ApiNameMixin");
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
class ApiVariable extends (0, ApiNameMixin_1.ApiNameMixin)((0, ApiReleaseTagMixin_1.ApiReleaseTagMixin)(ApiDeclaredItem_1.ApiDeclaredItem)) {
    constructor(options) {
        super(options);
        this.variableTypeExcerpt = this.buildExcerpt(options.variableTypeTokenRange);
    }
    /** @override */
    static onDeserializeInto(options, context, jsonObject) {
        super.onDeserializeInto(options, context, jsonObject);
        options.variableTypeTokenRange = jsonObject.variableTypeTokenRange;
    }
    static getContainerKey(name) {
        return `${name}|${ApiItem_1.ApiItemKind.Variable}`;
    }
    /** @override */
    get kind() {
        return ApiItem_1.ApiItemKind.Variable;
    }
    /** @override */
    get containerKey() {
        return ApiVariable.getContainerKey(this.name);
    }
    /** @override */
    serializeInto(jsonObject) {
        super.serializeInto(jsonObject);
        jsonObject.variableTypeTokenRange = this.variableTypeExcerpt.tokenRange;
    }
    /** @beta @override */
    buildCanonicalReference() {
        const nameComponent = DeclarationReference_1.DeclarationReference.parseComponent(this.name);
        return (this.parent ? this.parent.canonicalReference : DeclarationReference_1.DeclarationReference.empty())
            .addNavigationStep("." /* Exports */, nameComponent)
            .withMeaning("var" /* Variable */);
    }
}
exports.ApiVariable = ApiVariable;
//# sourceMappingURL=ApiVariable.js.map