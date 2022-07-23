import { LOGIN_PROVIDER } from "@toruslabs/openlogin";
import type { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { log, WALLET_ADAPTERS } from "@web3auth/base";
import cloneDeep from "lodash.clonedeep";
import deepmerge from "lodash.merge";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { ThemedContext } from "../context/ThemeContext";
import { ExternalWalletEventType, MODAL_STATUS, ModalState, SocialLoginEventType } from "../interfaces";
import AdapterLoader from "./AdapterLoader";
import ExternalWallets from "./ExternalWallets";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import SocialLoginEmail from "./SocialLoginEmail";
import SocialLogins from "./SocialLogins";

interface ModalProps {
  stateListener: SafeEventEmitter;
  appLogo?: string;
  version: string;
  handleSocialLoginClick: (params: SocialLoginEventType) => void;
  handleExternalWalletClick: (params: ExternalWalletEventType) => void;
  handleShowExternalWallets: (externalWalletsInitialized: boolean) => void;
  closeModal: () => void;
}

log.enableAll();

export default function Modal(props: ModalProps) {
  const { isDark } = useContext(ThemedContext);
  const [modalTransitionClasses, setModalTransitionClasses] = useState(["w3a-modal__inner"]);
  const [modalState, setModalState] = useState<ModalState>({
    externalWalletsVisibility: false,
    status: MODAL_STATUS.INITIALIZED,
    hasExternalWallets: false,
    externalWalletsInitialized: false,
    modalVisibility: false,
    modalVisibilityDelayed: false,
    postLoadingMessage: "",
    walletConnectUri: "",
    socialLoginsConfig: {
      loginMethods: {},
      loginMethodsOrder: [],
      adapter: "",
    },
    externalWalletsConfig: {},
    detailedLoaderAdapter: "",
    showExternalWalletsOnly: false,
    wcAdapters: [],
  });

  const { stateListener, appLogo, version, handleSocialLoginClick, handleExternalWalletClick, handleShowExternalWallets, closeModal } = props;
  const DETAILED_ADAPTERS = [WALLET_ADAPTERS.PHANTOM, WALLET_ADAPTERS.METAMASK];

  useEffect(() => {
    stateListener.emit("MOUNTED");
    stateListener.on("STATE_UPDATED", (newModalState: Partial<ModalState>) => {
      log.debug("state updated", newModalState);

      setModalState((prevState) => {
        const mergedState = cloneDeep(deepmerge(prevState, newModalState));
        return mergedState;
      });
    });
  }, [stateListener]);

  useEffect(() => {
    let timeOutId: number;
    if (modalState.modalVisibility) {
      setModalState((prevState) => {
        return { ...prevState, modalVisibilityDelayed: modalState.modalVisibility };
      });

      timeOutId = window.setTimeout(() => {
        setModalTransitionClasses(["w3a-modal__inner", modalState.modalVisibility ? "w3a-modal__inner--active" : ""]);
        // hide external wallets, if modal is closing, so that it will show social login screen on reopen.
      }, 100);
    } else {
      setModalTransitionClasses(["w3a-modal__inner", modalState.modalVisibility ? "w3a-modal__inner--active" : ""]);
      // hide external wallets, if modal is closing, so that it will show social login screen on reopen.

      timeOutId = window.setTimeout(() => {
        setModalState((prevState) => {
          return { ...prevState, modalVisibilityDelayed: modalState.modalVisibility };
        });
      }, 250);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [modalState.modalVisibility]);

  const onCloseLoader = useCallback(() => {
    if (modalState.status === MODAL_STATUS.CONNECTED) {
      closeModal();
    }
    if (modalState.status === MODAL_STATUS.ERRORED) {
      setModalState((prevState) => {
        return { ...prevState, modalVisibility: true, status: MODAL_STATUS.INITIALIZED };
      });
    }
  }, [closeModal, modalState.status]);

  const preHandleExternalWalletClick = (params: ExternalWalletEventType) => {
    const { adapter } = params;
    if (DETAILED_ADAPTERS.includes(adapter))
      setModalState((prevState) => {
        return { ...prevState, detailedLoaderAdapter: adapter };
      });
    else if (adapter !== WALLET_ADAPTERS.WALLET_CONNECT_V1)
      setModalState((prevState) => {
        return { ...prevState, detailedLoaderAdapter: "" };
      });
    handleExternalWalletClick(params);
  };

  const preHandleSocialWalletClick = (params: SocialLoginEventType) => {
    setModalState((prevState) => {
      return { ...prevState, detailedLoaderAdapter: "" };
    });
    handleSocialLoginClick(params);
  };

  const externalWalletButton = (
    <div className="w3ajs-external-wallet w3a-group">
      <div className="w3a-external-toggle w3ajs-external-toggle">
        <div className="w3a-group__title">EXTERNAL WALLET</div>
        <button
          type="button"
          className="w3a-button w3ajs-external-toggle__button"
          onClick={() => {
            handleShowExternalWallets(modalState.externalWalletsInitialized);
            setModalState((prevState) => {
              return {
                ...prevState,
                externalWalletsVisibility: true,
              };
            });
          }}
        >
          Connect with Wallet
        </button>
      </div>
    </div>
  );

  const areSocialLoginsVisible = useMemo(() => {
    if (modalState.showExternalWalletsOnly) return false;
    if (Object.keys(modalState.socialLoginsConfig?.loginMethods || {}).length === 0) return false;
    const isAnySocialLoginVisible = Object.entries(modalState.socialLoginsConfig?.loginMethods || {}).some(
      ([k, v]) => k !== LOGIN_PROVIDER.EMAIL_PASSWORDLESS && v.showOnModal !== false
    );
    if (isAnySocialLoginVisible) return true;
    return false;
  }, [modalState.showExternalWalletsOnly, modalState.socialLoginsConfig?.loginMethods]);
  log.info("modal state", modalState, areSocialLoginsVisible);

  const isEmailPassworedlessLoginVisible = useMemo(() => {
    return modalState.socialLoginsConfig?.loginMethods[LOGIN_PROVIDER.EMAIL_PASSWORDLESS]?.showOnModal;
  }, [modalState.socialLoginsConfig?.loginMethods]);

  const modalClassName = `w3a-modal ${isDark ? "" : " w3a-modal--light"}`;
  return (
    modalState.modalVisibilityDelayed && (
      <div id="w3a-modal" className={modalClassName} style={{ display: "flex" }}>
        <div className={modalTransitionClasses.join(" ")}>
          <Header onClose={closeModal} appLogo={appLogo} />
          {modalState.status !== MODAL_STATUS.INITIALIZED ? (
            <div className="w3a-modal__content w3ajs-content">
              {modalState.detailedLoaderAdapter ? (
                <AdapterLoader
                  onClose={onCloseLoader}
                  appLogo={appLogo}
                  modalStatus={modalState.status}
                  message={modalState.postLoadingMessage}
                  adapter={modalState.detailedLoaderAdapter}
                />
              ) : (
                <Loader onClose={onCloseLoader} modalStatus={modalState.status} message={modalState.postLoadingMessage} />
              )}
            </div>
          ) : (
            <div className="w3a-modal__content w3ajs-content">
              {(areSocialLoginsVisible || isEmailPassworedlessLoginVisible) && !modalState.externalWalletsVisibility ? (
                <>
                  {areSocialLoginsVisible ? (
                    <SocialLogins
                      handleSocialLoginClick={(params: SocialLoginEventType) => preHandleSocialWalletClick(params)}
                      socialLoginsConfig={modalState.socialLoginsConfig}
                    />
                  ) : null}

                  {isEmailPassworedlessLoginVisible && (
                    <SocialLoginEmail
                      adapter={modalState.socialLoginsConfig?.adapter}
                      handleSocialLoginClick={(params: SocialLoginEventType) => preHandleSocialWalletClick(params)}
                    />
                  )}

                  {/* button to show external wallets */}
                  {modalState.hasExternalWallets && externalWalletButton}
                </>
              ) : (
                <ExternalWallets
                  modalStatus={modalState.status}
                  showBackButton={areSocialLoginsVisible}
                  handleExternalWalletClick={(params: ExternalWalletEventType) => preHandleExternalWalletClick(params)}
                  walletConnectUri={modalState.walletConnectUri}
                  wcAdapters={modalState.wcAdapters}
                  config={modalState.externalWalletsConfig}
                  hideExternalWallets={() =>
                    setModalState((prevState) => {
                      return { ...prevState, externalWalletsVisibility: false };
                    })
                  }
                />
              )}
            </div>
          )}

          <Footer version={version} />
        </div>
      </div>
    )
  );
}
