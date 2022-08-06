import "../css/network.css";
import { BaseNetworkSwitch, CustomChainConfig } from "@web3auth/base";
export declare class NetworkSwitch extends BaseNetworkSwitch {
    addNetwork(params: {
        chainConfig: CustomChainConfig;
        appOrigin: string;
    }): Promise<boolean>;
    switchNetwork(params: {
        currentChainConfig: CustomChainConfig;
        newChainConfig: CustomChainConfig;
        appOrigin: string;
    }): Promise<boolean>;
    cancel(): void;
}
