import { ObservableStore, storeAsStream } from "@metamask/obs-store";
import {
  createIdRemapMiddleware,
  createStreamMiddleware,
  JRPCEngine,
  JRPCRequest,
  JRPCResponse,
  JRPCSuccess,
  ObjectMultiplex,
  SafeEventEmitter,
} from "@toruslabs/openlogin-jrpc";
import { EthereumRpcError, ethErrors } from "eth-rpc-errors";
import dequal from "fast-deep-equal";
import { duplex as isDuplexStream } from "is-stream";
import pump from "pump";
import type { Duplex } from "readable-stream";

import {
  BaseProviderState,
  JsonRpcConnection,
  Maybe,
  ProviderOptions,
  PublicConfigState,
  RequestArguments,
  SendSyncJsonRpcRequest,
  SentWarningsState,
  UnvalidatedJsonRpcRequest,
  WalletProviderState,
} from "./interfaces";
import log from "./loglevel";
import messages from "./messages";
import { createErrorMiddleware, EMITTED_NOTIFICATIONS, logStreamDisconnectWarning, NOOP } from "./utils";

SafeEventEmitter.defaultMaxListeners = 100;

// resolve response.result, reject errors
const getRpcPromiseCallback =
  (resolve, reject, unwrapResult = true) =>
  (error, response) => {
    if (error || response.error) {
      return reject(error || response.error);
    }
    return !unwrapResult || Array.isArray(response) ? resolve(response) : resolve(response.result);
  };

class TorusInpageProvider extends SafeEventEmitter {
  protected static _defaultState: BaseProviderState = {
    accounts: null,
    isConnected: false,
    isUnlocked: false,
    initialized: false,
    isPermanentlyDisconnected: false,
    hasEmittedConnection: false,
  };

  /**
   * The chain ID of the currently connected Ethereum chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */
  public chainId: string | null;

  /**
   * The user's currently selected Ethereum address.
   * If null, MetaMask is either locked or the user has not permitted any
   * addresses to be viewed.
   */
  public selectedAddress: string | null;

  _rpcEngine: JRPCEngine;

  public networkVersion: string | null;

  shouldSendMetadata: boolean;

  /**
   * Indicating that this provider is a MetaMask provider.
   */
  public readonly isTorus: true;

  _publicConfigStore: ObservableStore<PublicConfigState>;

