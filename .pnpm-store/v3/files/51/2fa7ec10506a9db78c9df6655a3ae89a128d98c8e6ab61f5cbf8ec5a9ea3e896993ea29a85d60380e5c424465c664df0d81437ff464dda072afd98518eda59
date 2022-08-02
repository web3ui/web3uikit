"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = tslib_1.__importDefault(require("@walletconnect/client"));
const qrcode_modal_1 = tslib_1.__importDefault(require("@walletconnect/qrcode-modal"));
const http_connection_1 = tslib_1.__importDefault(require("@walletconnect/http-connection"));
const utils_1 = require("@walletconnect/utils");
const ProviderEngine = require("web3-provider-engine");
const CacheSubprovider = require("web3-provider-engine/subproviders/cache");
const FixtureSubprovider = require("web3-provider-engine/subproviders/fixture");
const FilterSubprovider = require("web3-provider-engine/subproviders/filters");
const HookedWalletSubprovider = require("web3-provider-engine/subproviders/hooked-wallet");
const NonceSubprovider = require("web3-provider-engine/subproviders/nonce-tracker");
const SubscriptionsSubprovider = require("web3-provider-engine/subproviders/subscriptions");
class WalletConnectProvider extends ProviderEngine {
    constructor(opts) {
        super({ pollingInterval: opts.pollingInterval || 8000 });
        this.bridge = "https://bridge.walletconnect.org";
        this.qrcode = true;
        this.qrcodeModal = qrcode_modal_1.default;
        this.qrcodeModalOptions = undefined;
        this.rpc = null;
        this.infuraId = "";
        this.http = null;
        this.isConnecting = false;
        this.connected = false;
        this.connectCallbacks = [];
        this.accounts = [];
        this.chainId = 1;
        this.rpcUrl = "";
        this.enable = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const wc = yield this.getWalletConnector();
            if (wc) {
                this.start();
                this.subscribeWalletConnector();
                return wc.accounts;
            }
            else {
                throw new Error("Failed to connect to WalleConnect");
            }
        });
        this.request = (payload) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.send(payload);
        });
        this.send = (payload, callback) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof payload === "string") {
                const method = payload;
                let params = callback;
                if (method === "personal_sign") {
                    params = (0, utils_1.parsePersonalSign)(params);
                }
                return this.sendAsyncPromise(method, params);
            }
            payload = Object.assign({ id: (0, utils_1.payloadId)(), jsonrpc: "2.0" }, payload);
            if (payload.method === "personal_sign") {
                payload.params = (0, utils_1.parsePersonalSign)(payload.params);
            }
            if (callback) {
                this.sendAsync(payload, callback);
                return;
            }
            return this.sendAsyncPromise(payload.method, payload.params);
        });
        this.onConnect = (callback) => {
            this.connectCallbacks.push(callback);
        };
        this.triggerConnect = (result) => {
            if (this.connectCallbacks && this.connectCallbacks.length) {
                this.connectCallbacks.forEach(callback => callback(result));
            }
        };
        this.bridge = opts.connector
            ? opts.connector.bridge
            : opts.bridge || "https://bridge.walletconnect.org";
        this.qrcode = typeof opts.qrcode === "undefined" || opts.qrcode !== false;
        this.qrcodeModal = opts.qrcodeModal || this.qrcodeModal;
        this.qrcodeModalOptions = opts.qrcodeModalOptions;
        this.wc =
            opts.connector ||
                new client_1.default({
                    bridge: this.bridge,
                    qrcodeModal: this.qrcode ? this.qrcodeModal : undefined,
                    qrcodeModalOptions: this.qrcodeModalOptions,
                    storageId: opts === null || opts === void 0 ? void 0 : opts.storageId,
                    signingMethods: opts === null || opts === void 0 ? void 0 : opts.signingMethods,
                    clientMeta: opts === null || opts === void 0 ? void 0 : opts.clientMeta,
                });
        this.rpc = opts.rpc || null;
        if (!this.rpc &&
            (!opts.infuraId || typeof opts.infuraId !== "string" || !opts.infuraId.trim())) {
            throw new Error("Missing one of the required parameters: rpc or infuraId");
        }
        this.infuraId = opts.infuraId || "";
        this.chainId = (opts === null || opts === void 0 ? void 0 : opts.chainId) || this.chainId;
        this.initialize();
    }
    get isWalletConnect() {
        return true;
    }
    get connector() {
        return this.wc;
    }
    get walletMeta() {
        return this.wc.peerMeta;
    }
    disconnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.close();
        });
    }
    close() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const wc = yield this.getWalletConnector({ disableSessionCreation: true });
            yield wc.killSession();
            yield this.onDisconnect();
        });
    }
    handleRequest(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let response;
                let result = null;
                const wc = yield this.getWalletConnector();
                switch (payload.method) {
                    case "wc_killSession":
                        yield this.close();
                        result = null;
                        break;
                    case "eth_accounts":
                        result = wc.accounts;
                        break;
                    case "eth_coinbase":
                        result = wc.accounts[0];
                        break;
                    case "eth_chainId":
                        result = wc.chainId;
                        break;
                    case "net_version":
                        result = wc.chainId;
                        break;
                    case "eth_uninstallFilter":
                        this.sendAsync(payload, (_) => _);
                        result = true;
                        break;
                    default:
                        response = yield this.handleOtherRequests(payload);
                }
                if (response) {
                    return response;
                }
                return this.formatResponse(payload, result);
            }
            catch (error) {
                this.emit("error", error);
                throw error;
            }
        });
    }
    handleOtherRequests(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!utils_1.signingMethods.includes(payload.method) && payload.method.startsWith("eth_")) {
                return this.handleReadRequests(payload);
            }
            const wc = yield this.getWalletConnector();
            const result = yield wc.sendCustomRequest(payload);
            return this.formatResponse(payload, result);
        });
    }
    handleReadRequests(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.http) {
                const error = new Error("HTTP Connection not available");
                this.emit("error", error);
                throw error;
            }
            return this.http.send(payload);
        });
    }
    formatResponse(payload, result) {
        return {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            result: result,
        };
    }
    getWalletConnector(opts = {}) {
        const { disableSessionCreation = false } = opts;
        return new Promise((resolve, reject) => {
            const wc = this.wc;
            if (this.isConnecting) {
                this.onConnect((x) => resolve(x));
            }
            else if (!wc.connected && !disableSessionCreation) {
                this.isConnecting = true;
                wc.on("modal_closed", () => {
                    reject(new Error("User closed modal"));
                });
                wc.createSession({ chainId: this.chainId })
                    .then(() => {
                    wc.on("connect", (error, payload) => {
                        if (error) {
                            this.isConnecting = false;
                            return reject(error);
                        }
                        this.isConnecting = false;
                        this.connected = true;
                        if (payload) {
                            this.updateState(payload.params[0]);
                        }
                        this.emit("connect");
                        this.triggerConnect(wc);
                        resolve(wc);
                    });
                })
                    .catch(error => {
                    this.isConnecting = false;
                    reject(error);
                });
            }
            else {
                if (!this.connected) {
                    this.connected = true;
                    this.updateState(wc.session);
                }
                resolve(wc);
            }
        });
    }
    subscribeWalletConnector() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const wc = yield this.getWalletConnector();
            wc.on("disconnect", error => {
                if (error) {
                    this.emit("error", error);
                    return;
                }
                this.onDisconnect();
            });
            wc.on("session_update", (error, payload) => {
                if (error) {
                    this.emit("error", error);
                    return;
                }
                this.updateState(payload.params[0]);
            });
        });
    }
    onDisconnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.stop();
            this.emit("close", 1000, "Connection closed");
            this.emit("disconnect", 1000, "Connection disconnected");
            this.connected = false;
        });
    }
    updateState(sessionParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { accounts, chainId, networkId, rpcUrl } = sessionParams;
            if (!this.accounts || (accounts && this.accounts !== accounts)) {
                this.accounts = accounts;
                this.emit("accountsChanged", accounts);
            }
            if (!this.chainId || (chainId && this.chainId !== chainId)) {
                this.chainId = chainId;
                this.emit("chainChanged", chainId);
            }
            if (!this.networkId || (networkId && this.networkId !== networkId)) {
                this.networkId = networkId;
                this.emit("networkChanged", networkId);
            }
            this.updateRpcUrl(this.chainId, rpcUrl || "");
        });
    }
    updateRpcUrl(chainId, rpcUrl = "") {
        const rpc = { infuraId: this.infuraId, custom: this.rpc || undefined };
        rpcUrl = rpcUrl || (0, utils_1.getRpcUrl)(chainId, rpc);
        if (rpcUrl) {
            this.rpcUrl = rpcUrl;
            this.updateHttpConnection();
        }
        else {
            this.emit("error", new Error(`No RPC Url available for chainId: ${chainId}`));
        }
    }
    updateHttpConnection() {
        if (this.rpcUrl) {
            this.http = new http_connection_1.default(this.rpcUrl);
            this.http.on("payload", payload => this.emit("payload", payload));
            this.http.on("error", error => this.emit("error", error));
        }
    }
    sendAsyncPromise(method, params) {
        return new Promise((resolve, reject) => {
            this.sendAsync({
                id: (0, utils_1.payloadId)(),
                jsonrpc: "2.0",
                method,
                params: params || [],
            }, (error, response) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(response.result);
            });
        });
    }
    initialize() {
        this.updateRpcUrl(this.chainId);
        this.addProvider(new FixtureSubprovider({
            eth_hashrate: "0x00",
            eth_mining: false,
            eth_syncing: true,
            net_listening: true,
            web3_clientVersion: `WalletConnect/v1.x.x/javascript`,
        }));
        this.addProvider(new CacheSubprovider());
        this.addProvider(new SubscriptionsSubprovider());
        this.addProvider(new FilterSubprovider());
        this.addProvider(new NonceSubprovider());
        this.addProvider(new HookedWalletSubprovider(this.configWallet()));
        this.addProvider({
            handleRequest: (payload, next, end) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const { error, result } = yield this.handleRequest(payload);
                    end(error, result);
                }
                catch (error) {
                    end(error);
                }
            }),
            setEngine: (_) => _,
        });
    }
    configWallet() {
        return {
            getAccounts: (cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const accounts = wc.accounts;
                    if (accounts && accounts.length) {
                        cb(null, accounts);
                    }
                    else {
                        cb(new Error("Failed to get accounts"));
                    }
                }
                catch (error) {
                    cb(error);
                }
            }),
            processMessage: (msgParams, cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const result = yield wc.signMessage([msgParams.from, msgParams.data]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            }),
            processPersonalMessage: (msgParams, cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const result = yield wc.signPersonalMessage([msgParams.data, msgParams.from]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            }),
            processSignTransaction: (txParams, cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const result = yield wc.signTransaction(txParams);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            }),
            processTransaction: (txParams, cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const result = yield wc.sendTransaction(txParams);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            }),
            processTypedMessage: (msgParams, cb) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    const wc = yield this.getWalletConnector();
                    const result = yield wc.signTypedData([msgParams.from, msgParams.data]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            }),
        };
    }
}
exports.default = WalletConnectProvider;
//# sourceMappingURL=index.js.map