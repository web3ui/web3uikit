"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEnumMember = void 0;
const DeclarationReference_1 = require("@microsoft/tsdoc/lib-commonjs/beta/DeclarationReference");
const ApiItem_1 = require("../items/ApiItem");
const ApiDeclaredItem_1 = require("../items/ApiDeclaredItem");
const ApiReleaseTagMixin_1 = require("../mixins/ApiReleaseTagMixin");
const ApiNameMixin_1 = require("../mixins/ApiNameMixin");
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
class ApiEnumMember extends (0, ApiNameMixin_1.ApiNameMixin)((0, ApiReleaseTagMixin_1.ApiReleaseTagMixin)(ApiDeclaredItem_1.ApiDeclaredItem)) {
    constructor(options) {
        super(options);
        this.initializerExcerpt = this.buildExcerpt(options.initializerTokenRange);
    }
    static getContainerKey(name) {
        // No prefix needed, because ApiEnumMember is the only possible member of an ApiEnum
        return name;
    }
    /** @override */
    static onDeserializeInto(options, context, jsonObject) {
        super.onDeserializeInto(options, context, jsonObject);
        options.initializerTokenRange = jsonObject.initializerTokenRange;
    }
    /** @override */
    get kind() {
        return ApiItem_1.ApiItemKind.EnumMember;
    }
    /** @override */
    get containerKey() {
        return ApiEnumMember.getContainerKey(this.name);
    }
    /** @override */
    serializeInto(jsonObject) {
        super.serializeInto(jsonObject);
        jsonObject.initializerTokenRange = this.initializerExcerpt.tokenRange;
    }
    /** @beta @override */
    buildCanonicalReference() {
        const nameComponent = DeclarationReference_1.DeclarationReference.parseComponent(this.name);
        return (this.parent ? this.parent.canonicalReference : DeclarationReference_1.DeclarationReference.empty())
            .addNavigationStep("." /* Exports */, nameComponent)
            .withMeaning("member" /* Member */);
    }
}
exports.ApiEnumMember = ApiEnumMember;
//# sourceMappingURL=ApiEnumMember.js.map