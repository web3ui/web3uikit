"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Documentation_props, _Documentation_context, _Documentation_childContext, _Documentation_composes, _Documentation_data;
Object.defineProperty(exports, "__esModule", { value: true });
class Documentation {
    constructor() {
        _Documentation_props.set(this, void 0);
        _Documentation_context.set(this, void 0);
        _Documentation_childContext.set(this, void 0);
        _Documentation_composes.set(this, void 0);
        _Documentation_data.set(this, void 0);
        __classPrivateFieldSet(this, _Documentation_props, new Map(), "f");
        __classPrivateFieldSet(this, _Documentation_context, new Map(), "f");
        __classPrivateFieldSet(this, _Documentation_childContext, new Map(), "f");
        __classPrivateFieldSet(this, _Documentation_composes, new Set(), "f");
        __classPrivateFieldSet(this, _Documentation_data, new Map(), "f");
    }
    addComposes(moduleName) {
        __classPrivateFieldGet(this, _Documentation_composes, "f").add(moduleName);
    }
    set(key, value) {
        __classPrivateFieldGet(this, _Documentation_data, "f").set(key, value);
    }
    get(key) {
        return __classPrivateFieldGet(this, _Documentation_data, "f").get(key);
    }
    getPropDescriptor(propName) {
        let propDescriptor = __classPrivateFieldGet(this, _Documentation_props, "f").get(propName);
        if (!propDescriptor) {
            __classPrivateFieldGet(this, _Documentation_props, "f").set(propName, (propDescriptor = {}));
        }
        return propDescriptor;
    }
    getContextDescriptor(propName) {
        let propDescriptor = __classPrivateFieldGet(this, _Documentation_context, "f").get(propName);
        if (!propDescriptor) {
            __classPrivateFieldGet(this, _Documentation_context, "f").set(propName, (propDescriptor = {}));
        }
        return propDescriptor;
    }
    getChildContextDescriptor(propName) {
        let propDescriptor = __classPrivateFieldGet(this, _Documentation_childContext, "f").get(propName);
        if (!propDescriptor) {
            __classPrivateFieldGet(this, _Documentation_childContext, "f").set(propName, (propDescriptor = {}));
        }
        return propDescriptor;
    }
    toObject() {
        const obj = {};
        for (const [key, value] of __classPrivateFieldGet(this, _Documentation_data, "f")) {
            obj[key] = value;
        }
        if (__classPrivateFieldGet(this, _Documentation_props, "f").size > 0) {
            obj.props = {};
            for (const [propName, propDescriptor] of __classPrivateFieldGet(this, _Documentation_props, "f")) {
                if (Object.keys(propDescriptor).length > 0) {
                    obj.props[propName] = propDescriptor;
                }
            }
        }
        if (__classPrivateFieldGet(this, _Documentation_context, "f").size > 0) {
            obj.context = {};
            for (const [contextName, contextDescriptor] of __classPrivateFieldGet(this, _Documentation_context, "f")) {
                if (Object.keys(contextDescriptor).length > 0) {
                    obj.context[contextName] = contextDescriptor;
                }
            }
        }
        if (__classPrivateFieldGet(this, _Documentation_childContext, "f").size > 0) {
            obj.childContext = {};
            for (const [childContextName, childContextDescriptor] of __classPrivateFieldGet(this, _Documentation_childContext, "f")) {
                obj.childContext[childContextName] = childContextDescriptor;
            }
        }
        if (__classPrivateFieldGet(this, _Documentation_composes, "f").size > 0) {
            obj.composes = Array.from(__classPrivateFieldGet(this, _Documentation_composes, "f"));
        }
        return obj;
    }
}
exports.default = Documentation;
_Documentation_props = new WeakMap(), _Documentation_context = new WeakMap(), _Documentation_childContext = new WeakMap(), _Documentation_composes = new WeakMap(), _Documentation_data = new WeakMap();
