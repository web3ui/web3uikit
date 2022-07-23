import { ADAPTER_STATUS, log } from "@web3auth/base";
import { useEffect } from "react";

import { MODAL_STATUS, ModalStatusType } from "../interfaces";
import Icon from "./Icon";
import Image from "./Image";

interface LoaderProps {
  message?: string;
  modalStatus: ModalStatusType;
  label?: string;
  onClose?: () => void;
  canEmit?: boolean;
}

const closeIcon = <Icon iconName="close" />;

export default function Loader(props: LoaderProps) {
  const { message, modalStatus, label, onClose, canEmit = true } = props;
  const web3authIcon = <Image imageId="web3auth" />;

  useEffect(() => {
    log.debug("loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED && canEmit) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [canEmit, modalStatus, onClose]);

  return modalStatus !== MODAL_STATUS.INITIALIZED ? (
    <div className="w3ajs-modal-loader w3a-modal__loader">
      <div className="w3a-modal__loader-content">
        <div className="w3a-modal__loader-info">
          {modalStatus === MODAL_STATUS.CONNECTING && (
            <div className="w3ajs-modal-loader__spinner w3a-spinner">
              <div className="w3a-spinner__head" />
              <div className="w3a-spinner__mask" />
            </div>
          )}

          <div className="w3ajs-modal-loader__label w3a-spinner-label">{label}</div>
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
