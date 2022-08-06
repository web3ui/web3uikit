/* eslint-disable class-methods-use-this */
import "../css/network.css";

import { BaseNetworkSwitch, CustomChainConfig } from "@web3auth/base";
import { render } from "react-dom";

import AddNetwork from "./components/AddNetwork";
import SwitchNetwork from "./components/SwitchNetwork";

function createWrapper(id?: string): HTMLElement {
  const element = document.getElementById(id || "w3a-network-container");
  if (element) return element;
  const wrapper = document.createElement("section");
  wrapper.setAttribute("id", id || "w3a-network-container");
  document.body.appendChild(wrapper);
  return wrapper;
}

export class NetworkSwitch extends BaseNetworkSwitch {
  public async addNetwork(params: { chainConfig: CustomChainConfig; appOrigin: string }): Promise<boolean> {
    const { chainConfig, appOrigin } = params;
    return new Promise((resolve, reject) => {
      const addNetworkCallback = (): void => {
        return resolve(true);
      };
      const cancelCallback = (): void => {
        return reject(new Error("User cancelled request for adding new network"));
      };
      render(
        <AddNetwork appOrigin={appOrigin} chainConfig={chainConfig} onAddNetwork={addNetworkCallback} onCancelNetwork={cancelCallback} />,
        createWrapper("w3a-add-network-container")
      );
    });
  }

  public async switchNetwork(params: {
    currentChainConfig: CustomChainConfig;
    newChainConfig: CustomChainConfig;
    appOrigin: string;
  }): Promise<boolean> {
    const { currentChainConfig, appOrigin, newChainConfig } = params;

    return new Promise((resolve, reject) => {
      const switchNetworkCallback = (): void => {
        return resolve(true);
      };
      const cancelCallback = (): void => {
        return reject(new Error("User cancelled request for adding new network"));
      };
      render(
        <SwitchNetwork
          appOrigin={appOrigin}
          currentChainConfig={currentChainConfig}
          newChainConfig={newChainConfig}
          onSwitchNetwork={switchNetworkCallback}
          onCancelNetwork={cancelCallback}
        />,
        createWrapper("w3a-switch-network-container")
      );
    });
  }

  public cancel(): void {}
}
