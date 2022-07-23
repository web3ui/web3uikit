"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const eventemitter3_1 = tslib_1.__importDefault(require("eventemitter3"));
const xhr2_cookies_1 = require("xhr2-cookies");
const utils_1 = require("@walletconnect/utils");
const XHR = (0, utils_1.getFromWindow)("XMLHttpRequest") || xhr2_cookies_1.XMLHttpRequest;
class HTTPConnection extends eventemitter3_1.default {
    constructor(url) {
        super();
        this.url = url;
    }
    formatError(payload, message, code = -1) {
        return {
            error: { message, code },
            id: payload.id,
            jsonrpc: payload.jsonrpc,
        };
    }
    send(payload, internal) {
        return new Promise(resolve => {
            if (payload.method === "eth_subscribe") {
                const error = this.formatError(payload, "Subscriptions are not supported by this HTTP endpoint");
                this.emit("error", error);
                return resolve(error);
            }
            const xhr = new XHR();
            let responded = false;
            const res = (err, result) => {
                if (!responded) {
                    xhr.abort();
                    responded = true;
                    if (internal) {
                        internal(err, result);
                    }
                    else {
                        const { id, jsonrpc } = payload;
                        const response = err
                            ? { id, jsonrpc, error: { message: err.message, code: err.code } }
                            : { id, jsonrpc, result };
                        this.emit("payload", response);
                        resolve(response);
                    }
                }
            };
            xhr.open("POST", this.url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.timeout = 60 * 1000;
            xhr.onerror = res;
            xhr.ontimeout = res;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        res(response.error, response.result);
                    }
                    catch (e) {
                        res(e);
                    }
                }
            };
            xhr.send(JSON.stringify(payload));
        });
    }
}
exports.default = HTTPConnection;
//# sourceMappingURL=index.js.map