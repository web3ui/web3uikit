import { CustomChainConfig } from "@web3auth/base";
import { useEffect, useState } from "react";

import { getNetworkIconId } from "../utils";
import Image from "./Image";

interface SwitchNetworkProps {
  currentChainConfig: CustomChainConfig;
  newChainConfig: CustomChainConfig;
  appOrigin: string;
  onSwitchNetwork: (currentChainId: string, newChainId: string) => void;
  onCancelNetwork: () => void;
}

function SwitchNetwork(props: SwitchNetworkProps) {
  const { currentChainConfig, newChainConfig, appOrigin, onSwitchNetwork, onCancelNetwork } = props;
  const [showModal, setShowModal] = useState(true);

  const [fromNetworkIconId, setFromNetworkIconId] = useState("network-default");
  const [toNetworkIconId, setToNetworkIconId] = useState("network-default");

  useEffect(() => {
    getNetworkIconId(currentChainConfig.ticker)
      .then((id) => {
        return setFromNetworkIconId(id);
      })
      .catch(() => {});
    getNetworkIconId(newChainConfig.ticker)
      .then((id) => {
        return setToNetworkIconId(id);
      })
      .catch(() => {});
  }, [currentChainConfig.chainId, currentChainConfig.ticker, newChainConfig.chainId, newChainConfig.ticker]);
  return (
    showModal && (
      <div id="w3a-modal-network">
        <div className="w3a-switch-network">
          <div className="w3a-switch-network__title">This site is requesting to switch Network</div>
          <div>
            <a className="w3a-switch-network__link" href={appOrigin}>
              {appOrigin}
            </a>
          </div>
          <div className="w3a-switch-network__connect">
            <div>
              <div className="w3a-switch-network__logo">
                <Image imageId={fromNetworkIconId} />
              </div>
              <div>
                <div>From:</div>
                <div>{currentChainConfig.displayName}</div>
              </div>
            </div>
            <div>
              <div className="w3a-switch-network__connect-divider">
                <Image imageId="network-arrow" />
              </div>
            </div>
            <div>
              <div className="w3a-switch-network__logo">
                <Image imageId={toNetworkIconId} />
              </div>
              <div>
                <div>To:</div>
                <div>{newChainConfig.displayName}</div>
              </div>
            </div>
          </div>
          <div className="w3a-switch-network__buttons">
            <button
              type="button"
              className="w3a-button"
              onClick={() => {
                setShowModal(false);
                onCancelNetwork();
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="w3a-button w3a-button--primary"
              onClick={() => {
                setShowModal(false);
                onSwitchNetwork(currentChainConfig.chainId, newChainConfig.chainId);
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default SwitchNetwork;