  tryPreopenHandle: (payload: UnvalidatedJsonRpcRequest | UnvalidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => void;

  enable: () => Promise<string[]>;

  protected _state: BaseProviderState;

  protected _jsonRpcConnection: JsonRpcConnection;

  protected _sentWarnings: SentWarningsState = {
    // methods
    enable: false,
    experimentalMethods: false,
    send: false,
    publicConfigStore: false,
    // events
    events: {
      close: false,
      data: false,
      networkChanged: false,
      notification: false,
    },
  };

  constructor(
    connectionStream: Duplex,
    { maxEventListeners = 100, shouldSendMetadata = true, jsonRpcStreamName = "provider" }: ProviderOptions = {}
  ) {
    super();
    if (!isDuplexStream(connectionStream)) {
      throw new Error(messages.errors.invalidDuplexStream());
    }
    this.isTorus = true;
    this.setMaxListeners(maxEventListeners);

    // private state
    this._state = {
      ...TorusInpageProvider._defaultState,
    };

    // public state
    this.selectedAddress = null;
    this.networkVersion = null;
    this.chainId = null;
    this.shouldSendMetadata = shouldSendMetadata;

    // bind functions (to prevent e.g. web3@1.x from making unbound calls)
    this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
    this._handleChainChanged = this._handleChainChanged.bind(this);
    this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
    this._handleConnect = this._handleConnect.bind(this);
    this._handleDisconnect = this._handleDisconnect.bind(this);
    this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
    this._sendSync = this._sendSync.bind(this);
    this._rpcRequest = this._rpcRequest.bind(this);
    this._warnOfDeprecation = this._warnOfDeprecation.bind(this);
    this._initializeState = this._initializeState.bind(this);

    this.request = this.request.bind(this);
    this.send = this.send.bind(this);
    this.sendAsync = this.sendAsync.bind(this);
    // this.enable = this.enable.bind(this);

    // setup connectionStream multiplexing
    const mux = new ObjectMultiplex();
    pump(connectionStream, mux, connectionStream, this._handleStreamDisconnect.bind(this, "MetaMask"));

    // subscribe to metamask public config (one-way)
    this._publicConfigStore = new ObservableStore({ storageKey: "Metamask-Config" });

    // handle isUnlocked changes, and chainChanged and networkChanged events
    // this._publicConfigStore.subscribe((stringifiedState) => {
    //   // This is because we are using store as string
    //   const state = JSON.parse(stringifiedState as unknown as string);
    //   if ("isUnlocked" in state && state.isUnlocked !== this._state.isUnlocked) {
    //     this._state.isUnlocked = state.isUnlocked;
    //     if (!this._state.isUnlocked) {
    //       // accounts are never exposed when the extension is locked
    //       this._handleAccountsChanged([]);
    //     } else {
    //       // this will get the exposed accounts, if any
    //       try {
    //         this._rpcRequest(
    //           { method: "eth_accounts", params: [] },
    //           NOOP,
    //           true // indicating that eth_accounts _should_ update accounts
    //         );
    //       } catch (_) {
    //         // Swallow error
    //       }
    //     }
    //   }

    //   if ("selectedAddress" in state && this.selectedAddress !== state.selectedAddress) {
    //     try {
    //       this._rpcRequest(
    //         { method: "eth_accounts", params: [] },
    //         NOOP,
    //         true // indicating that eth_accounts _should_ update accounts
    //       );
    //     } catch (_) {
    //       // Swallow error
    //     }
    //   }

    //   // Emit chainChanged event on chain change
    //   if ("chainId" in state && state.chainId !== this.chainId) {
    //     this.chainId = state.chainId || null;
    //     this.emit("chainChanged", this.chainId);

    //     // indicate that we've connected, for EIP-1193 compliance
    //     // we do this here so that iframe can initialize
    //     if (!this._state.hasEmittedConnection) {
    //       this._handleConnect(this.chainId);
    //       this._state.hasEmittedConnection = true;
    //     }
    //   }

    //   // Emit networkChanged event on network change
    //   if ("networkVersion" in state && state.networkVersion !== this.networkVersion) {
    //     this.networkVersion = state.networkVersion || null;
    //     this.emit("networkChanged", this.networkVersion);
    //   }
    // });

    pump(
      mux.createStream("publicConfig") as unknown as Duplex,
      storeAsStream(this._publicConfigStore),
      // RPC requests should still work if only this stream fails
      logStreamDisconnectWarning.bind(this, "MetaMask PublicConfigStore")
    );
    // ignore phishing warning message (handled elsewhere)
    mux.ignoreStream("phishing");

    // setup own event listeners

    // EIP-1193 connect
    this.on("connect", () => {
      this._state.isConnected = true;
    });

    // connect to async provider

    const jsonRpcConnection = createStreamMiddleware();
    pump(
      jsonRpcConnection.stream,
      mux.createStream(jsonRpcStreamName) as unknown as Duplex,
      jsonRpcConnection.stream,
      this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")
    );

    // handle RPC requests via dapp-side rpc engine
    const rpcEngine = new JRPCEngine();
    rpcEngine.push(createIdRemapMiddleware());
    rpcEngine.push(createErrorMiddleware());
    rpcEngine.push(jsonRpcConnection.middleware);
    this._rpcEngine = rpcEngine;

    // json rpc notification listener
    jsonRpcConnection.events.on("notification", (payload) => {
      const { method, params } = payload;
      if (method === "wallet_accountsChanged") {
        this._handleAccountsChanged(params);
      } else if (method === "wallet_unlockStateChanged") {
        this._handleUnlockStateChanged(params);
      } else if (method === "wallet_chainChanged") {
        this._handleChainChanged(params);
      } else if (EMITTED_NOTIFICATIONS.includes(payload.method)) {
        // EIP 1193 subscriptions, per eth-json-rpc-filters/subscriptionManager
        this.emit("data", payload); // deprecated
        this.emit("notification", params.result);
        this.emit("message", {
          type: method,
          data: params,
        });
      }

      // Backward compatibility for older non EIP 1193 subscriptions
      // this.emit('data', null, payload)
    });
  }

  get publicConfigStore(): ObservableStore<PublicConfigState> {
    if (!this._sentWarnings.publicConfigStore) {
      log.warn(messages.warnings.publicConfigStore);
      this._sentWarnings.publicConfigStore = true;
    }
    return this._publicConfigStore;
  }

  /**
   * Returns whether the inpage provider is connected to Torus.
   */
  isConnected(): boolean {
    return this._state.isConnected;
  }

  /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   *
   * @param args - The RPC request arguments.
   * @returns A Promise that resolves with the result of the RPC method,
   * or rejects if an error is encountered.
   */
  async request<T>(args: RequestArguments): Promise<Maybe<T>> {
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestArgs(),
        data: args,
      });
    }

    const { method, params } = args;

    if (typeof method !== "string" || method.length === 0) {
      throw ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestMethod(),
        data: args,
      });
    }

    if (params !== undefined && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
      throw ethErrors.rpc.invalidRequest({
        message: messages.errors.invalidRequestParams(),
        data: args,
      });
    }

    return new Promise((resolve, reject) => {
      this._rpcRequest({ method, params }, getRpcPromiseCallback(resolve, reject));
    });
  }

  /**
   * Submits an RPC request per the given JSON-RPC request object.
   *
   * @param payload - The RPC request object.
   * @param cb - The callback function.
   */
  sendAsync(payload: JRPCRequest<unknown>, callback: (error: Error | null, result?: JRPCResponse<unknown>) => void): void {
    this._rpcRequest(payload, callback);
  }

  /**
   * We override the following event methods so that we can warn consumers
   * about deprecated events:
   *   addListener, on, once, prependListener, prependOnceListener
   */

  addListener(eventName: string, listener: (...args: unknown[]) => void): this {
    this._warnOfDeprecation(eventName);
    return super.addListener(eventName, listener);
  }

  on(eventName: string, listener: (...args: unknown[]) => void): this {
    this._warnOfDeprecation(eventName);
    return super.on(eventName, listener);
  }

  once(eventName: string, listener: (...args: unknown[]) => void): this {
    this._warnOfDeprecation(eventName);
    return super.once(eventName, listener);
  }

  prependListener(eventName: string, listener: (...args: unknown[]) => void): this {
    this._warnOfDeprecation(eventName);
    return super.prependListener(eventName, listener);
  }

  prependOnceListener(eventName: string, listener: (...args: unknown[]) => void): this {
    this._warnOfDeprecation(eventName);
    return super.prependOnceListener(eventName, listener);
  }

  // Private Methods
  //= ===================
  /**
   * Constructor helper.
   * Populates initial state by calling 'wallet_getProviderState' and emits
   * necessary events.
   */
  async _initializeState(): Promise<void> {
    try {
      const { accounts, chainId, isUnlocked, networkVersion } = (await this.request({
        method: "wallet_getProviderState",
      })) as WalletProviderState;

      // indicate that we've connected, for EIP-1193 compliance
      this.emit("connect", { chainId });

      this._handleChainChanged({ chainId, networkVersion });
      this._handleUnlockStateChanged({ accounts, isUnlocked });
      this._handleAccountsChanged(accounts);
    } catch (error) {
      log.error("MetaMask: Failed to get initial state. Please report this bug.", error);
    } finally {
      log.info("initialized state");
      this._state.initialized = true;
      this.emit("_initialized");
    }
  }

  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound.
   *
   * @param payload - The RPC request object.
   * @param callback - The consumer's callback.
   * @param isInternal - false - Whether the request is internal.
   */
  _rpcRequest(payload: UnvalidatedJsonRpcRequest | UnvalidatedJsonRpcRequest[], callback: (...args: any[]) => void, isInternal = false): void {
    let cb = callback;
    const _payload = payload;
    if (!Array.isArray(_payload)) {
      if (!_payload.jsonrpc) {
        _payload.jsonrpc = "2.0";
      }

      if (_payload.method === "eth_accounts" || _payload.method === "eth_requestAccounts") {
        // handle accounts changing
        cb = (err: Error, res: JRPCSuccess<string[]>) => {
          this._handleAccountsChanged(res.result || [], _payload.method === "eth_accounts", isInternal);
          callback(err, res);
        };
      } else if (_payload.method === "wallet_getProviderState") {
        this._rpcEngine.handle(payload as JRPCRequest<unknown>, cb);
        return;
      }
    }
    this.tryPreopenHandle(_payload, cb);
  }

  /**
   * Submits an RPC request for the given method, with the given params.
   *
   * @deprecated Use "request" instead.
   * @param method - The method to request.
   * @param params - Any params for the method.
   * @returns A Promise that resolves with the JSON-RPC response object for the
   * request.
   */
  send<T>(method: string, params?: T[]): Promise<JRPCResponse<T>>;

  /**
   * Submits an RPC request per the given JSON-RPC request object.
   *
   * @deprecated Use "request" instead.
   * @param payload - A JSON-RPC request object.
   * @param callback - An error-first callback that will receive the JSON-RPC
   * response object.
   */
  send<T>(payload: JRPCRequest<unknown>, callback: (error: Error | null, result?: JRPCResponse<T>) => void): void;

  /**
   * Accepts a JSON-RPC request object, and synchronously returns the cached result
   * for the given method. Only supports 4 specific RPC methods.
   *
   * @deprecated Use "request" instead.
   * @param payload - A JSON-RPC request object.
   * @returns A JSON-RPC response object.
   */
  send<T>(payload: SendSyncJsonRpcRequest): JRPCResponse<T>;

  send(methodOrPayload: unknown, callbackOrArgs?: unknown): unknown {
    if (!this._sentWarnings.send) {
      log.warn(messages.warnings.sendDeprecation);
      this._sentWarnings.send = true;
    }
    if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
      return new Promise((resolve, reject) => {
        try {
          this._rpcRequest({ method: methodOrPayload, params: callbackOrArgs }, getRpcPromiseCallback(resolve, reject, false));
        } catch (error) {
          reject(error);
        }
      });
    }
    if (methodOrPayload && typeof methodOrPayload === "object" && typeof callbackOrArgs === "function") {
      return this._rpcRequest(methodOrPayload as JRPCRequest<unknown>, callbackOrArgs as (...args: unknown[]) => void);
    }
    return this._sendSync(methodOrPayload as SendSyncJsonRpcRequest);
  }

  /**
   * DEPRECATED.
   * Internal backwards compatibility method, used in send.
   */
  _sendSync(payload: SendSyncJsonRpcRequest): JRPCSuccess<unknown> {
    let result;
    switch (payload.method) {
      case "eth_accounts":
        result = this.selectedAddress ? [this.selectedAddress] : [];
        break;

      case "eth_coinbase":
        result = this.selectedAddress || null;
        break;

      case "eth_uninstallFilter":
        this._rpcRequest(payload, NOOP);
        result = true;
        break;

      case "net_version":
        result = this.networkVersion || null;
        break;

      default:
        throw new Error(messages.errors.unsupportedSync(payload.method));
    }

    return {
      id: payload.id,
      jsonrpc: payload.jsonrpc,
      result,
    };
  }

  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * emits MetaMaskInpageProvider#connect
   */
  protected _handleConnect(chainId: string): void {
    if (!this._state.isConnected) {
      this._state.isConnected = true;
      this.emit("connect", { chainId });
      log.debug(messages.info.connected(chainId));
    }
  }

  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits MetaMaskInpageProvider#disconnect
   */
  protected _handleDisconnect(isRecoverable: boolean, errorMessage?: string): void {
    if (this._state.isConnected || (!this._state.isPermanentlyDisconnected && !isRecoverable)) {
      this._state.isConnected = false;

      let error;
      if (isRecoverable) {
        error = new EthereumRpcError(
          1013, // Try again later
          errorMessage || messages.errors.disconnected()
        );
        log.debug(error);
      } else {
        error = new EthereumRpcError(
          1011, // Internal error
          errorMessage || messages.errors.permanentlyDisconnected()
        );
        log.error(error);
        this.chainId = null;
        this._state.accounts = null;
        this.selectedAddress = null;
        this._state.isUnlocked = false;
        this._state.isPermanentlyDisconnected = true;
      }

      this.emit("disconnect", error);
    }
  }

  /**
   * Called when connection is lost to critical streams.
   *
   * emits MetamaskInpageProvider#disconnect
   */
  protected _handleStreamDisconnect(streamName: string, error: Error): void {
    logStreamDisconnectWarning(streamName, error, this);
    this._handleDisconnect(false, error ? error.message : undefined);
  }

  /**
   * Called when accounts may have changed.
   */
  protected _handleAccountsChanged(accounts: unknown[], isEthAccounts = false, isInternal = false): void {
    // defensive programming
    let finalAccounts = accounts;
    if (!Array.isArray(finalAccounts)) {
      log.error("MetaMask: Received non-array accounts parameter. Please report this bug.", finalAccounts);
      finalAccounts = [];
    }

    for (const account of accounts) {
      if (typeof account !== "string") {
        log.error("MetaMask: Received non-string account. Please report this bug.", accounts);
        finalAccounts = [];
        break;
      }
    }

    // emit accountsChanged if anything about the accounts array has changed
    if (!dequal(this._state.accounts, finalAccounts)) {
      // we should always have the correct accounts even before eth_accounts
      // returns, except in cases where isInternal is true
      if (isEthAccounts && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !isInternal) {
        log.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', finalAccounts);
      }

      this._state.accounts = finalAccounts as string[];
      this.emit("accountsChanged", finalAccounts);
    }

    // handle selectedAddress
    if (this.selectedAddress !== finalAccounts[0]) {
      this.selectedAddress = (finalAccounts[0] as string) || null;
    }
  }

  /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state.
   * Does nothing if neither the chainId nor the networkVersion are different
   * from existing values.
   *
   * emits MetamaskInpageProvider#chainChanged
   * @param networkInfo - An object with network info.
   */
  protected _handleChainChanged({ chainId, networkVersion }: { chainId?: string; networkVersion?: string } = {}): void {
    if (!chainId || !networkVersion) {
      log.error("MetaMask: Received invalid network parameters. Please report this bug.", { chainId, networkVersion });
      return;
    }

    if (networkVersion === "loading") {
      this._handleDisconnect(true);
    } else {
      this._handleConnect(chainId);

      if (chainId !== this.chainId) {
        this.chainId = chainId;
        if (this._state.initialized) {
          this.emit("chainChanged", this.chainId);
        }
      }
    }
  }

  /**
   * Upon receipt of a new isUnlocked state, sets relevant public state.
   * Calls the accounts changed handler with the received accounts, or an empty
   * array.
   *
   * Does nothing if the received value is equal to the existing value.
   * There are no lock/unlock events.
   *
   * @param opts - Options bag.
   */
  protected _handleUnlockStateChanged({ accounts, isUnlocked }: { accounts?: string[]; isUnlocked?: boolean } = {}): void {
    if (typeof isUnlocked !== "boolean") {
      log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", { isUnlocked });
      return;
    }

    if (isUnlocked !== this._state.isUnlocked) {
      this._state.isUnlocked = isUnlocked;
      this._handleAccountsChanged(accounts || []);
    }
  }

  /**
   * Warns of deprecation for the given event, if applicable.
   */
  protected _warnOfDeprecation(eventName: string): void {
    if (this._sentWarnings.events[eventName] === false) {
      log.warn(messages.warnings.events[eventName]);
      this._sentWarnings.events[eventName] = true;
    }
  }
}

export default TorusInpageProvider;
