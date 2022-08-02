import { ADAPTER_STATUS, log } from "@web3auth/base";
import { useEffect } from "react";

import { MODAL_STATUS, ModalStatusType } from "../interfaces";
import Icon from "./Icon";
import Image from "./Image";

const DEFAULT_LOGO_URL = "https://images.web3auth.io/web3auth-logo.svg";

interface DetailedLoaderProps {
  message?: string;
  appLogo?: string;
  adapter: string;
  modalStatus: ModalStatusType;
  onClose: () => void;
}

const closeIcon = <Icon iconName="close" />;

export default function DetailedLoader(props: DetailedLoaderProps) {
  const { adapter, appLogo = DEFAULT_LOGO_URL, message, modalStatus, onClose } = props;
  const web3authIcon = <Image imageId="web3auth" />;
  const providerIcon = <Image imageId={`login-${adapter}`} />;

  useEffect(() => {
    log.debug("adapter loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [modalStatus, onClose]);

  return modalStatus !== MODAL_STATUS.INITIALIZED ? (
    <div className="w3ajs-modal-loader w3a-modal__loader">
      <div className="w3a-modal__loader-content">
        <div className="w3a-modal__loader-info">
          {modalStatus === MODAL_STATUS.CONNECTING && (
            <>
              <div className="w3a-modal__loader-bridge">
                <div className="w3a-modal__loader-app-logo">
                  <img src={appLogo} alt="" />
                </div>
                <div className="w3a-modal__connector">
                  <div className="w3a-modal__connector-beat">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                <div className="w3a-modal__loader-adapter">{providerIcon}</div>
              </div>
              <div>
                <div className="w3a-modal__loader-bridge-message">
                  Verify on your <span>{adapter}</span> account to continue
                </div>
              </div>
            </>
          )}
          {modalStatus === ADAPTER_STATUS.CONNECTED && <div className="w3ajs-modal-loader__message w3a-spinner-message">{message}</div>}
          {modalStatus === ADAPTER_STATUS.ERRORED && (
            <div className="w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error">{message}</div>
          )}
        </div>
        <div className="w3a-spinner-power">
          <div>Self-custodial login by</div>
          {web3authIcon}
        </div>
      </div>
      {(modalStatus === ADAPTER_STATUS.CONNECTED || modalStatus === ADAPTER_STATUS.ERRORED) && (
        <button type="button" className="w3a-header__button w3ajs-loader-close-btn" onClick={onClose}>
          {closeIcon}
        </button>
      )}
    </div>
  ) : null;
}
