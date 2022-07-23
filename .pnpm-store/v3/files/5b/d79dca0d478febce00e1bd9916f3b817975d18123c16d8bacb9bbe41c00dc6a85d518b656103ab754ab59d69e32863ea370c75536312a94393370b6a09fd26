"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.s
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiItemContainerMixin = void 0;
const ApiItem_1 = require("../items/ApiItem");
const ApiNameMixin_1 = require("./ApiNameMixin");
const node_core_library_1 = require("@rushstack/node-core-library");
const _members = Symbol('ApiItemContainerMixin._members');
const _membersSorted = Symbol('ApiItemContainerMixin._membersSorted');
const _membersByContainerKey = Symbol('ApiItemContainerMixin._membersByContainerKey');
const _membersByName = Symbol('ApiItemContainerMixin._membersByName');
const _membersByKind = Symbol('ApiItemContainerMixin._membersByKind');
/**
 * Mixin function for {@link ApiDeclaredItem}.
 *
 * @param baseClass - The base class to be extended
 * @returns A child class that extends baseClass, adding the {@link (ApiItemContainerMixin:interface)} functionality.
 *
 * @public
 */
function ApiItemContainerMixin(baseClass
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    class MixedClass extends baseClass {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args) {
            super(...args);
            const options = args[0];
            this[_members] = [];
            this[_membersByContainerKey] = new Map();
            if (options.members) {
                for (const member of options.members) {
                    this.addMember(member);
                }
            }
        }
        /** @override */
        static onDeserializeInto(options, context, jsonObject) {
            baseClass.onDeserializeInto(options, context, jsonObject);
            options.members = [];
            for (const memberObject of jsonObject.members) {
                options.members.push(ApiItem_1.ApiItem.deserialize(memberObject, context));
            }
        }
        /** @override */
        get members() {
            if (!this[_membersSorted]) {
                node_core_library_1.LegacyAdapters.sortStable(this[_members], (x, y) => x.getSortKey().localeCompare(y.getSortKey()));
                this[_membersSorted] = true;
            }
            return this[_members];
        }
        addMember(member) {
            if (this[_membersByContainerKey].has(member.containerKey)) {
                throw new Error(`Another member has already been added with the same name (${member.displayName})` +
                    ` and containerKey (${member.containerKey})`);
            }
            const existingParent = member.parent;
            if (existingParent !== undefined) {
                throw new Error(`This item has already been added to another container: "${existingParent.displayName}"`);
            }
            this[_members].push(member);
            this[_membersByName] = undefined; // invalidate the lookup
            this[_membersByKind] = undefined; // invalidate the lookup
            this[_membersSorted] = false;
            this[_membersByContainerKey].set(member.containerKey, member);
            member[ApiItem_1.apiItem_onParentChanged](this);
        }
        tryGetMemberByKey(containerKey) {
            return this[_membersByContainerKey].get(containerKey);
        }
        findMembersByName(name) {
            this._ensureMemberMaps();
            return this[_membersByName].get(name) || [];
        }
        /** @internal */
        _getMergedSiblingsForMember(memberApiItem) {
            this._ensureMemberMaps();
            let result;
            if (ApiNameMixin_1.ApiNameMixin.isBaseClassOf(memberApiItem)) {
                result = this[_membersByName].get(memberApiItem.name);
            }
            else {
                result = this[_membersByKind].get(memberApiItem.kind);
            }
            if (!result) {
                throw new node_core_library_1.InternalError('Item was not found in the _membersByName/_membersByKind lookup');
            }
            return result;
        }
        /** @internal */
        _ensureMemberMaps() {
            // Build the _membersByName and _membersByKind tables if they don't already exist
            if (this[_membersByName] === undefined) {
                const membersByName = new Map();
                const membersByKind = new Map();
                for (const member of this[_members]) {
                    let map;
                    let key;
                    if (ApiNameMixin_1.ApiNameMixin.isBaseClassOf(member)) {
                        map = membersByName;
                        key = member.name;
                    }
                    else {
                        map = membersByKind;
                        key = member.kind;
                    }
                    let list = map.get(key);
                    if (list === undefined) {
                        list = [];
                        map.set(key, list);
                    }
                    list.push(member);
                }
                this[_membersByName] = membersByName;
                this[_membersByKind] = membersByKind;
            }
        }
        /** @override */
        serializeInto(jsonObject) {
            super.serializeInto(jsonObject);
            const memberObjects = [];
            for (const member of this.members) {
                const memberJsonObject = {};
                member.serializeInto(memberJsonObject);
                memberObjects.push(memberJsonObject);
            }
            jsonObject.members = memberObjects;
        }
    }
    return MixedClass;
}
exports.ApiItemContainerMixin = ApiItemContainerMixin;
/**
 * Static members for {@link (ApiItemContainerMixin:interface)}.
 * @public
 */
(function (ApiItemContainerMixin) {
    /**
     * A type guard that tests whether the specified `ApiItem` subclass extends the `ApiItemContainerMixin` mixin.
     *
     * @remarks
     *
     * The JavaScript `instanceof` operator cannot be used to test for mixin inheritance, because each invocation of
     * the mixin function produces a different subclass.  (This could be mitigated by `Symbol.hasInstance`, however
     * the TypeScript type system cannot invoke a runtime test.)
     */
    function isBaseClassOf(apiItem) {
        return apiItem.hasOwnProperty(_members);
    }
    ApiItemContainerMixin.isBaseClassOf = isBaseClassOf;
})(ApiItemContainerMixin = exports.ApiItemContainerMixin || (exports.ApiItemContainerMixin = {}));
//# sourceMappingURL=ApiItemContainerMixin.js.map