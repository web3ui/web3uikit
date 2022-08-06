import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import HttpConnection from "@walletconnect/http-connection";
import { payloadId, signingMethods, parsePersonalSign, getRpcUrl } from "@walletconnect/utils";
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
        this.qrcodeModal = QRCodeModal;
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
        this.enable = async () => {
            const wc = await this.getWalletConnector();
            if (wc) {
                this.start();
                this.subscribeWalletConnector();
                return wc.accounts;
            }
            else {
                throw new Error("Failed to connect to WalleConnect");
            }
        };
        this.request = async (payload) => {
            return this.send(payload);
        };
        this.send = async (payload, callback) => {
            if (typeof payload === "string") {
                const method = payload;
                let params = callback;
                if (method === "personal_sign") {
                    params = parsePersonalSign(params);
                }
                return this.sendAsyncPromise(method, params);
            }
            payload = Object.assign({ id: payloadId(), jsonrpc: "2.0" }, payload);
            if (payload.method === "personal_sign") {
                payload.params = parsePersonalSign(payload.params);
            }
            if (callback) {
                this.sendAsync(payload, callback);
                return;
            }
            return this.sendAsyncPromise(payload.method, payload.params);
        };
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
                new WalletConnect({
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
    async disconnect() {
        this.close();
    }
    async close() {
        const wc = await this.getWalletConnector({ disableSessionCreation: true });
        await wc.killSession();
        await this.onDisconnect();
    }
    async handleRequest(payload) {
        try {
            let response;
            let result = null;
            const wc = await this.getWalletConnector();
            switch (payload.method) {
                case "wc_killSession":
                    await this.close();
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
                    response = await this.handleOtherRequests(payload);
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
    }
    async handleOtherRequests(payload) {
        if (!signingMethods.includes(payload.method) && payload.method.startsWith("eth_")) {
            return this.handleReadRequests(payload);
        }
        const wc = await this.getWalletConnector();
        const result = await wc.sendCustomRequest(payload);
        return this.formatResponse(payload, result);
    }
    async handleReadRequests(payload) {
        if (!this.http) {
            const error = new Error("HTTP Connection not available");
            this.emit("error", error);
            throw error;
        }
        return this.http.send(payload);
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
    async subscribeWalletConnector() {
        const wc = await this.getWalletConnector();
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
    }
    async onDisconnect() {
        await this.stop();
        this.emit("close", 1000, "Connection closed");
        this.emit("disconnect", 1000, "Connection disconnected");
        this.connected = false;
    }
    async updateState(sessionParams) {
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
    }
    updateRpcUrl(chainId, rpcUrl = "") {
        const rpc = { infuraId: this.infuraId, custom: this.rpc || undefined };
        rpcUrl = rpcUrl || getRpcUrl(chainId, rpc);
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
            this.http = new HttpConnection(this.rpcUrl);
            this.http.on("payload", payload => this.emit("payload", payload));
            this.http.on("error", error => this.emit("error", error));
        }
    }
    sendAsyncPromise(method, params) {
        return new Promise((resolve, reject) => {
            this.sendAsync({
                id: payloadId(),
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
            handleRequest: async (payload, next, end) => {
                try {
                    const { error, result } = await this.handleRequest(payload);
                    end(error, result);
                }
                catch (error) {
                    end(error);
                }
            },
            setEngine: (_) => _,
        });
    }
    configWallet() {
        return {
            getAccounts: async (cb) => {
                try {
                    const wc = await this.getWalletConnector();
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
            },
            processMessage: async (msgParams, cb) => {
                try {
                    const wc = await this.getWalletConnector();
                    const result = await wc.signMessage([msgParams.from, msgParams.data]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            },
            processPersonalMessage: async (msgParams, cb) => {
                try {
                    const wc = await this.getWalletConnector();
                    const result = await wc.signPersonalMessage([msgParams.data, msgParams.from]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            },
            processSignTransaction: async (txParams, cb) => {
                try {
                    const wc = await this.getWalletConnector();
                    const result = await wc.signTransaction(txParams);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            },
            processTransaction: async (txParams, cb) => {
                try {
                    const wc = await this.getWalletConnector();
                    const result = await wc.sendTransaction(txParams);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            },
            processTypedMessage: async (msgParams, cb) => {
                try {
                    const wc = await this.getWalletConnector();
                    const result = await wc.signTypedData([msgParams.from, msgParams.data]);
                    cb(null, result);
                }
                catch (error) {
                    cb(error);
                }
            },
        };
    }
}
export default WalletConnectProvider;
//# sourceMappingURL=index.js.map