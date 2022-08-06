"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.PERSISTENCY_KEY = void 0;
const set_cookie_parser_1 = require("set-cookie-parser");
exports.PERSISTENCY_KEY = 'MSW_COOKIE_STORE';
function supportsLocalStorage() {
    try {
        if (localStorage == null) {
            return false;
        }
        const testKey = exports.PERSISTENCY_KEY + '_test';
        localStorage.setItem(testKey, 'test');
        localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        return true;
    }
    catch (error) {
        return false;
    }
}
class CookieStore {
    constructor() {
        this.store = new Map();
    }
    /**
     * Sets the given request cookies into the store.
     * Respects the `request.credentials` policy.
     */
    add(request, response) {
        if (request.credentials === 'omit') {
            return;
        }
        const requestUrl = new URL(request.url);
        const responseCookies = response.headers.get('set-cookie');
        if (!responseCookies) {
            return;
        }
        const now = Date.now();
        const parsedResponseCookies = set_cookie_parser_1.parse(responseCookies).map((_a) => {
            var { maxAge } = _a, cookie = __rest(_a, ["maxAge"]);
            return (Object.assign(Object.assign({}, cookie), { expires: maxAge === undefined ? cookie.expires : new Date(now + maxAge * 1000), maxAge }));
        });
        const prevCookies = this.store.get(requestUrl.origin) || new Map();
        parsedResponseCookies.forEach((cookie) => {
            this.store.set(requestUrl.origin, prevCookies.set(cookie.name, cookie));
        });
    }
    /**
     * Returns cookies relevant to the given request
     * and its `request.credentials` policy.
     */
    get(request) {
        this.deleteExpiredCookies();
        const requestUrl = new URL(request.url);
        const originCookies = this.store.get(requestUrl.origin) || new Map();
        switch (request.credentials) {
            case 'include': {
                const documentCookies = set_cookie_parser_1.parse(document.cookie);
                documentCookies.forEach((cookie) => {
                    originCookies.set(cookie.name, cookie);
                });
                return originCookies;
            }
            case 'same-origin': {
                return originCookies;
            }
            default:
                return new Map();
        }
    }
    /**
     * Returns a collection of all stored cookies.
     */
    getAll() {
        this.deleteExpiredCookies();
        return this.store;
    }
    /**
     * Deletes all cookies associated with the given request.
     */
    deleteAll(request) {
        const requestUrl = new URL(request.url);
        this.store.delete(requestUrl.origin);
    }
    /**
     * Clears the entire cookie store.
     */
    clear() {
        this.store.clear();
    }
    /**
     * Hydrates the virtual cookie store from the `localStorage` if defined.
     */
    hydrate() {
        if (!supportsLocalStorage()) {
            return;
        }
        const persistedCookies = localStorage.getItem(exports.PERSISTENCY_KEY);
        if (!persistedCookies) {
            return;
        }
        try {
            const parsedCookies = JSON.parse(persistedCookies);
            parsedCookies.forEach(([origin, cookies]) => {
                this.store.set(origin, new Map(cookies.map((_a) => {
                    var [token, _b] = _a, { expires } = _b, cookie = __rest(_b, ["expires"]);
                    return [
                        token,
                        expires === undefined
                            ? cookie
                            : Object.assign(Object.assign({}, cookie), { expires: new Date(expires) }),
                    ];
                })));
            });
        }
        catch (error) {
            console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${exports.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(exports.PERSISTENCY_KEY)}

Thrown exception:
${error}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`);
            localStorage.removeItem(exports.PERSISTENCY_KEY);
        }
    }
    /**
     * Persists the current virtual cookies into the `localStorage` if defined,
     * so they are available on the next page load.
     */
    persist() {
        if (!supportsLocalStorage()) {
            return;
        }
        const serializedCookies = Array.from(this.store.entries()).map(([origin, cookies]) => {
            return [origin, Array.from(cookies.entries())];
        });
        localStorage.setItem(exports.PERSISTENCY_KEY, JSON.stringify(serializedCookies));
    }
    deleteExpiredCookies() {
        const now = Date.now();
        this.store.forEach((originCookies, origin) => {
            originCookies.forEach(({ expires, name }) => {
                if (expires !== undefined && expires.getTime() <= now) {
                    originCookies.delete(name);
                }
            });
            if (originCookies.size === 0) {
                this.store.delete(origin);
            }
        });
    }
}
exports.store = new CookieStore();
