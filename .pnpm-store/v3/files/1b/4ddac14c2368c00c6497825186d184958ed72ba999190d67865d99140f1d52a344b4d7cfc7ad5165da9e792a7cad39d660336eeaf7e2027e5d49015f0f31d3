"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTransformStream = void 0;
const through2_1 = require("through2");
function storeTransformStream(syncTransformFn) {
    return through2_1.obj((state, _encoding, cb) => {
        try {
            const newState = syncTransformFn(state);
            cb(null, newState);
            return undefined;
        }
        catch (err) {
            cb(err);
            return undefined;
        }
    });
}
exports.storeTransformStream = storeTransformStream;
//# sourceMappingURL=transform.js.map