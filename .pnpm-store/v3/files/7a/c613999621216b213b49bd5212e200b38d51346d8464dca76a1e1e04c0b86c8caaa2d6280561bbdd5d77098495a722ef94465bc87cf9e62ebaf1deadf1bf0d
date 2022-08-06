import {
  ADAPTER_CATEGORY,
  ADAPTER_EVENTS,
  ADAPTER_STATUS,
  BaseAdapterConfig,
  CHAIN_NAMESPACES,
  CustomChainConfig,
  getChainConfig,
  log,
  SafeEventEmitterProvider,
  WALLET_ADAPTER_TYPE,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { Web3AuthCore, Web3AuthCoreOptions } from "@web3auth/core";
import LoginModal, { getAdapterSocialLogins, LOGIN_MODAL_EVENTS, OPENLOGIN_PROVIDERS } from "@web3auth/ui";

import {
  defaultEvmDappModalConfig,
  defaultEvmWalletModalConfig,
  defaultOtherModalConfig,
  defaultSolanaDappModalConfig,
  defaultSolanaWalletModalConfig,
} from "./config";
import { getDefaultAdapterModule } from "./default";
import { AdaptersModalConfig, ModalConfig } from "./interface";

export interface UIConfig {
  /**
   * Logo for your app.
   */
  appLogo?: string;

  /**
   * theme for the modal
   *
   * @defaultValue `light`
   */
  theme?: "light" | "dark";

  /**
   * order of how login methods are shown
   *
   * @defaultValue `["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"]`
   */
  loginMethodsOrder?: string[];
}
export interface Web3AuthOptions extends Web3AuthCoreOptions {
  /**
   * Client id for web3auth.
   * You can obtain your client id from the web3auth developer dashboard.
   * You can set any random string for this on localhost.
   */
  clientId: string;

  /**
   * web3auth instance provides different adapters for different type of usages. If you are dapp and want to
   * use external wallets like metamask, then you can use the `DAPP` authMode.
   * If you are a wallet and only want to use you own wallet implementations along with openlogin,
   * then you should use `WALLET` authMode.
   *
   * @defaultValue `DAPP`
   */
  authMode?: "DAPP" | "WALLET";
  /**
   * Config for configuring modal ui display properties
   */
  uiConfig?: UIConfig;

  /**
   * Whether to show errors on Web3Auth modal.
   *
   * @defaultValue `true`
   */
  displayErrorsOnModal?: boolean;
}
export class Web3Auth extends Web3AuthCore {
  public loginModal: LoginModal;

  readonly options: Web3AuthOptions;

  private modalConfig: AdaptersModalConfig = defaultEvmDappModalConfig;

  constructor(options: Web3AuthOptions) {
    super(options);
    this.options = { ...options };
    const providedChainConfig = this.options.chainConfig;
    if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.SOLANA) {
      if (options.authMode === "WALLET") {
        // default config for solana wallet modal
        this.modalConfig = defaultSolanaWalletModalConfig;
      } else {
        // default config for solana dapp modal
        this.modalConfig = defaultSolanaDappModalConfig;
      }
    } else if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.EIP155) {
      if (options.authMode === "WALLET") {
        // default config for evm wallet modal
        this.modalConfig = defaultEvmWalletModalConfig;
      } else {
        // default config for evm dapp modal
        this.modalConfig = defaultEvmDappModalConfig;
      }
    } else if (providedChainConfig.chainNamespace === CHAIN_NAMESPACES.OTHER) {
      this.modalConfig = defaultOtherModalConfig;
    } else {
      throw new Error(`Invalid chainNamespace provided: ${providedChainConfig.chainNamespace}`);
    }
    this.loginModal = new LoginModal({
      theme: this.options.uiConfig?.theme,
      appLogo: this.options.uiConfig?.appLogo || "",
      version: "",
      adapterListener: this,
      displayErrorsOnModal: this.options.displayErrorsOnModal,
    });
    this.subscribeToLoginModalEvents();
  }

  public async initModal(params?: { modalConfig?: Record<WALLET_ADAPTER_TYPE, ModalConfig> }): Promise<void> {
    super.checkInitRequirements();
    await this.loginModal.initModal();
    const providedChainConfig = this.options.chainConfig;

    // merge default adapters with the custom configured adapters.
    const allAdapters = [...new Set([...Object.keys(this.modalConfig.adapters || {}), ...Object.keys(this.walletAdapters)])];

    const adapterConfigurationPromises = allAdapters.map(async (adapterName) => {
      // start with the default config of adapter.
      let adapterConfig = this.modalConfig.adapters?.[adapterName] || {
        label: adapterName,
        showOnModal: true,
        showOnMobile: true,
        showOnDesktop: true,
      };

      // override the default config of adapter if some config is being provided by the user.
      if (params?.modalConfig?.[adapterName]) {
        adapterConfig = { ...adapterConfig, ...params.modalConfig[adapterName] };
      }
      (this.modalConfig.adapters as Record<WALLET_ADAPTER_TYPE, ModalConfig>)[adapterName] = adapterConfig as ModalConfig;

      // check if adapter is configured/added by user and exist in walletAdapters map.
      const adapter = this.walletAdapters[adapterName];
      log.debug("adapter config", adapterName, this.modalConfig.adapters?.[adapterName].showOnModal, adapter);

      // if adapter is not custom configured then check if it is available in default adapters.
      // and if adapter is not hidden by user
      if (!adapter && this.modalConfig.adapters?.[adapterName].showOnModal) {
        // if adapter is not configured and some default configuration is available, use it.
        const ad = await getDefaultAdapterModule({
          name: adapterName,
          customChainConfig: this.options.chainConfig,
          clientId: this.options.clientId,
        });

        this.walletAdapters[adapterName] = ad;

        return adapterName;
      } else if (adapter?.type === ADAPTER_CATEGORY.IN_APP || adapter?.type === ADAPTER_CATEGORY.EXTERNAL || adapterName === this.cachedAdapter) {
        if (!this.modalConfig.adapters?.[adapterName].showOnModal) return;
        // add client id to openlogin adapter, same web3auth client id can be used in openlogin.
        // this id is being overridden if user is also passing client id in openlogin's adapter constructor.
        if (adapterName === WALLET_ADAPTERS.OPENLOGIN) {
          this.walletAdapters[adapterName].setAdapterSettings({ clientId: this.options.clientId });
        }

        // if adapter doesn't have any chainConfig then we will set the chainConfig based of passed chainNamespace
        // and chainNamespace.
        if (!adapter.chainConfigProxy) {
          const chainConfig = {
            ...getChainConfig(providedChainConfig.chainNamespace, this.coreOptions.chainConfig?.chainId),
            ...this.coreOptions.chainConfig,
          } as CustomChainConfig;
          this.walletAdapters[adapterName].setChainConfig(chainConfig);
        }

        return adapterName;
      }
    });

    const adapterNames = await Promise.all(adapterConfigurationPromises);
    const hasInAppWallets = Object.values(this.walletAdapters).some((adapter) => {
      if (adapter.type !== ADAPTER_CATEGORY.IN_APP) return false;
      if (this.modalConfig.adapters[adapter.name].showOnModal !== true) return false;
      if (!this.modalConfig.adapters[adapter.name].loginMethods) return true;
      const mergedLoginMethods = getAdapterSocialLogins(
        adapter.name,
        this.walletAdapters[adapter.name],
        (this.modalConfig.adapters as Record<WALLET_ADAPTER_TYPE, ModalConfig>)[adapter.name]?.loginMethods
      );
      if (Object.values(mergedLoginMethods).some((method) => method.showOnModal)) return true;
      return false;
    });
    log.debug(hasInAppWallets, this.walletAdapters, "hasInAppWallets");
    // Now, initialize the adapters.
    const initPromises = adapterNames.map(async (adapterName) => {
      if (!adapterName) return;
      try {
        const adapter = this.walletAdapters[adapterName];
        // only initialize a external adapter here if it is a cached adapter.
        if (this.cachedAdapter !== adapterName && adapter.type === ADAPTER_CATEGORY.EXTERNAL) {
          return;
        }
        // in-app wallets or cached wallet (being connected or already connected) are initialized first.
        // if adapter is configured thn only initialize in app or cached adapter.
        // external wallets are initialized on INIT_EXTERNAL_WALLET event.
        this.subscribeToAdapterEvents(adapter);
        if (adapter.status === ADAPTER_STATUS.NOT_READY) await adapter.init({ autoConnect: this.cachedAdapter === adapterName });
        // note: not adding cachedWallet to modal if it is external wallet.
        // adding it later if no in-app wallets are available.
        if (adapter.type === ADAPTER_CATEGORY.IN_APP) {
          this.initializeInAppWallet(adapterName);
        }
      } catch (error) {
        log.error(error, "error while initializing adapter");
      }
    });

    this.status = ADAPTER_STATUS.READY;
    await Promise.all(initPromises);

    const hasExternalWallets = allAdapters.some((adapterName) => {
      return this.walletAdapters[adapterName]?.type === ADAPTER_CATEGORY.EXTERNAL && this.modalConfig.adapters?.[adapterName].showOnModal;
    });

    if (hasExternalWallets) {
      this.loginModal.initExternalWalletContainer();
    }

    // variable to check if we have any in app wallets
    // currently all default in app and external wallets can be hidden or shown based on config.
    if (!hasInAppWallets && hasExternalWallets) {
      // if no in app wallet is available then initialize external wallets in modal
      await this.initExternalWalletAdapters(false, { showExternalWalletsOnly: true });
    }
  }

  public async connect(): Promise<SafeEventEmitterProvider | null> {
    // if (!this.loginModal.initialized) throw new Error("Login modal is not initialized");
    // if already connected return provider
    if (this.provider) return this.provider;
    this.loginModal.open();
    return new Promise((resolve, reject) => {
      this.once(ADAPTER_EVENTS.CONNECTED, () => {
        return resolve(this.provider);
      });
      this.once(ADAPTER_EVENTS.ERRORED, (err: unknown) => {
        return reject(err);
      });
    });
  }

  private async initExternalWalletAdapters(externalWalletsInitialized: boolean, options?: { showExternalWalletsOnly: boolean }): Promise<void> {
    if (externalWalletsInitialized) return;
    const adaptersConfig: Record<string, BaseAdapterConfig> = {};
    const adaptersData: Record<string, unknown> = {};
    const adapterPromises = Object.keys(this.walletAdapters).map(async (adapterName) => {
      try {
        const adapter = this.walletAdapters[adapterName];
        if (adapter?.type === ADAPTER_CATEGORY.EXTERNAL) {
          log.debug("init external wallet", this.cachedAdapter, adapterName);
          this.subscribeToAdapterEvents(adapter);
          // we are not initializing cached adapter here as it is already being initialized in initModal before.
          if (this.cachedAdapter === adapterName) {
            return;
          }
          if (adapter.status === ADAPTER_STATUS.NOT_READY) await adapter.init({ autoConnect: this.cachedAdapter === adapterName });
          adaptersConfig[adapterName] = (this.modalConfig.adapters as Record<WALLET_ADAPTER_TYPE, ModalConfig>)[adapterName];
          adaptersData[adapterName] = adapter.adapterData || {};
          return adapterName;
        }
      } catch (error) {
        log.error(error, "error while initializing adapter");
      }
    });

    const adapterInitResults = await Promise.all(adapterPromises);
    const finalAdaptersConfig: Record<WALLET_ADAPTER_TYPE, BaseAdapterConfig> = {};
    adapterInitResults.forEach((result: string | undefined) => {
      if (result) {
        finalAdaptersConfig[result] = adaptersConfig[result];
      }
    });
    this.loginModal.addWalletLogins(finalAdaptersConfig, { showExternalWalletsOnly: !!options?.showExternalWalletsOnly });
  }

  private initializeInAppWallet(adapterName: string): void {
    log.info("adapterInitResults", adapterName);
    if (this.walletAdapters[adapterName].type === ADAPTER_CATEGORY.IN_APP) {
      this.loginModal.addSocialLogins(
        adapterName,
        getAdapterSocialLogins(
          adapterName,
          this.walletAdapters[adapterName],
          (this.modalConfig.adapters as Record<WALLET_ADAPTER_TYPE, ModalConfig>)[adapterName]?.loginMethods
        ),
        this.options.uiConfig?.loginMethodsOrder || OPENLOGIN_PROVIDERS
      );
    }
  }

  private subscribeToLoginModalEvents(): void {
    this.loginModal.on(LOGIN_MODAL_EVENTS.LOGIN, async (params: { adapter: WALLET_ADAPTER_TYPE; loginParams: unknown }) => {
      try {
        await this.connectTo<unknown>(params.adapter, params.loginParams);
      } catch (error) {
        log.error(`Error while connecting to adapter: ${params.adapter}`, error);
      }
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.INIT_EXTERNAL_WALLETS, async (params: { externalWalletsInitialized: boolean }) => {
      await this.initExternalWalletAdapters(params.externalWalletsInitialized);
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.DISCONNECT, async () => {
      try {
        await this.logout();
      } catch (error) {
        log.error(`Error while disconnecting`, error);
      }
    });
    this.loginModal.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, async (visibility: boolean) => {
      log.debug("is login modal visible", visibility);
      this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, visibility);
      const walletConnectStatus = this.walletAdapters[WALLET_ADAPTERS.WALLET_CONNECT_V1]?.status;
      if (visibility && walletConnectStatus === ADAPTER_STATUS.READY) {
        // refreshing session for wallet connect whenever modal is opened.
        try {
          this.walletAdapters[WALLET_ADAPTERS.WALLET_CONNECT_V1].connect();
        } catch (error) {
          log.error(`Error while disconnecting to wallet connect in core`, error);
        }
      }
    });
  }
}
