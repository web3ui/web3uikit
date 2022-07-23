"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mswDecorator = exports.getWorker = exports.initializeWorker = exports.initialize = void 0;
var is_node_process_1 = require("is-node-process");
var IS_BROWSER = !(0, is_node_process_1.isNodeProcess)();
var api;
function initialize(options) {
    var _a;
    if (IS_BROWSER) {
        var setupWorker = require('msw').setupWorker;
        var worker = setupWorker();
        worker.start(options);
        api = worker;
    }
    else {
        /**
         * Webpack 5 does not provide node polyfills as it did before.
         * Also, it can't tell whether a code will be executed at runtime, so it has to process everything.
         * This branch of the conditional statement will NEVER run in the browser, but Webpack can't know so
         * it breaks builds unless we start providing node polyfills.
         *
         * As a workaround, we use __non_webpack_require__ to tell Webpack to ignore this, and we define it
         * to globalThis so it works correctly when running in node.
         * @see https://github.com/webpack/webpack/issues/8826#issuecomment-660594260
         */
        var nodeVer = typeof process !== "undefined" && ((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node);
        var nodeRequire = nodeVer
            ? typeof __webpack_require__ === "function"
                ? __non_webpack_require__
                : require
            : undefined;
        var setupServer = nodeRequire('msw/node').setupServer;
        var server = setupServer();
        server.listen(options);
        api = server;
    }
    return api;
}
exports.initialize = initialize;
function initializeWorker(options) {
    console.warn("[MSW] \"initializeWorker\" is now deprecated, please use \"initialize\" instead. This method will be removed in future releases.");
    return initialize(options);
}
exports.initializeWorker = initializeWorker;
function getWorker() {
    if (api === undefined) {
        throw new Error("[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call \"initialize\"?");
    }
    return api;
}
exports.getWorker = getWorker;
var mswDecorator = function (storyFn, context) {
    var msw = context.parameters.msw;
    if (api) {
        api.resetHandlers();
        if (msw) {
            if (Array.isArray(msw) && msw.length > 0) {
                // Support an Array of request handlers (backwards compatability).
                api.use.apply(api, msw);
            }
            else if ('handlers' in msw && msw.handlers) {
                // Support an Array named request handlers handlers
                // or an Object of named request handlers with named arrays of handlers
                var handlers = Object.values(msw.handlers)
                    .filter(Boolean)
                    .reduce(function (handlers, handlersList) { return handlers.concat(handlersList); }, []);
                if (handlers.length > 0) {
                    api.use.apply(api, handlers);
                }
            }
        }
    }
    return storyFn();
};
exports.mswDecorator = mswDecorator;
